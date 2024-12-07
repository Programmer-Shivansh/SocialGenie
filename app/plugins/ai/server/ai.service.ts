import { ReadStream } from 'fs'
import { ZodType } from 'zod'
import {
  ElizaGenerateTextOptions,
  ElizaProvider,
} from './providers/eliza/eliza.provider'

class Service {
  private openai = new ElizaProvider()

  async generateText(options: ElizaGenerateTextOptions): Promise<string> {
    return this.openai.generateText(options)
  }

  async generateJson<SchemaType extends ZodType>(
    instruction: string,
    content: string,
    schema: SchemaType,
    attachmentUrls?: string[],
  ) {
    return this.openai.generateJson<SchemaType>(
      instruction,
      content,
      schema,
      attachmentUrls,
    )
  }

  async generateImage(prompt: string): Promise<string> {
    return this.openai.generateImage(prompt)
  }

  async fromAudioToText(readStream: ReadStream): Promise<string> {
    return this.openai.fromAudioToText(readStream)
  }

  async fromTextToAudio(text: string): Promise<Buffer> {
    return this.openai.fromTextToAudio(text)
  }

  isActive(): boolean {
    return this.openai.isActive()
  }
}

export const AiService = new Service()
