/*
  Warnings:

  - Added the required column `version` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "version" CHAR(8) NOT NULL;
