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
        className="flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden justify-between w-2xs h-sm">
        <header className="py-2 px-2 ">
          <img src={techs.pic} className="rounded-2xl" />
        </header>
        <p className="px-4 py-2 text-2xl  text-center font-bold">{techs.nome}</p>
        
      </motion.div>
    </>
  );
}

export default CardTech;