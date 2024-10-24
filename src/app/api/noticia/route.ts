import {NextRequest, NextResponse} from "next/server";
import {db} from "../../../../prisma/db";
import {revalidatePath} from "next/cache";

export async function POST(request:NextRequest){
    const {titulo,descricao,conteudo,imagem} = await request.json()

    const noticia = await db.noticia.create({
        data:{
            titulo,
            conteudo,
            imagem,
            description:descricao
        }
    })

    revalidatePath('/')

    return NextResponse.json({
        status: 201,
        mensagem: 'Sucesso',
    })
}