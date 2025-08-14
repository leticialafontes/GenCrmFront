import { metodos } from "../data/metodos";
import CardSobre from "./CardSobre";


function Sobre() {
  const metodosApp = metodos;
  return (
    <>
      <div id="sobre" className="bg-[#EDF2F4] flex flex-col pb-10">

        <div className="bg-[#85CCE5]/10 px-5 mx-20 rounded-4xl shadow-lg">

          <div className="flex justify-center">

            <div className='container grid grid-cols-2 justify-center'>
              <div className="flex flex-col p-5">

                <h2 className="text-[#325E80] text-4xl font-bold text-left pb-5 pt-5">
                  SOBRE
                </h2>
                <p className='text-justify text-2xl font-semibold  text-black/90 '>
                  GenCRM é o software ideal para quem busca controlar e visualizar todas as interações com clientes de forma clara e eficiente.
                  Ele opera via API REST para integrar e gerenciar ambientes de CRM, organizando três áreas essenciais:
                  registros de usuários, catálogo de serviços e categorias, com funcionalidades essenciais para o cotidiano da gestão.
                  Além disso, há ferramentas extras especialmente pensadas para otimizar processos e tornar o uso da plataforma ainda mais produtivo.
                </p>

              </div>
              <div className="flex justify-center ">
                <img
                  src="https://ik.imagekit.io/gengrupo03/genCRM/ChatGPT_Image_10_de_jul._de_2025_12_17_28.png?updatedAt=1755020474593"
                  alt="Imagem do logo"
                  className='w-11/12 '
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 pb-5 ">
            {metodosApp.map((metodos) => (
              <CardSobre key={metodos.id} metodos={metodos} />
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default Sobre