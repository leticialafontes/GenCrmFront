import { Link } from "react-router-dom";
import Equipe from "../../components/equipe/Equipe";
import Futuro from "../../components/futuro/Futuro";
import Sobre from "../../components/sobre/Sobre";
import Tech from "../../components/tech/Tech";
import NavbarLanding from "../../components/navbar-landing/NavbarLanding";

function Landing() {
    return (
        <>
            <NavbarLanding />

            <div id="landing" className="bg-[#EDF2F4]">
                <div className="flex justify-between">

                    <div className='grid grid-cols-2'>

                        <div className="flex flex-col gap-6 items-center justify-center">
                            <h2 className="block text-black text-3xl md:text-7xl lg:text-9xl font-bold text-center ">
                                GenCRM
                            </h2>
                            <p className="block text-[#325E80] text-sm md:text-2xl lg:text-5xl font-bold text-center">
                                Controle seus <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-transparent bg-clip-text">
                                    dados</span>
                                , impulsione seus <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-transparent bg-clip-text">
                                    resultados</span>!
                            </p>
                            <Link to="/login" className="border-black/80 border-2 text-lg text-black/80 font-semibold rounded py-2 px-4 hover:bg-cyan-50 hover:shadow-lg cursor-pointer">
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

                <Equipe />
                <Sobre />
                <Tech />

                <div className="flex bg-[#325E80] p-10 ">

                    <div className='grid grid-cols-[2fr_1fr] items-center justify-center'>

                        <div className=" flex flex-col gap-6 ">
                            <h2 className="block text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center text-shadow-cyan-500/50 text-shadow-sm">
                                Tudo que o seu CRM precisa está aqui!
                            </h2>
                            <p className="block text-white/90 text-sm md:text-2xl lg:text-4xl font-semibold italic text-center">
                                Registro fácil, atualização ágil, < br /> recursos exclusivos e controle  <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600  bg-[length:100%_2px] border-b-[3px] border-transparent bg-no-repeat bg-bottom">
                                    completo!</span>

                            </p>
                        </div>

                        <div className="">
                            <button type="button" className="cursor-pointer px-9 py-4 text-base font-medium text-white rounded-4xl text-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 "><Link to='/login' className=' font-semibold text-2xl 
                        '>CONHEÇA O < br />SOFTWARE!</Link></button>
                        </div>

                    </div>
                </div>

                <Futuro />
            </div>
        </>
    )
}

export default Landing