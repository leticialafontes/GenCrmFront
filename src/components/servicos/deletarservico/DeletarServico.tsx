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
            <div className="border-2w-full max-w-2xl mx-auto mt-30 bg-slate-100 text-gray-800 border border-gray-300 rounded-md px-8  shadow-sm hover:shadow-md transition-all duration-300">

                <h1 className="text-2xl font-bold my-4 text-left text-red-600">
                    Deletar serviço
                </h1>


                <p className=" text-gray-700 mb-6 font-bold">
                    Você tem certeza que deseja deletar a servico a seguir?
                </p>


                <div className="text-center bg-white border border-gray-200 rounded-md px-10 py-3 mb-6 shadow-sm">
                    <header className="text-gray-500 font-bold text-xs uppercase mb-1">
                        servico:
                    </header>
                    <p className="text-gray-800 font-semibold mb-3">{servico.nome}</p>


                    <div className="flex justify-end gap-4">
                        <button className="px-5 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-300 transition-all"
                            onClick={retornar}>
                            Não
                        </button>
            <button
                className="w-full text-slate-100 bg-sky-700 hover:bg-sky-500 flex items-center justify-center"
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


