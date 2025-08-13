import { useContext, useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar, buscarPorNome } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../cardcategoria/CardCategoria";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

function ListarCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const [busca, setBusca] = useState("");


    async function buscarCategorias() {
        try {
            setLoading(true);

            await buscar("/categorias", setCategorias, {
                headers: {
                    Authorization: token,
                },
            });

        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            }
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "erro");
            navigate("/");
        }
    }, [token]);


    useEffect(() => {
        buscarCategorias();
    }, []);

    const buscarCategoriasPorNome = async () => {
        if (busca.trim() === "") {
            ToastAlerta("Digite algo para pesquisar!", "info");
            return;
        }

        try {
            await buscarPorNome(
                `/categorias/nome/${busca}`,
                setCategorias,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
        } catch (error) {
            ToastAlerta("Erro ao buscar categorias", "erro");
        }
    };


    if (loading) {
        return (
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
        );
    }


    return (
        <div className=" min-h-[80vh] bg-no-repeat bg-cover bg-center bg-fixed px-4 py-6">

            <Link
                to="/categorias/cadastrar"
                className="my-4 items-center px-6 py-2 border border-gray-400 rounded-md text-gray-800 font-semibold text-xl hover:bg-gray-300 hover:text-gray-900 flex justify-center mx-auto transition-all duration-300 shadow-sm w-1/2">
                Cadastrar nova categoria
            </Link>

            <div className="flex justify-center gap-4 my-4">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        placeholder="Pesquisar categoria..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                </div>

                <button
                    onClick={buscarCategoriasPorNome}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md shadow-sm"
                >
                    <MagnifyingGlassIcon size={20} />
                </button>
            </div>
                <table className="w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-stone-50 uppercase bg-sky-800 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Nome</th>                            
                            <th scope="col" className="text-right pr-35 py-3">Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </tbody>
                </table>
        </div>
    );
}

export default ListarCategoria;

