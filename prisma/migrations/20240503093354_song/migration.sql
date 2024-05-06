-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "songUrl" TEXT NOT NULL,
    "love" BOOLEAN NOT NULL,
    "likeCount" INTEGER NOT NULL,
    "listenerCount" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);
