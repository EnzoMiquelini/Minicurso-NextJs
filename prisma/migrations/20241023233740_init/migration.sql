-- CreateTable
CREATE TABLE "noticia" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "imagem" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "noticia_id_key" ON "noticia"("id");
