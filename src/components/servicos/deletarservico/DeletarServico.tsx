import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Servico from "../../../models/Servico";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarServico() {

    const navigate = useNavigate();

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [servico, setServico] = useState<Servico>({} as Servico);

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
        await buscar(`/servicos/${id}`, setServico, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado", "erro");
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
        buscarPorId(id);
        }
    }, [id]);

    async function deletarServico() {
        setIsLoading(true);

        try {
            await deletar(`/servicos/${id}`, {
                    headers: {
                        'Authorization': token
                    }
                });
            ToastAlerta("Serviço deletado com sucesso!", "sucesso")
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar serviço", "erro")
            }
        }

        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/servicos");
    }

    return (
        <div className="container w-1/3 mx-auto">
        <h1 className="text-4xl text-center my-4">Deletar</h1>

        <p className="text-center font-semibold mb-4">
            Você tem certeza de que deseja deletar o serviço a seguir?
        </p>

        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-indigo-600 text-white text-center font-bold text-2xl">
            {servico.nome}
            </header>
            <div className="">
            <p className='py-2 px-4 text-lg bg-slate-200 h-full'><strong>Categoria:</strong> {servico.categoria?.nome}</p>
            <p className='py-2 px-4 text-lg bg-slate-200 h-full'><strong>Descrição:</strong> {servico.descricao}</p>
            <p className='py-2 px-4 text-lg bg-slate-200 h-full'><strong>Valor:</strong> {servico.valor}</p>
            <p className='py-2 px-4 text-lg bg-slate-200 h-full'><strong>Status:</strong> {servico.status}</p>
            </div>
            <div className="flex">
            <button
                className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                onClick={retornar}
            >
                Não
            </button>
            <button
                className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
                onClick={deletarServico}
            >
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
    );
}

export default DeletarServico;