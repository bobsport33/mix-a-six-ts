-- CreateTable
CREATE TABLE "Styles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Styles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL,
    "brewery" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "styleId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Beer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Styles_name_key" ON "Styles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Beer_name_key" ON "Beer"("name");

-- AddForeignKey
ALTER TABLE "Beer" ADD CONSTRAINT "Beer_id_fkey" FOREIGN KEY ("id") REFERENCES "Styles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
