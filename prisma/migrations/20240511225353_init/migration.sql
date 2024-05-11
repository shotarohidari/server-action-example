-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "situation" VARCHAR(255),
    "feeling" VARCHAR(255),
    "distortion" VARCHAR(255),
    "evidence" VARCHAR(255),
    "disproof" VARCHAR(255),
    "restructuring" VARCHAR(255),
    "change" VARCHAR(255),
    "time" TIMESTAMP(6),

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
