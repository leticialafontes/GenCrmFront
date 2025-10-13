import { Link } from "react-router-dom"

function NavbarLanding() {

    return (
        <>
            <nav className="absolute w-[90%] left-1/2 transform -translate-x-1/2 top-2 bg-[#FAFEFD] rounded-4xl shadow-md ">
                <div className="container w-[170vh] mx-auto flex items-center justify-between">
                    <div>
                        <a href="#landing">
                            <img src="https://ik.imagekit.io/gengrupo03/genCRM/ChatGPT_Image_10_de_jul._de_2025_12_17_28.png?updatedAt=1755020474593"
                                alt="Logo da GenCRM"
                                className='h-16' /></a>
                    </div>
                    <div className="flex gap-8 text-center items-center text-black font-semibold">
                        <a href="#equipe" className="hover:text-[#85CCE5] hover:underline decoration-2">Equipe</a>
                        <a href="#sobre" className="hover:text-[#85CCE5] hover:underline decoration-2">Sobre</a>
                        <a href="#tech" className="hover:text-[#85CCE5] hover:underline decoration-2">Tech</a>
                        <a href="#contato" className="hover:text-[#85CCE5] hover:underline decoration-2">Contato</a>
                        <Link to="/login" className="hover:text-[#85CCE5] hover:underline decoration-2">Entre/<br />Cadastre-se</Link>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarLanding