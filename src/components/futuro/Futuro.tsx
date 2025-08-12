import { futuro } from '../data/futuro';
import CardFuturo from './CardFuturo';

function Futuro() {
const cfuturo = futuro;
  return (
    <>
    <div id="futuro" className="bg-stone-100 pb-10">
        <h2 className="text-center p-10 text-red-900 text-5xl font-bold pb-10">
          VEM AÍ
        </h2>
        

                  <div className="flex flex-wrap flex-row justify-center gap-12 ">
                    {cfuturo.map((metodos) => (
                      <CardFuturo key={metodos.id} metodos={metodos} />
                    ))}
                  </div>
                  </div>
    </>
  )
}

export default Futuro