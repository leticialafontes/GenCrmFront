import { metodos } from "../data/metodos";
import CardSobre from "./CardSobre";


function Sobre() {
  const metodosApp = metodos;
  return (
    <>
      <div id="sobre" className="bg-red-900 flex flex-col pb-10">

        <div className=" flex justify-center ">

          <div className='container grid grid-cols-2 gap-30 '>
            <div className="flex flex-col gap-4 py-10">
              <div className="bg-black/10 rounded-4xl p-5 ">
                <h2 className="block text-stone-100 text-5xl font-bold text-left pb-10">
                  SOBRE
                </h2>
                <p className='text-justify text-2xl font-semibold  text-stone-100 '>
                  GenCRM é o software ideal para quem busca controlar e visualizar todas as interações com clientes de forma clara e eficiente.
                  Ele opera via API REST para integrar e gerenciar ambientes de CRM, organizando três áreas essenciais: 
                  registros de usuários, catálogo de serviços e categorias, com funcionalidades essenciais para o cotidiano da gestão.
                  Além disso, há ferramentas extras especialmente pensadas para otimizar processos e tornar o uso da plataforma ainda mais produtivo.
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-10 ">
              <img
                src="https://ik.imagekit.io/gengrupo03/landing-rh/1901.jpg?updatedAt=1754678930768"
                alt="Imagem da página Home"
                className='w-1vh rounded-b-full'
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row justify-center gap-12 ">
          {metodosApp.map((metodos) => (
            <CardSobre key={metodos.id} metodos={metodos} />
          ))}
        </div>
        
      </div>
    </>
  )
}

export default Sobre