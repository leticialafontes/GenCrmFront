import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function CadastrarCategoria() {

    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            })

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'erro')
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
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta('A categoria foi atualizada com sucesso!', 'sucesso')
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
                ToastAlerta('A categoria foi cadastrada com sucesso!', 'sucesso')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar categoria.', 'erro')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }


    return (
        <div className="w-full max-w-2xl mx-auto bg-slate-100 text-gray-800 border border-gray-300 rounded-md px-8 py-6 my-6 shadow-sm 
hover:shadow-md transition-all duration-300">

            <h1 className="text-2xl font-bold mb-4 text-left">
                {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h1>

            <form onSubmit={gerarNovaCategoria} className="flex flex-col gap-4">
                <div className="flex flex-col text-left">
                    <label htmlFor="nome" className="mb-1 font-medium text-sm text-gray-700">
                        Nome da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        name="nome"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
                    />
                </div>

                <button
                    className="self-end px-6 py-2 rounded-md bg-gray-300 text-gray-700 hover:bg-sky-600 hover:text-white transition-all duration-300 font-medium"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    )}
                </button>
            </form>
        </div>
    )
}

export default CadastrarCategoria


