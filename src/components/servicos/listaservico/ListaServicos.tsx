import { useContext, useEffect, useState, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import TabelaServicos from "../tabelaservico/TabelaServicos";
import type Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { Hourglass } from "react-loader-spinner";
import ModalServico from "../modalservico/ModalServico";

function ListaServicos() {
    const navigate = useNavigate();

    const [servicos, setServicos] = useState<Servico[]>([]);
    const [statusOptions, setStatusOptions] = useState<string[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    //State Status
    const [statusSelecionado, setStatusSelecionado] = useState<string>('');
    // Função para normalizar os status
    const normalize = (str: string) => str.toLowerCase().replace(/_/g, ' ').trim();

    async function buscarServicos() {
        try {
            await buscar('/servicos', (dados: SetStateAction<Servico[]>) => {
                console.log("Serviços recebidos:", dados);
                setServicos(dados);
            }, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    async function buscarStatus() {
        try {
            await buscar('/servicos/status', (dados: SetStateAction<string[]>) => {
                console.log("Status disponíveis:", dados);
                setStatusOptions(dados);
            }, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            console.error("Erro ao buscar status:", error);
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        } else {
            buscarServicos();
            buscarStatus();
        }
    }, [navigate, token]);

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusSelecionado(event.target.value);
    };

    //filtrar status
    const servicosFiltrados = servicos.filter(servico => {
        if (statusSelecionado === '') return true;
        if (!servico.status) return false;

        return normalize(servico.status) === normalize(statusSelecionado);
    });

    return (
        <>
            {servicos.length === 0 && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    height: '100vh',
                    paddingTop: '20px',
                }}>
                    <Hourglass
                        visible={true}
                        height="600"
                        width="250"
                        ariaLabel="hourglass-loading"
                        colors={['#0f6a9d', '#53bde9']}
                    />
                </div>
            )}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4">
                    <label htmlFor="status-select" className="mr-2 font-semibold">Filtrar por Status:</label>
                    <select
                        id="status-select"
                        value={statusSelecionado}
                        onChange={handleStatusChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Todos</option>
                        {statusOptions.map((status) => (
                            <option key={status} value={status}>
                                {status.replace(/_/g, ' ')}
                            </option>
                        ))}
                    </select>
                    <div className="flex justify-around gap-4 mt-4">
                        <ModalServico />
                    </div>
                </div>

                <table className="w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-stone-50 uppercase bg-sky-800 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Nome</th>
                            <th scope="col" className="px-6 py-3">Descrição</th>
                            <th scope="col" className="px-6 py-3">Valor</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Categoria</th>
                            <th scope="col" className="px-6 py-3">Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicosFiltrados.map((servico) => (
                            <TabelaServicos key={servico.id} servico={servico} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListaServicos;
