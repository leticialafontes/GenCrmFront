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
		<div className="flex h-screen  ">
			<div className=" w-1/3 p-8 bg-[#EDF2F4]">

            <div className="flex justify-center">
				<img
					className="w-40 m-5 rounded-full border-2 border-white relative z-10"
					src={usuario.foto}
					alt={`Foto de perfil de ${usuario.nome}`}
				/>
            
            <div className="text-black text-2xl items-center justify-center w-42 my-8 ">
                <p className="flex items-center py-12">{`Olá, ${usuario.nome} !`}</p>
            </div>

            </div>

			</div>
        <div className="w-2/3 p-8  ">

        <div className="text-2xl items-center justify-center py-12 ">
        <h2 className="my-8 text-black font-bold">Dados Pessoais</h2>

        <hr className="border-slate-800 w-full" />

        </div>

        <div className="grid grid-cols-1 place-items-center font-bold m-8 w-full">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
                    <div className="flex flex-row w-full">
                        <label htmlFor="nome">Nome:</label>
                        <input
                              id="nome"
                             value={usuario.nome}
                            className="bg-[#EDF2F4] border-slate-700 rounded p-2 ml-2"

                        />
                    </div>
                    <div className="flex flex-row w-full">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            value={usuario.usuario}
                            className=" bg-[#EDF2F4] border-slate-700 rounded p-2 ml-2"

                        />
                    </div>
                    
                    <div className="w-full flex justify-items-start p-3 px-22 ">
                    <button 
                        type='submit' 
                        className=" rounded-2xl bg-[#325E80] flex justify-center items-center  
                                   hover:bg-[#16456a] text-white w-40 py-2   ">
                        <span>Editar</span>
                    </button>
                    </div>
                     

                 </form>
                 

                </div> 
             
                    
                </div>
            <div>

            </div>


		</div>
	)
}

export default Perfil;
