import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TabelaServicos from "../tabelaservico/TabelaServicos";
import type Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { Hourglass } from "react-loader-spinner";
import ModalServico from "../modalservico/ModalServico";

function ListaServicos() {
    const navigate = useNavigate();

    // 1. Estados para armazenar a lista de serviços, os status e o status selecionado
    const [servicos, setServicos] = useState<Servico[]>([]);
    const [statusOptions, setStatusOptions] = useState<string[]>([]);
    const [statusSelecionado, setStatusSelecionado] = useState<string>('');

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    // 2. Função para buscar todos os serviços
    async function buscarServicos() {
        try {
            await buscar('/servicos', setServicos, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    // 3. Função para buscar os status do backend
    async function buscarStatus() {
        try {
            // Suponha que seu endpoint para status seja '/servicos/status'
            // Ajuste conforme o seu backend
            await buscar('/servicos/status', setStatusOptions, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            console.error("Erro ao buscar status:", error);
        }
    }

    // 4. Efeito para verificar o token e buscar os dados iniciais
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        } else {
            buscarServicos();
            buscarStatus(); // Chama a função para buscar os status
        }
    }, [navigate, token]);

    // 5. Função para lidar com a mudança do status no dropdown
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusSelecionado(event.target.value);
    };

    // 6. Lógica de filtragem dos serviços
    const servicosFiltrados = servicos.filter(servico => {
        if (statusSelecionado === '') {
            // Se nenhum status for selecionado, retorna todos os serviços
            return true;
        }
        // Retorna apenas os serviços cujo status corresponda ao selecionado
        return servico.status === statusSelecionado;
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
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#4B0082', '#8A2BE2']}
                    />
                </div>
            )}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4">
                    {/* 7. Adicionando o dropdown de status dinâmico */}
                    <label htmlFor="status-select" className="mr-2">Filtrar por Status:</label>
                    <select
                        id="status-select"
                        value={statusSelecionado}
                        onChange={handleStatusChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Todos</option>
                        {/* Mapeando as opções de status buscadas do backend */}
                        {statusOptions.map((status) => (
                            <option key={status} value={status}>
                                {status.replace(/_/g, ' ')}
                            </option>
                        ))}
                    </select>
                    <div className="flex justify-around gap-4">
                        <ModalServico />
                    </div>

                </div>
                <table className="w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        {/* 8. Renderizar a lista filtrada */}
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