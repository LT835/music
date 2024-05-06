/*
  Warnings:

  - You are about to drop the column `love` on the `Song` table. All the data in the column will be lost.
  - Added the required column `type` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "love",
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "songUrl" TEXT NOT NULL,
    "likeCount" INTEGER NOT NULL,
    "listenerCount" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
