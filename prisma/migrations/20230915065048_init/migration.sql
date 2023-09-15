-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "ip_address" INET NOT NULL,
    "country" VARCHAR(60),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
