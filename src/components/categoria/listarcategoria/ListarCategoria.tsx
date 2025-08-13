import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
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
            <div className="flex justify-center items-center min-h-screen bg-white">
                <DNA
                    visible={true}
                    height="200"
                    width="300"
                    ariaLabel="dna-loading"
                    wrapperClass="dna-wrapper"
                />
            </div>
        );
    }


    return (
        <div className="bg-gradient-to-t from-sky-600 to-slate-100 min-h-[80vh] bg-no-repeat bg-cover bg-center bg-fixed px-4 py-6">

            <Link
                to="/categorias/cadastrar"
                className="my-4 items-center px-6 py-2 border border-gray-400 rounded-md text-gray-800 font-semibold text-xl hover:bg-gray-300 hover:text-gray-900 flex justify-center mx-auto transition-all duration-300 shadow-sm w-1/2">
                Cadastrar nova categoria
            </Link>

            <div className="flex justify-center gap-4 my-4">
                <div className="relative w-full max-w-md">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <MagnifyingGlassIcon size={20} />
                    </span>
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


            <div>
                {categorias.map((categoria) => (
                    <CardCategoria key={categoria.id} categoria={categoria} />
                ))}
            </div>
        </div>
    );
}

export default ListarCategoria;

