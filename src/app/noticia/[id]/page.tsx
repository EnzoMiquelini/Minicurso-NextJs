import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import {redirect} from "next/navigation";
import {db} from "../../../../prisma/db";

type props = {
    params: {
        id: string;
    };
};

export default async function PaginaNoticia({ params }: props) {

    const {id} = await params

    const noticias = await db.noticia.findUnique({where:{id}})

    if(!noticias) redirect('/')
    else
    return (
        <div className='container mx-auto px-4 py-8'>
            <article className='bg-white shadow-md rounded-lg overflow-hidden'>
                <div className='relative w-full h-64 md:h-96'>
                    <Image
                        src={noticias.imagem}
                        alt={noticias.titulo}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className='p-6'>
                    <h1 className='text-3xl font-bold mb-2'>{noticias.titulo}</h1>
                    <p className='text-gray-600 italic mb-4'>{noticias.description}</p>
                    {noticias.conteudo.split('\n').map((paragraph, index) => (
                        <p key={index} className='mb-4'>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </article>
            <div className='mt-8 text-center'>
                <Link href='/'>
                    <Button>Voltar para a lista de notícias</Button>
                </Link>
            </div>
        </div>
    );
}