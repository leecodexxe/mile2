-- CreateTable
CREATE TABLE "Gamedata" (
    "session_id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "casino" VARCHAR NOT NULL,
    "machine" VARCHAR NOT NULL,
    "session_start" TIMESTAMP(6) NOT NULL,
    "session_stop" TIMESTAMP(6) NOT NULL,
    "game_type" VARCHAR NOT NULL,
    "game" VARCHAR NOT NULL,
    "wageramt" MONEY NOT NULL,
    "wagernum" INTEGER,
    "win" MONEY,
    "loss" MONEY,
    "notes" TEXT,

    CONSTRAINT "gamedata_pk" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" UUID NOT NULL,
    "email" VARCHAR NOT NULL,
    "token_id" VARCHAR NOT NULL,

    CONSTRAINT "user_pk" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_token_id_key" ON "User"("token_id");

-- AddForeignKey
ALTER TABLE "Gamedata" ADD CONSTRAINT "gamedata_fk" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
