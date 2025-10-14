import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type NotasDeAtualizacoesProps = {
  darkMode: boolean;
};

function NotasDeAtualizacoes({ darkMode }: NotasDeAtualizacoesProps) {
  const thanksRef = useRef(null);
  const isInView = useInView(thanksRef, { once: true, margin: '-150px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
  }, [isInView, controls]);

  const cards = [
    {
      id: 1,
      titulo: '📱 Versão Mobile',
      descricao:
        'Vamos desenvolver uma versão mobile para facilitar o acesso ao GENCRM em qualquer lugar. A experiência será otimizada para smartphones e tablets, mantendo todas as funcionalidades essenciais.',
    },
    {
      id: 2,
      titulo: '🔐 Hierarquia de Acesso',
      descricao:
        'O sistema conta com diferentes níveis de acesso: liderança vê tudo, equipe vê o necessário, garantindo segurança e organização.',
    },
    {
      id: 3,
      titulo: '👥 Conheça a Equipe',
      descricao: 'Escaneie o QR Code para acessar o perfil dos integrantes do grupo.',
      qrCode: true,
    },
  ];

  const bgMain = darkMode ? 'bg-[#1E293B]' : 'bg-[#EDF2F4]';
  const textPrimary = darkMode ? 'text-[#F1F5F9]' : 'text-[#0D1317]';
  const cardBg = darkMode ? 'bg-[#334155]' : 'bg-white';
  const cardText = darkMode ? 'text-[#EDF2F4]' : 'text-[#0D1317]';
  const borderColor = darkMode ? 'border-[#85CCE5]' : 'border-[#85CCE5]';
  const titleColor = darkMode ? 'text-[#85CCE5]' : 'text-[#325E80]';
  const cardShadow = darkMode
    ? 'shadow-[0_0_40px_rgba(133,204,229,0.15)]'
    : 'shadow-[0_12px_60px_rgba(0,0,0,0.3)]';

  return (
    <div
      className={`min-h-screen ${bgMain} px-8 py-16 ${textPrimary} font-sans transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-24">
          <h1
            className={`text-6xl font-extrabold ${titleColor} mb-6 drop-shadow-md tracking-tight`}
          >
            Projetos para o Futuro
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed"
          >
            Conheça as inovações e funcionalidades que planejamos implementar para levar o GENCRM ainda mais longe.
          </motion.p>
        </header>

       
        <div className="space-y-20">
          {cards.map((card) => (
            <motion.section
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className={`${cardBg} ${cardText} ${cardShadow} rounded-3xl p-10 md:p-16 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_60px_rgba(133,204,229,0.2)]`}
            >
              <h2 className={`text-4xl md:text-5xl font-bold ${titleColor} mb-6`}>
                {card.titulo}
              </h2>
              <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-6">{card.descricao}</p>
              {card.qrCode && (
                <div className="flex justify-center">
                  <img
                    src="https://cdn.discordapp.com/attachments/1386782742628405268/1427298084341153882/image.png?ex=68ee5a6d&is=68ed08ed&hm=30aeb0f108ee5b1216d5113b3a5c2b2f625b4864d20b4f4e0f5127983d1a5ffd&"
                    alt="QR Code Equipe"
                    className="w-64 h-64 object-contain border-4 border-[#85CCE5] rounded-xl shadow-md transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(133,204,229,0.3)]"
                  />
                </div>
              )}
            </motion.section>
          ))}
        </div>

        <div className="h-32" />

      
        <motion.div
          ref={thanksRef}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full flex justify-center mt-24"
        >
          <div
            className={`${cardBg} ${borderColor} ${cardText} border-4 ${cardShadow} rounded-3xl px-10 py-20 text-center relative overflow-hidden w-full max-w-[1200px]`}
          >
            <motion.div className="flex justify-center mb-12">
              <motion.img
                src="https://ik.imagekit.io/gengrupo03/genCRM/ChatGPT_Image_10_de_jul._de_2025_12_18_08.png?updatedAt=1755020474733"
                alt="Logo do GENCRM"
                className="w-64 h-auto object-contain opacity-90 drop-shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <h2 className={`text-6xl md:text-7xl font-extrabold ${titleColor} mb-10 leading-tight`}>
              Muito Obrigado pela atenção!
            </h2>
            <p className="text-4xl md:text-5xl font-semibold">Equipe GENCRM 💙</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NotasDeAtualizacoes;
