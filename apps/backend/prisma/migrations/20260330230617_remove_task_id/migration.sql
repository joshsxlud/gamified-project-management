/*
  Warnings:

  - You are about to drop the column `taskId` on the `Task` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Task_taskId_key";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "taskId";
