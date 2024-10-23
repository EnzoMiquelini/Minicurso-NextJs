import Link from "next/link";

export default function Home() {

  const noticias = [
    {
      id:"1",
      titulo:"Noticias Teste",
      descricao:"Uma noticia qualquer"
    },
    {
      id:"2",
      titulo:"Teste Noticia",
      descricao:"Noticia aleatória para teste"
    }
  ]

  return (
    <div className="w-full px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Ultimas Notícias</h1>
        <div className="flex justify-center">
          <Link href="/novanoticia" className="bg-sky-600 px-4 py-2 text-white rounded hover:bg-sky-700 transition-colors font-bold ">+ Nova Notícia</Link>
        </div>
      </header>
      <div className="w-full flex flex-col items-center">
        {
          noticias.map(noticia => (
            <div key={noticia.id} className="max-w-4xl w-full mb-4 bg-white shadow-md rounded-lg border">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{noticia.titulo}</h2>
                <p className="text-gray-700 mb-4 line-clamp-2">{noticia.descricao}</p>
                <Link className="text-sky-600 hover:text-sky-800" href={`/noticia/${noticia.id}`}>Veja Mais &gt;</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
