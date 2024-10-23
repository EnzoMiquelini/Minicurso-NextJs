"use client"
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Link from "next/link";
import { FormEvent } from "react";


export default function NovaNoticia() {

    async function onSubmit(evento :FormEvent<HTMLFormElement> & {
        target: {
            titulo:{value: string}
            descricao:{value: string}
            conteudo:{value: string}
            imagem:{value: string}
        }
    }) {

        const titulo = evento.target.titulo.value
        const descricao = evento.target.descricao.value
        const conteudo = evento.target.conteudo.value
        const imagem = evento.target.imagem.value
        
        alert(titulo+descricao+conteudo+imagem)
        alert(evento.target.titulo.value)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Nova Notícia</h1>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
             <TextInput label="Titulo" name="titulo"/>
             <TextInput label="Descrição" name="descricao"/>
             <TextArea label="Conteúdo" name="conteudo"/>
             <TextInput label="URL da Imagem" name="imagem"/>
             <div className="flex justify-between items-center">
                <Link href='/'>
                        <Button type="button" className="bg-gray-500 hover:bg-gray-600">Voltar</Button>
                </Link>
                <Button type="submit">Enviar</Button>
             </div>
            </form>
        </div>
    )
}