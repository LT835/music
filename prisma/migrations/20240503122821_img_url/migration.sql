/*
  Warnings:

  - Added the required column `imgUrl` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "imgUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "imgUrl" TEXT NOT NULL;
