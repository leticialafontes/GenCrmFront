import { useContext, useEffect, useState, type SetStateAction } from "react";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import TabelaServicos from "../tabelaservico/TabelaServicos";
import FormServico from "../formservico/FormServico";
import type Servico from "../../../models/Servico";
import { buscar, buscarPorNome } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { Hourglass } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

function ListaServicos() {
    const navigate = useNavigate();
    const [servicos, setServicos] = useState<Servico[]>([]);
    const [edit, setEdit] = useState({open: false, data: []});
    const { usuario, handleLogout } = useContext(AuthContext);

  const closeModal = () => setEdit({open: false, data: []});

    const token = usuario.token;

    const [busca, setBusca] = useState("");

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
    
    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado", "erro")
            navigate('/');
        } else {
            buscarServicos();
        }
    }, [navigate, token]);

    const buscarServicosPorNome = async () => {
            if (busca.trim() === "") {
                ToastAlerta("Digite algo para pesquisar!", "info");
                return;
            }
    
            try {
                await buscarPorNome(
                    `/servicos/nome/${busca}`,
                    setServicos,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
            } catch (error) {
                ToastAlerta("Erro ao buscar Servicos", "erro");
            }
        };

        const limparBusca = () => {
        setBusca("");  
        buscarServicos();  
    };

    const handleModal = () => {
        setEdit({open: true, data: []})

    }

    const handleEdit = (e) => {
        setEdit({open: true, data: e})
    }

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

            <div className="flex justify-around gap-4 mt-4">
                <Popup
                      open={edit.open}
                      onClose={closeModal}
                      modal
                    >
                      <FormServico onCreate={buscarServicos} editData={({open: edit.open, data: edit.data})} close={closeModal}/>
                    </Popup>
            </div>

            <div className="flex justify-center gap-4 my-4">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        placeholder="Pesquisar Nome do Serviço..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                </div>

                <button
                    onClick={buscarServicosPorNome}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md shadow-sm"
                >
                    <MagnifyingGlassIcon size={20} />
                </button>


                <button
                    onClick={limparBusca}
                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md shadow-sm">
                    Limpar
                </button>

                <button
                    onClick={handleModal}
                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md shadow-sm">
                    Novo serviço
                </button>


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
                    {servicos.map((servico) => (
                        <TabelaServicos key={servico.id} servico={servico} onEdit={handleEdit}/>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ListaServicos;
