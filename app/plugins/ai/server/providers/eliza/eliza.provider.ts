import { ReadStream } from 'fs'
import { Readable } from 'stream'
import { z, ZodType } from 'zod'
import { ImageDescriptionService } from "@ai16z/eliza/plugin-node"
import { Service, ISpeechService, IAgentRuntime } from "@ai16z/eliza/core"
import { synthesize } from "@ai16z/eliza/tts"

export type ElizaGenerateTextOptions = {
  prompt: string
  attachmentUrls?: string[]
  history?: string[]
  context?: string
}

enum ElizaModel {
  DEFAULT = 'FLUX.1-dev',
  IMAGE = 'FLUX.1-dev',
  AUDIO_TO_TEXT = 'whisper-1',
  TEXT_TO_AUDIO = 'vits',
}

type BuildMessageOptions = {
  content: string
  attachmentUrls?: string[]
  history?: string[]
  context?: string
}

export class ElizaProvider {
  private runtime: IAgentRuntime
  private imageService: ImageDescriptionService
  private speechService: SpeechService

  constructor(runtime: IAgentRuntime) {
    this.initialize(runtime)
  }

  private initialize(runtime: IAgentRuntime): void {
    try {
      this.runtime = runtime
      this.imageService = new ImageDescriptionService()
      this.speechService = new SpeechService()
      console.log('Eliza is active')
    } catch (error) {
      console.error('Eliza failed to start')
    }
  }

  isActive(): boolean {
    return !!this.runtime
  }

  async generateText(options: ElizaGenerateTextOptions): Promise<string> {
    const { prompt, attachmentUrls, history, context } = options
    const messages = this.buildMessages({ content: prompt, attachmentUrls, history, context })
    
    const response = await this.runtime.chat.completions.create({
      messages,
      model: ElizaModel.DEFAULT
    })

    return response.choices[0].message.content
  }

  async generateJson<SchemaType extends ZodType, JsonType = z.infer<SchemaType>>(
    instruction: string,
    content: string,
    schema: SchemaType,
    attachmentUrls?: string[]
  ): Promise<JsonType> {
    const messages = this.buildMessages({ content, attachmentUrls })
    
    const response = await this.runtime.chat.completions.create({
      messages: [{ role: 'system', content: instruction }, ...messages],
      model: ElizaModel.DEFAULT,
      response_format: { type: 'json_object', schema: schema }
    })

    return JSON.parse(response.choices[0].message.content)
  }

  async generateImage(prompt: string): Promise<string> {
    const response = await this.runtime.images.generate({
      prompt,
      modelId: ElizaModel.IMAGE,
      width: 1024,
      height: 1024,
      numIterations: 20,
      guidanceScale: 3,
      seed: -1
    })

    return response.images[0].url
  }

  async fromAudioToText(readStream: ReadStream): Promise<string> {
    const buffer = await this.streamToBuffer(readStream)
    const response = await this.runtime.audio.transcribe({
      file: buffer,
      model: ElizaModel.AUDIO_TO_TEXT
    })
    
    return response.text
  }

  async fromTextToAudio(text: string): Promise<Buffer> {
    const audioStream = await this.speechService.generate(this.runtime, text)
    return this.streamToBuffer(audioStream)
  }

  private buildMessages(options: BuildMessageOptions) {
    const { content, context, attachmentUrls = [], history = [] } = options

    const systemMessage = {
      role: 'system',
      content: context?.trim() || ''
    }

    const historyMessages = history.map((message, index) => ({
      role: index % 2 === 0 ? 'user' : 'assistant',
      content: message
    }))

    const userMessage = {
      role: 'user',
      content: content,
      attachments: attachmentUrls.map(url => ({
        type: 'image',
        url
      }))
    }

    return [systemMessage, ...historyMessages, userMessage]
  }

  private async streamToBuffer(stream: ReadStream | Readable): Promise<Buffer> {
    const chunks: Buffer[] = []
    
    return new Promise((resolve, reject) => {
      stream.on('data', chunk => chunks.push(Buffer.from(chunk)))
      stream.on('error', reject)
      stream.on('end', () => resolve(Buffer.concat(chunks)))
    })
  }
}

class SpeechService extends Service implements ISpeechService {
  async generate(runtime: IAgentRuntime, text: string): Promise<Readable> {
    const { audio } = await synthesize(text, {
      engine: ElizaModel.TEXT_TO_AUDIO,
      voice: "en_US-hfc_female-medium",
    })

    return Readable.from(audio)
  }
}
// import { ReadStream } from 'fs'
// import OpenaiSDK from 'openai'
// import { zodResponseFormat } from 'openai/helpers/zod'
// import { ParsedChatCompletion } from 'openai/resources/beta/chat/completions'
// import { z, ZodType } from 'zod'

// export type OpenaiGenerateTextOptions = {
//   prompt: string
//   attachmentUrls?: string[]
//   history?: string[]
//   context?: string
// }

// enum OpenaiModel {
//   DEFAULT = 'gpt-4o-mini',
//   JSON = 'gpt-4o-mini',
//   IMAGE = 'dall-e-3',
//   AUDIO_TO_TEXT = 'whisper-1',
//   TEXT_TO_AUDIO = 'tts-1',
// }

// type BuildMessageOptions = {
//   content: string
//   attachmentUrls?: string[]
//   history?: string[]
//   context?: string
// }

// export class OpenaiProvider {
//   private api: OpenaiSDK

//   constructor() {
//     this.initialize()
//   }

//   private initialize(): void {
//     try {
//       const apiKey = process.env.SERVER_OPENAI_API_KEY

//       if (!apiKey) {
//         console.log(`Set SERVER_OPENAI_API_KEY in your .env to activate OpenAI`)
//         return
//       }

//       this.api = new OpenaiSDK({ apiKey })

//       console.log(`Openai is active`)
//     } catch (error) {
//       console.error(`Openai failed to start`)
//     }
//   }

//   isActive(): boolean {
//     if (this.api) {
//       return true
//     } else {
//       return false
//     }
//   }

//   async generateText(options: OpenaiGenerateTextOptions): Promise<string> {
//     const { prompt, attachmentUrls, history, context } = options
//     const messageOptions = { content: prompt, attachmentUrls, history, context }
//     const messages = this.buildMessages(messageOptions)

//     const response = await this.api.chat.completions.create({
//       model: OpenaiModel.DEFAULT,
//       messages: messages,
//     })

//     const content = this.parseResponseContent(response)

//     return content
//   }

//   async generateJson<
//     SchemaType extends ZodType,
//     JsonType = z.infer<SchemaType>,
//   >(
//     instruction: string,
//     content: string,
//     schema: SchemaType,
//     attachmentUrls?: string[],
//   ): Promise<JsonType> {
//     const messages = this.buildMessages({ content, attachmentUrls })

//     const response = await this.api.beta.chat.completions.parse({
//       model: OpenaiModel.JSON,
//       messages: [{ role: 'system', content: instruction }, ...messages],
//       response_format: zodResponseFormat(schema, 'result'),
//     })

//     const json = this.parseResponseJson<JsonType>(response)

//     return json
//   }

//   async generateImage(prompt: string): Promise<string> {
//     const response = await this.api.images.generate({
//       model: OpenaiModel.IMAGE,
//       prompt: prompt,
//     })

//     const imageUrl = this.parseResponseImage(response)

//     return imageUrl
//   }

//   async fromAudioToText(readStream: ReadStream): Promise<string> {
//     const transcription = await this.api.audio.transcriptions.create({
//       file: readStream,
//       model: OpenaiModel.AUDIO_TO_TEXT,
//     })

//     return transcription.text
//   }

//   async fromTextToAudio(text: string): Promise<Buffer> {
//     const mp3 = await this.api.audio.speech.create({
//       model: OpenaiModel.TEXT_TO_AUDIO,
//       voice: 'alloy',
//       input: text,
//     })

//     const buffer = Buffer.from(await mp3.arrayBuffer())

//     return buffer
//   }

//   private buildMessages(options: BuildMessageOptions) {
//     const { content, context, attachmentUrls = [], history = [] } = options

//     const promptSystem = {
//       role: 'system',
//       content: `${context}`.trim(),
//     }

//     const historyMessages = history.map((message, index) => ({
//       role: index % 2 === 0 ? 'user' : 'assistant',
//       content: [{ type: 'text', text: message }],
//     }))

//     const mainMessage = {
//       role: 'user',
//       content: [
//         { type: 'text', text: content },
//         ...attachmentUrls.map(url => ({
//           type: 'image_url',
//           image_url: { url },
//         })),
//       ],
//     }

//     return [
//       promptSystem,
//       ...historyMessages,
//       mainMessage,
//     ] as OpenaiSDK.Chat.Completions.ChatCompletionMessageParam[]
//   }

//   private parseResponseContent(
//     response: OpenaiSDK.Chat.Completions.ChatCompletion,
//   ): string {
//     return response.choices[0].message.content
//   }

//   private parseResponseImage(
//     response: OpenaiSDK.Images.ImagesResponse,
//   ): string {
//     return response.data[0].url
//   }

//   private parseResponseJson<JsonType = unknown>(
//     response: ParsedChatCompletion<JsonType>,
//   ) {
//     return response.choices[0].message.parsed
//   }
// }