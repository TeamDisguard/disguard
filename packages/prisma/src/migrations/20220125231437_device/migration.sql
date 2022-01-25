/*
  Warnings:

  - You are about to drop the column `device` on the `sessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "device";

-- CreateTable
CREATE TABLE "devices" (
    "id" VARCHAR(18) NOT NULL,
    "system" VARCHAR(100) NOT NULL,
    "browser" VARCHAR(100) NOT NULL,
    "version" VARCHAR(100) NOT NULL,
    "session_id" VARCHAR(18) NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "devices_session_id_key" ON "devices"("session_id");

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
