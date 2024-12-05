import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('06dd6301-6a05-48b2-ba75-b9da3ea1e521', '9Perry_Dach@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=11', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6e4f0c90-eaf0-42c8-8c91-a51081271d6d', '17Arely.Homenick72@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=19', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('620d4f4d-f52f-47fa-81ae-e8f965ea2cf1', '25Luna48@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=27', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('198a70ca-9917-48f2-9509-7376f3737099', '33Jovan_Stehr50@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=35', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2434b6f5-02d9-411d-b79b-149be4d4396c', '41Elisabeth43@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=43', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ad3994b6-195a-412a-8baa-e0e835132005', '49Wava_Schroeder@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'mno345pqr678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d3d68edd-6dfb-45dd-835c-2d8fa32224a1', '57Cassandra62@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b33dfa18-163c-4b31-9553-430a84d5bbca', '65Eldora41@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=67', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a9c50c66-f151-4e7e-b6a1-30f1f2ee45c3', '73Adelia_Jast31@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=75', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('02927f1a-42ea-4053-a7c0-7c97ce1a7828', 'Instagram', 'ghi789token', 'refresh012jkl', '1230', 'user_one', '2434b6f5-02d9-411d-b79b-149be4d4396c');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('8d2d969f-7866-435c-a56a-0a062b8c0024', 'Facebook', 'ghi789token', 'refresh456def', '2115', 'user_one', '198a70ca-9917-48f2-9509-7376f3737099');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('fa8e465a-b295-4a69-ac4b-8dcb791c8f78', 'Pinterest', 'def456token', 'refresh123abc', '1545', 'user_one', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('39737863-ce0e-49b3-9856-e551723b408d', 'Instagram', 'def456token', 'refresh123abc', '1230', 'user_two', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('788c7e33-5e6a-4836-a355-b2c7f98570f6', 'Twitter', 'jkl012token', 'refresh456def', '1230', 'user_four', 'ad3994b6-195a-412a-8baa-e0e835132005');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('d5319f96-0803-41e2-add3-41b215680c7e', 'LinkedIn', 'ghi789token', 'refresh345mno', '2115', 'user_four', '620d4f4d-f52f-47fa-81ae-e8f965ea2cf1');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('195307a3-7669-4d65-b6ff-edc5e3198eb4', 'Instagram', 'abc123token', 'refresh345mno', '1800', 'user_three', '620d4f4d-f52f-47fa-81ae-e8f965ea2cf1');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('ff419ca5-4424-4f69-baea-985b40a55666', 'Facebook', 'jkl012token', 'refresh789ghi', '0800', 'user_three', 'd3d68edd-6dfb-45dd-835c-2d8fa32224a1');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('9a02b261-b13e-4f9c-a453-fd62506fe696', 'Pinterest', 'jkl012token', 'refresh789ghi', '1230', 'user_three', 'ad3994b6-195a-412a-8baa-e0e835132005');
INSERT INTO "SocialAccount" ("id", "platformName", "accessToken", "refreshToken", "defaultPostingTime", "platformUsername", "userId") VALUES ('45b71082-81d8-48cc-8c69-d86d891613de', 'Instagram', 'ghi789token', 'refresh456def', '2115', 'user_five', '06dd6301-6a05-48b2-ba75-b9da3ea1e521');

INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('39d10b35-6bb6-4e47-94a0-6c566673b159', 'Engage your audience with stunning visuals.', 'https://i.imgur.com/YfJQV5z.png?id=142', 'draft', '2025-07-03T04:16:47.571Z', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', NULL);
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('9c6e4872-1e0f-4e76-bc1d-5391a992a4a0', 'Unlock your creativity with our latest AI tool', 'https://i.imgur.com/YfJQV5z.png?id=148', 'published', '2025-04-25T02:12:15.534Z', false, 'b33dfa18-163c-4b31-9553-430a84d5bbca', '39d10b35-6bb6-4e47-94a0-6c566673b159');
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('9280083a-050a-4a17-9d96-acb1d7564ef2', 'Boost your social media presence effortlessly.', 'https://i.imgur.com/YfJQV5z.png?id=154', 'pending', '2025-03-19T10:52:13.816Z', true, 'b33dfa18-163c-4b31-9553-430a84d5bbca', '9c6e4872-1e0f-4e76-bc1d-5391a992a4a0');
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('7d56b20f-c6c3-4f09-a8e0-b768e0249125', 'Unlock your creativity with our latest AI tool', 'https://i.imgur.com/YfJQV5z.png?id=160', 'failed', '2024-07-10T04:40:47.270Z', false, '6e4f0c90-eaf0-42c8-8c91-a51081271d6d', '9c6e4872-1e0f-4e76-bc1d-5391a992a4a0');
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('f2e5d0af-b386-402f-b5dc-e426e567b0ec', 'Boost your social media presence effortlessly.', 'https://i.imgur.com/YfJQV5z.png?id=166', 'published', '2024-11-02T01:28:33.788Z', false, 'ad3994b6-195a-412a-8baa-e0e835132005', '7d56b20f-c6c3-4f09-a8e0-b768e0249125');
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('6d4c8096-7d77-4ddf-a5ff-9f48d8c98139', 'Discover the future of content creation.', 'https://i.imgur.com/YfJQV5z.png?id=172', 'failed', '2025-07-02T11:05:45.922Z', false, '2434b6f5-02d9-411d-b79b-149be4d4396c', 'f2e5d0af-b386-402f-b5dc-e426e567b0ec');
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('f5a1a93d-28a5-4406-9478-b694fd630c7e', 'Engage your audience with stunning visuals.', 'https://i.imgur.com/YfJQV5z.png?id=178', 'scheduled', '2025-01-02T20:33:58.510Z', true, '6e4f0c90-eaf0-42c8-8c91-a51081271d6d', 'f2e5d0af-b386-402f-b5dc-e426e567b0ec');
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('e6d93b31-3e25-4f8a-b243-fbdefcd2045f', 'Engage your audience with stunning visuals.', 'https://i.imgur.com/YfJQV5z.png?id=184', 'scheduled', '2024-09-16T04:30:46.439Z', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7d56b20f-c6c3-4f09-a8e0-b768e0249125');
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('ddf86c18-c4ff-42e7-b55e-31c2160571a6', 'Transform your ideas into reality with AI.', 'https://i.imgur.com/YfJQV5z.png?id=190', 'scheduled', '2025-02-19T07:10:39.306Z', false, 'a9c50c66-f151-4e7e-b6a1-30f1f2ee45c3', '39d10b35-6bb6-4e47-94a0-6c566673b159');
INSERT INTO "PostData" ("id", "caption", "imageUrl", "status", "scheduledDate", "aiGenerated", "userId", "originalPostId") VALUES ('785d5ec8-6e4d-4749-be14-dfd8537a76fd', 'Engage your audience with stunning visuals.', 'https://i.imgur.com/YfJQV5z.png?id=196', 'scheduled', '2025-04-07T04:12:28.283Z', false, 'a9c50c66-f151-4e7e-b6a1-30f1f2ee45c3', '9c6e4872-1e0f-4e76-bc1d-5391a992a4a0');

INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('3debbf2e-0b4a-4d55-b709-94e58f88e26e', 'post112', 'scheduled', 47, '9c6e4872-1e0f-4e76-bc1d-5391a992a4a0', '788c7e33-5e6a-4836-a355-b2c7f98570f6');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('1897869c-a192-46e2-8c6d-4183755438b0', 'post112', 'published', 352, '9280083a-050a-4a17-9d96-acb1d7564ef2', '02927f1a-42ea-4053-a7c0-7c97ce1a7828');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('63008c42-a5c3-4227-b2de-eef19af7ffe5', 'post789', 'draft', 588, 'ddf86c18-c4ff-42e7-b55e-31c2160571a6', 'd5319f96-0803-41e2-add3-41b215680c7e');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('2ab0e9c4-661d-4265-b724-024ce30c1359', 'post123', 'scheduled', 780, 'e6d93b31-3e25-4f8a-b243-fbdefcd2045f', '8d2d969f-7866-435c-a56a-0a062b8c0024');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('c123810d-462d-4d5b-9617-4e6d6b150d06', 'post789', 'draft', 900, '9c6e4872-1e0f-4e76-bc1d-5391a992a4a0', '45b71082-81d8-48cc-8c69-d86d891613de');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('21dc6033-8c00-4436-8220-01ed1aa9b0be', 'post789', 'failed', 545, 'f2e5d0af-b386-402f-b5dc-e426e567b0ec', 'd5319f96-0803-41e2-add3-41b215680c7e');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('55d25a8c-55e5-4bb0-ae61-42822ccc7304', 'post112', 'scheduled', 500, 'f5a1a93d-28a5-4406-9478-b694fd630c7e', '788c7e33-5e6a-4836-a355-b2c7f98570f6');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('8a37f22f-9399-4d8f-b066-485cf9a844c8', 'post123', 'archived', 881, '39d10b35-6bb6-4e47-94a0-6c566673b159', '9a02b261-b13e-4f9c-a453-fd62506fe696');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('fc4883f9-f1fa-495f-9739-e5c78a7276e5', 'post112', 'draft', 226, '785d5ec8-6e4d-4749-be14-dfd8537a76fd', '45b71082-81d8-48cc-8c69-d86d891613de');
INSERT INTO "PlatformPost" ("id", "platformPostId", "status", "engagementCount", "postId", "socialAccountId") VALUES ('20c3219c-ff26-4aff-9095-8c51a310b64e', 'post456', 'archived', 98, '785d5ec8-6e4d-4749-be14-dfd8537a76fd', '8d2d969f-7866-435c-a56a-0a062b8c0024');

INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('aa21acfb-c819-4841-b758-04e37f2814d1', 'https://i.imgur.com/YfJQV5z.png?id=241', 'casual', 942, 'French', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('1e3ddbfe-b7e1-4c58-8f66-a0a1fa2a0c01', 'https://i.imgur.com/YfJQV5z.png?id=246', 'humorous', 590, 'English', '198a70ca-9917-48f2-9509-7376f3737099');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('eae547d5-b211-4d88-b5d1-8e8277b38ba2', 'https://i.imgur.com/YfJQV5z.png?id=251', 'formal', 25, 'English', '06dd6301-6a05-48b2-ba75-b9da3ea1e521');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('fa00783a-8a92-459f-99a2-087425973a09', 'https://i.imgur.com/YfJQV5z.png?id=256', 'informative', 104, 'English', '620d4f4d-f52f-47fa-81ae-e8f965ea2cf1');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('01b59e09-18a8-4019-9065-9b8189ce886b', 'https://i.imgur.com/YfJQV5z.png?id=261', 'informative', 554, 'German', 'b33dfa18-163c-4b31-9553-430a84d5bbca');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('2741ed99-0a6a-4cac-9dfe-2f6110e23be0', 'https://i.imgur.com/YfJQV5z.png?id=266', 'formal', 892, 'English', 'ad3994b6-195a-412a-8baa-e0e835132005');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('5cdd0021-6a52-4850-a274-d1de176faa69', 'https://i.imgur.com/YfJQV5z.png?id=271', 'humorous', 909, 'German', '6e4f0c90-eaf0-42c8-8c91-a51081271d6d');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('482b1357-5ceb-4d70-97cf-592309f4b95c', 'https://i.imgur.com/YfJQV5z.png?id=276', 'inspirational', 678, 'French', 'ad3994b6-195a-412a-8baa-e0e835132005');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('a65b6ac7-ca4f-4ae1-81fe-57df334435b1', 'https://i.imgur.com/YfJQV5z.png?id=281', 'inspirational', 663, 'Japanese', 'b33dfa18-163c-4b31-9553-430a84d5bbca');
INSERT INTO "ContentPreference" ("id", "aiImageStyle", "captionTone", "hashtagCount", "language", "userId") VALUES ('feef1b4d-9faa-460a-8e3b-580c9efeac58', 'https://i.imgur.com/YfJQV5z.png?id=286', 'formal', 929, 'Japanese', '6e4f0c90-eaf0-42c8-8c91-a51081271d6d');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
