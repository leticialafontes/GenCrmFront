import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import type Devs from "../../models/Devs";
import { motion } from "motion/react"

interface SobreProps {
  devs: Devs;
}

function CardEquipe({ devs }: SobreProps) {
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
        <header className="py-2 px-2 bg-white">
          <img src={devs.pic} className="rounded-2xl" />
        </header>
        <p className="px-4 py-2 text-2xl bg-white text-center font-bold">{devs.nome}</p>
        <p className="px-4 pb-4 text-1xl bg-white text-center">{devs.cargo}</p>
        <div className="flex flex-col bg-white">
          <a href={devs.linkedin} target="_blank" className="text-white bg-blue-600 hover:bg-blue-500 cursor-pointer p-1 flex items-center justify-center rounded-2xl m-1">
            <LinkedinLogoIcon size={24} className="m-1" /> LinkedIn
          </a>
          <a href={devs.github} target="_blank" className="text-white bg-black hover:bg-slate-600 cursor-pointer p-1 flex items-center justify-center rounded-2xl mx-1 my-2">
            <GithubLogoIcon size={24} className="m-1" />GitHub
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default CardEquipe;