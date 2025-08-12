import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function FooterLanding() {

  const data = new Date().getFullYear()
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div id="contato" className="flex justify-center bg-red-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className=' cursor-pointer text-xl font-medium'
            onClick={() => setVisible(true)}>
            Gen RH | Copyright: {data}
          </p>

          <AnimatePresence>
            {visible && (
              <motion.img
                src="https://ik.imagekit.io/gengrupo03/landing-rh/Gemini_Generated_Image_g8szmzg8szmzg8sz.png?updatedAt=1754869286621"
                alt="Agradecimento"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1 }}
                className="rounded-4xl p-3"
              />
            )}
          </AnimatePresence>

          <p className='text-lg py-2'>Acesse nossas redes sociais</p>
          <div className='flex gap-4'>
            <LinkedinLogo size={48} weight='bold' className='hover:backdrop-saturate-200' />
            <InstagramLogo size={48} weight='bold' className='hover:backdrop-saturate-200' />
            <FacebookLogo size={48} weight='bold' className='hover:backdrop-saturate-200' />
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterLanding