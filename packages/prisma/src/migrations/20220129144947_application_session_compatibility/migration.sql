/*
  Warnings:

  - You are about to drop the column `request_limit_reset_at` on the `applications` table. All the data in the column will be lost.
  - Added the required column `request_count_reset_at` to the `applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "applications" DROP COLUMN "request_limit_reset_at",
ADD COLUMN     "request_count_reset_at" TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE "sessions" ALTER COLUMN "access_token" DROP NOT NULL,
ALTER COLUMN "refresh_token" DROP NOT NULL;
