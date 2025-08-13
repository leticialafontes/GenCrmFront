import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
//import { ToastAlerta } from "../../utils/ToastAlerta"

function Perfil() {
	const navigate = useNavigate()

	const { usuario } = useContext(AuthContext)

	/*useEffect(() => {
		if (usuario.token === "") {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [usuario.token]) */

	return (
		<div className="flex h-screen ">
			<div className=" w-1/3  bg-[#FAFEFD] p-8 ">

            <div className="flex justify-center">
				<img
					className="w-40 m-5 rounded-full border-2 border-white relative z-10"
					src="https://github.com/julianavsleal.png"
					alt={`Foto de perfil de ${usuario.nome}`}
				/>
            
            <div className="text-black text-2xl items-center justify-center w-42 my-8 ">
                <p className="flex items-center py-12">Olá, {usuario.nome} !</p>
            </div>

            </div>

			</div>
        <div className="w-2/3 p-8 bg-[#EDF2F4]">

        <div className=" text-black text-2xl items-center justify-center my-8 py-12  focus:outline-hidden ...">
        <h2>Dados Pessoais</h2>
        </div>
                    
                </div>
            <div>

            </div>


		</div>
	)
}

export default Perfil;
