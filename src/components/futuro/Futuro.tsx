import { useState } from 'react';
import { futuro } from '../data/futuro';
import CardFuturo from './CardFuturo';
import { motion, AnimatePresence } from 'framer-motion';



function Futuro() {
  const cfuturo = futuro;
  const [visible, setVisible] = useState(false);

  return (
    <>

      <div id="futuro" className="bg-[#EDF2F4] container mx-auto">

        <h2 className="text-center text-[#325E80] text-4xl font-bold mt-10 py-8">
          EM IMPLEMENTAÇÃO
        </h2>


        <div className="grid grid-cols-1 justify-center w-[90vh] mx-auto pb-10 gap-5">
          {cfuturo.map((metodos) => (
            <CardFuturo key={metodos.id} metodos={metodos} />
          ))}
        </div>

        <hr className="cursor-pointer h-0.5 mx-50 border-[#325E80] border-2 rounded-b-4xl"  onClick={() => setVisible(true)}/>

        <AnimatePresence>
            {visible && (
              <motion.img
              
                alt="Agradecimento"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1 }}
                className="px-10"
              />
            )}
          </AnimatePresence>


      </div>

    </>
  )
}

export default Futuro