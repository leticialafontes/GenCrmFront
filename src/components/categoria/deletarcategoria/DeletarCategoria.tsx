import { useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function DeletarCategoria() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'erro')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);


    async function deletarCategoria() {
        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            ToastAlerta('Categoria deletada com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao deletar categoria', 'erro')
            }
        }

        setIsLoading(false);
        retornar()
    }
    function retornar() {
        navigate("/categorias")
    }


    return (

        <div className='min-h-[80vh] py-6'>


            <div className="border-2w-full max-w-2xl mx-auto bg-slate-100 text-gray-800 border border-gray-300 rounded-md px-8  shadow-sm hover:shadow-md transition-all duration-300">

                <h1 className="text-2xl font-bold my-4 text-left text-red-600">
                    Deletar categoria
                </h1>


                <p className=" text-gray-700 mb-6 font-bold">
                    Você tem certeza que deseja deletar a categoria a seguir?
                </p>


                <div className="bg-white border border-gray-200 rounded-md px-4 py-3 mb-6 shadow-sm">
                    <header className="text-gray-500 text-xs uppercase mb-1">
                        Categoria:
                    </header>


                    <p className="text-gray-800 font-semibold">{categoria.nome}</p>


                    <div className="flex justify-end gap-4">
                        <button className="px-5 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-300 transition-all"
                            onClick={retornar}>
                            Não
                        </button>


                        <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-all"
                            onClick={deletarCategoria}>
                            {isLoading ?
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> :
                                <span>Sim</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria
