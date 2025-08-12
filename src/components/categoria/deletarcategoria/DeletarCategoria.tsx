import { useContext, useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta";


function DeletarCategoria() {

    const navigate = useNavigate();
    const {id} = useParams<{id: string}> ();
    const [categoria, setCategoria] = useState <Categoria> ({} as Categoria);
    const [isLoading, setIsLoading] = useState <boolean> (false);
    const {usuario, handleLogout} = useContext (AuthContext)
    const token = usuario.token


    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any){
            if (error.toString().includes('403')) {
                handleLogout
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado','erro')
            navigate ('/')
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
            ToastAlerta('Categoria deletada com sucesso','erro')

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
    function retornar () {
        navigate ("/categorias")
    }


  return (
    <div className="border-2">
        <h1>Deletar categoria</h1>


        <p>Você tem certeza que deseja deletar a categoria a seguir? </p>


        <div>
            <header>
                Categoria
            </header>


            <p>{categoria.nome}</p>


            <div>
                <button onClick={retornar}>
                    Não
                </button>


                <button onClick={deletarCategoria}>
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
  )
}

export default DeletarCategoria
