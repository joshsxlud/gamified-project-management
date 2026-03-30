/*
  Warnings:

  - You are about to drop the column `AssignedOn` on the `Task` table. All the data in the column will be lost.
  - Added the required column `assignedOn` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "AssignedOn",
ADD COLUMN     "assignedOn" TEXT NOT NULL;
