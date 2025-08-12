import { devs } from '../data/devs';
import CardEquipe from './CardEquipe';

function Equipe() {
  const equipe = devs;
  return (
    <>
    <div id="equipe" className="mt-auto flex justify-center w-full bg-neutral-300 pb-10">
        <div className="container w-[80vw] flex flex-col ">
          <span className="block text-red-800 text-5xl font-bold text-left py-10 ">
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