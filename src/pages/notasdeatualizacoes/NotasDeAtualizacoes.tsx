import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import futuro from '../../components/data/futuro';

function NotasDeAtualizacoes() {
  const thanksRef = useRef(null);
  const isInView = useInView(thanksRef, { once: true, margin: '-150px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
  }, [isInView, controls]);

  return (
    <div className="min-h-screen bg-white p-8 md:p-16 text-gray-900">
      <div className="max-w-7xl mx-auto">
       
        <header className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-md">
            🚀 Projetos para o Futuro
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça as inovações e funcionalidades que planejamos implementar para levar o GENCRM ainda mais longe.
          </p>
        </header>

     
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {futuro.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 12px 35px rgba(0, 0, 0, 0.15)',
              }}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-transform duration-300 text-center flex flex-col items-center"
            >
              <img
                src={item.pic}
                alt={item.nome}
                className="w-20 h-20 object-contain mb-5"
              />
              <h3 className="text-2xl font-bold text-blue-800">{item.nome}</h3>
              <p className="text-base text-gray-600 mt-2">{item.descricao}</p>
            </motion.div>
          ))}
        </section>

        
        <div className="h-80" />

        <motion.div
          ref={thanksRef}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full flex justify-center mt-32"
        >
          <div className="w-full max-w-[1200px] bg-white border-4 border-blue-300 shadow-2xl rounded-3xl px-10 py-20 text-center relative overflow-hidden">
            <div className="flex justify-center mb-12">
              <img
                src="https://ik.imagekit.io/gengrupo03/genCRM/ChatGPT_Image_10_de_jul._de_2025_12_18_08.png?updatedAt=1755020474733"
                alt="Logo do GENCRM"
                className="w-32 h-20 object-contain opacity-80"
              />
            </div>
            <h2 className="text-6xl md:text-7xl font-extrabold text-blue-900 mb-10 leading-tight">
              Muito Obrigado pela atenção!
            </h2>
            <p className="text-3xl md:text-4xl font-semibold text-blue-700">
              Equipe GENCRM 💙
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NotasDeAtualizacoes;


