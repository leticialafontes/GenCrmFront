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
            {/* <NavbarLanding /> */}

            <div className="bg-[#EDF2F4]">
                <div className="flex justify-between">

                    <div className='grid grid-cols-2'>

                        <div className="flex flex-col gap-6 items-center justify-center">
                            <h2 className="block text-black text-3xl md:text-7xl lg:text-9xl font-bold text-center ">
                                GenCRM
                            </h2>
                            <p className="block text-[#325E80] text-sm md:text-2xl lg:text-5xl font-bold text-center">
                                Controle seus <span className="bg-gradient-to-r from-[#ef476f] via-[#ef798a] to-[#ef476f] text-transparent bg-clip-text">
                                    dados</span>
                                , impulsione seus <span className="bg-gradient-to-r from-[#ef476f] via-[#ef798a] to-[#ef476f] text-transparent bg-clip-text">
                                    resultados</span>!
                            </p>
                            <Link to="/login" className="border-black/80 border-2 text-lg text-black/80 font-semibold rounded py-2 px-4 hover:bg-[#325E80]/20 hover:shadow-lg cursor-pointer">
                                ACESSE AGORA!
                            </Link>
                        </div>

                        <div>
                            <img
                                src="https://ik.imagekit.io/gengrupo03/genCRM/Gemini_Generated_Image_4gzqat4gzqat4gzq.png?updatedAt=1755037642461"
                                alt="Imagem da página Home"
                                className='w-full'
                            />
                        </div>

                    </div>

                </div>
            </div>

            <Equipe />
            <Sobre />
            <Tech />
            <Futuro />
            <FooterLanding />
        </>
    )
}

export default Landing