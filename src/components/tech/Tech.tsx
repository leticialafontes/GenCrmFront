import { Link } from "react-router-dom";
import { tecnologiasBack } from "../data/tecnologiasback";
import { tecnologiasBanco } from "../data/tecnologiasbanco";
import { tecnologiasFront } from "../data/tecnologiasfront";
import { tecnologiasLinguagem } from "../data/tecnologiaslinguagem";
import CardTech from "./CardTech";
import { tecnologiasDeploy } from "../data/tecnologiasDeploy";

function Tech() {
  const backend = tecnologiasBack;
  const frontend = tecnologiasFront;
  const banco = tecnologiasBanco;
  const deploy = tecnologiasDeploy;

  const linguagem = tecnologiasLinguagem;

  return (
    <>
      <div id="tech" className="pb-15">
        <h2 className="text-center p-10 text-[#325E80] text-6xl text-shadow-lg font-bold pb-10">
          TECNOLOGIAS PRINCIPAIS
        </h2>

        <div className="grid grid-cols-2 gap-15 items-center ">

          <div className="text-center flex flex-col gap-5">
            <h3 className='px-10 text-4xl font-bold '>
              LINGUAGENS </h3>
            <div className="flex flex-wrap flex-row justify-center gap-12 ">
              {linguagem.map((tech) => (
                <CardTech key={tech.id} techs={tech} />
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col gap-5">
            <h3 className=' px-10 text-4xl font-bold'>
              BANCO DE DADOS </h3>
            <div className="flex flex-wrap flex-row justify-center gap-12 ">
              {banco.map((tech) => (
                <CardTech key={tech.id} techs={tech} />
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col gap-5">
            <h3 className=' px-10 text-4xl font-bold'>
              BACKEND</h3>
            <div className="flex flex-wrap flex-row justify-center gap-12 ">
              {backend.map((tech) => (
                <CardTech key={tech.id} techs={tech} />
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col gap-5">
            <h3 className=' px-10 text-4xl font-bold'>
              FRONTEND</h3>
            <div className="flex flex-wrap flex-row justify-center gap-12 ">
              {frontend.map((tech) => (
                <CardTech key={tech.id} techs={tech} />
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col gap-5">
            <h3 className=' px-10 text-4xl font-bold'>
              DEPLOY </h3>
            <div className="flex flex-wrap flex-row justify-center gap-12 ">
              {deploy.map((tech) => (
                <CardTech key={tech.id} techs={tech} />
              ))}
            </div>
          </div>

        </div >

      </div>

    </>
  )
}

export default Tech