import { devs } from '../data/devs';
import CardEquipe from './CardEquipe';

function Equipe() {
  const equipe = devs;
  return (
    <>
    <div id="equipe" className="mt-auto flex justify-center w-full bg-[#EDF2F4] pb-10">
        <div className="container w-[80vw] flex flex-col ">
          <span className="block text-[#325E80] text-5xl font-bold py-10 ml-10">
                        EQUIPE
                    </span>
          <div className="flex flex-wrap flex-row justify-center gap-12 ">
            {equipe.map((sobre) => (
              <CardEquipe key={sobre.id} devs={sobre} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Equipe