/*
  Warnings:

  - You are about to drop the column `groupId` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `Organization` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Group_groupId_key";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "groupId";

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "organizationId";
