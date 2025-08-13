import { motion } from "motion/react";
import type Metodos from "../../models/Metodos";

interface SobreProps {
  metodos: Metodos
}

function CardSobre({ metodos }: SobreProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          scale: { visualDuration: 1 },
        }}>
        <div className="flex gap-3">
          <img src={metodos.pic} className="size-10 mt-4"/>

          <div className="flex flex-col py-2 ">
            <p className="text-lg text-shadow-2xs text-[#325E80] text-left font-bold">{metodos.nome}</p>
            <p className="text-1xl text-left font-semibold">{metodos.descricao}</p>
          </div>

        </div>
      </motion.div>
    </>
  );
}

export default CardSobre;