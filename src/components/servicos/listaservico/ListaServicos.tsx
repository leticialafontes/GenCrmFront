import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TabelaServicos from "../tabelaservico/TabelaServicos";
import type Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { Hourglass } from "react-loader-spinner";

function ListaServicos() {

    const navigate = useNavigate();

    const [servicos, setServicos] = useState<Servico[]>([]);


    const { usuario, handleLogout } = useContext(AuthContext);
        const token = usuario.token;

        async function buscarServicos() {
            try {
                await buscar('/servicos', setServicos, {
                    headers: {
                        Authorization: token,
                    },
                })

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                }
            }
        }
        
        useEffect(() => {
            if (token === '') {
                alert('Você precisa estar logado')
                navigate('/');
            }
        }, [navigate, token])


    useEffect(() => {
        buscarServicos();
    }, [ servicos.length ]);

    return (
        <>
        {servicos.length === 0 && (
            <div style={{
                    display: 'flex',
                    justifyContent: 'center', // centraliza horizontalmente
                    alignItems: 'flex-start', // alinha no topo verticalmente
                    height: '100vh',          // ocupa a altura inteira da tela
                    paddingTop: '20px',       // distância do topo
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
        <h1 className="text-3xl text-center font-semibold p-2 my-4">Servicos</h1>
        <div className="w-[70vw] mx-auto">
            <table className="w-full text-sm text-left rtl:text-right border overflow-hidden my-5 text-gray-500 dark:text-gray-400">
            <thead className="text-md text-white uppercase bg-gray-50 dark:bg-slate-700">
                <tr className="bg-white border-b dark:bg-gray-500 dark:border-gray-700 text-center text-lg border-gray-200">
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nome</th>
                <th scope="col" className="px-6 py-3">Descricao</th>
                <th scope="col" className="px-6 py-3">Valor</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Categoria</th>
                <th scope="col" className="px-6 py-3"></th>
                </tr>
            </thead>
            {servicos.map((servico) => (
                <TabelaServicos key={servico.id} servico={servico} />
            ))}
            </table>
        </div>
        </>
    );
    }
export default ListaServicos;
