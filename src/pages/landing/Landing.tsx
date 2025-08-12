import { Link } from "react-router-dom";
import NavbarLanding from "../../components/navbar-landing/NavbarLanding";
import Equipe from "../../components/equipe/Equipe";
import Sobre from "../../components/sobre/Sobre";
import Tech from "../../components/tech/Tech";
import Futuro from "../../components/futuro/Futuro";
import FooterLanding from "../../components/footer-landing/FooterLanding";

function Landing() {
    return (
        <>
                <NavbarLanding />
                <div id="home" className="bg-[url('https://ik.imagekit.io/gengrupo03/landing-rh/Gemini_Generated_Image_phutiephutiephut.png?updatedAt=1754845611757')] bg-cover bg-center h-screen text-center flex items-center justify-center">
                    <div className="backdrop-filter backdrop-blur-sm bg-white/50 shadow-2xl p-10 flex flex-col items-center justify-center rounded-full w-svh ">
                        <img
                            src="https://ik.imagekit.io/gengrupo03/landing-rh/titulogenrh.png?updatedAt=1754858639661"
                            alt="GenRH"
                            className='h-40'
                        />
                        <span className="block text-black/60 text-5xl font-bold italic text-center ">
                            Organize, acompanhe e desenvolva
                        </span>
                        <span className="block text-black/60 text-2xl mt-4 font-bold text-center">
                            TUDO EM UM SÓ LUGAR
                        </span>

                        <div className='rounded border-black/60 border-solid border-2 py-2 px-4 mt-4 text-black/60 hover:border-red-800 bg-stone-100/30 hover:shadow-lg hover:text-red-800 cursor-pointer'
                        >
                            <Link to='/login' className=' font-semibold text-2xl 
                        '>Acesse agora!</Link>
                        </div>
                    </div>
                </div >

                <Equipe />
                <Sobre />
                <Tech />
                <Futuro />
                <FooterLanding />          
        </>
    )
}

export default Landing