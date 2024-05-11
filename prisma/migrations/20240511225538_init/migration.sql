/*
  Warnings:

  - Made the column `situation` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `feeling` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `distortion` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `evidence` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `disproof` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `restructuring` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `change` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `time` on table `Note` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Note" ALTER COLUMN "situation" SET NOT NULL,
ALTER COLUMN "feeling" SET NOT NULL,
ALTER COLUMN "distortion" SET NOT NULL,
ALTER COLUMN "evidence" SET NOT NULL,
ALTER COLUMN "disproof" SET NOT NULL,
ALTER COLUMN "restructuring" SET NOT NULL,
ALTER COLUMN "change" SET NOT NULL,
ALTER COLUMN "time" SET NOT NULL;
