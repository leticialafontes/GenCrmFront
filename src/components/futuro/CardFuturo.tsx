import { motion } from "motion/react";
import type Metodos from "../../models/Metodos";

interface SobreProps {
  metodos: Metodos
}

function CardFuturo({ metodos }: SobreProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          scale: { visualDuration: 1 },
        }}>
        <div className="flex gap-3 bg-[#85CCE5]/10 shadow-sm">
          <div className="flex items-center">
          <img src={metodos.pic} className="size-20 mt-4" />

          <div className="flex flex-col py-2 ">
            <p className="text-lg text-shadow-2xs text-[#325E80] text-left font-bold">{metodos.nome}</p>
            <p className="text-1xl text-left font-semibold">{metodos.descricao}</p>
          </div>
          </div>

        </div>
      </motion.div>
    </>
  );
}

export default CardFuturo;