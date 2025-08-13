import { motion } from "motion/react";
import type Tecnologias from "../../models/Tecnologias";

interface SobreProps {
  techs: Tecnologias;
}

function CardTech({ techs }: SobreProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                scale: {visualDuration: 0.2 },
            }}
        className="flex flex-col bg-white shadow-lg rounded-4xl overflow-hidden items-center justify-between w-1/10 h-1/10 ">
        <header>
          <img src={techs.pic} className="rounded-2xl p-1" />
        </header>
        <p className="pb-2 text-lg  text-center font-bold">{techs.nome}</p>
        
      </motion.div>
    </>
  );
}

export default CardTech;