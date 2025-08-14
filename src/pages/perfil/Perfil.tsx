import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
//import { ToastAlerta } from "../../utils/ToastAlerta"

function Perfil() {
	const navigate = useNavigate()

	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (usuario.token === "") {
			ToastAlerta("Você precisa estar logado", "erro")
			navigate("/")
		}
	}, [usuario.token])

	return (

        <div className="container mx-auto w-[70vw] grid grid-cols-[1.5fr_2.5fr]">
            <div className="flex gap-2 items-center">
                <img
                        className="rounded-full border-amber-500 size-50 my-auto"
                        src={usuario.foto}
                        alt={`Foto de perfil de ${usuario.nome}`}
                    />                
                <p className="">{`${usuario.nome}`}</p>
            </div>
            <div className="">
                <h2 className="my-8 text-black font-bold">Dados Pessoais</h2>
                <hr className="border-slate-800 w-full" />
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
                        type='button' 
                        className=" rounded-2xl bg-[#325E80] flex justify-center items-center  
                                   hover:bg-[#16456a] text-white w-40 py-2   ">
                        <span>Editar</span>
                    </button>
                    </div>
                 </form>
            </div>
        </div>

        
	)
}

export default Perfil;
