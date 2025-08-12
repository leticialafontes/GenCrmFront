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
                scale: {visualDuration: 0.2 },
            }}
        className="flex flex-col bg-stone-100 shadow-xl rounded-4xl overflow-hidden justify-center py-2 w-xs">
        <p className="text-2xl text-shadow-2xs text-red-900 text-center font-bold">{metodos.nome}</p>
        <p className="text-1xl text-center font-semibold">{metodos.descricao}</p>
      </motion.div>
    </>
  );
}

export default CardSobre;