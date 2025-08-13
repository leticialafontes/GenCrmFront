import { useContext, useEffect, useState, type ChangeEvent} from "react";
import type Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function CadastrarCategoria() {

    const navigate = useNavigate();
    const[categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState <boolean> (false);
    const {id} = useParams <{id: string}> ();
    const {usuario, handleLogout} = useContext (AuthContext)
    const token = usuario.token


    async function buscarPorId(id: string){
        try {
            await buscar (`/categorias/${id}`, setCategoria, {
                headers: {Authorization: token}
            })

        } catch (error: any) {
            if (error.toString().includes ('401')) {
                handleLogout ()
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!','erro')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) { 
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }


    function retornar() {
        navigate("/categorias");
    }


    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`,categoria, setCategoria, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta('A categoria foi atualizada com sucesso!','sucesso')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar categoria', 'erro')
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta('A categoria foi cadastrada com sucesso!','sucesso')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar categoria.','erro')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }


  return (

    <div className='border-2'>
        <h1>
            {id === undefined? "Cadastrar Categoria" : "Editar Categoria"}
        </h1>


        <form onSubmit= {gerarNovaCategoria}>
            <div>
                <label htmlFor="nome">Nome da Categoria</label>
                <input 
                type="text" 
                placeholder='Nome da categoria'
                name='nome'
                value={categoria.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>


            <button
                    className=" border-2"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
        </form>
    </div>
  )
}

export default CadastrarCategoria


