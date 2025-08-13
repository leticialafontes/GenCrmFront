import { futuro } from '../data/futuro';
import CardFuturo from './CardFuturo';

function Futuro() {
  const cfuturo = futuro;
  return (
    <>

      <div id="futuro" className="bg-[#EDF2F4] container mx-auto">

        <h2 className="text-center text-[#325E80] text-4xl font-bold py-4">
          EM IMPLEMENTAÇÃO
        </h2>


        <div className="grid grid-cols-1 justify-center w-[90vh] mx-auto pb-10 gap-5">
          {cfuturo.map((metodos) => (
            <CardFuturo key={metodos.id} metodos={metodos} />
          ))}
        </div>

        <hr className=" h-0.5 mx-50 border-[#325E80] border-2 rounded-b-4xl" />
      </div>

    </>
  )
}

export default Futuro