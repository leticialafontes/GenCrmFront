import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Servico from "../../../models/Servico";
import type Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

function FormServico() {
    const navigate = useNavigate();

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [servico, setServico] = useState<Servico>({} as Servico);

    const { id } = useParams<{ id: string }>();

        const { usuario, handleLogout } = useContext(AuthContext)
        const token = usuario.token

    async function buscarServicoPorId(id: string) {
        try {
        await buscar(`/servicos/${id}`, setServico, { 
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
        await buscar(`/categorias/${id}`, setCategoria, { 
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
        await buscar("/categorias", setCategorias, {
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
            ToastAlerta("Você precisa estar logado", "erro");
            navigate('/');
        }
    }, [navigate, token])


    useEffect(() => {
        buscarCategorias();

        if (id !== undefined) {
        buscarServicoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setServico({
        ...servico,
        categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setServico({
        ...servico,
        [e.target.name]: e.target.value,
        categoria: categoria,
        });
    }

    function retornar() {
        navigate("/servicos");
    }

    async function gerarNovoServico(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/servicos`, servico, setServico, {
                        headers: {
                            Authorization: token,
                        },
                    });
                ToastAlerta("Serviço atualizado com sucesso!", "sucesso")

            } catch (error: any) {
                    if (error.toString().includes('401')) {
                        handleLogout()
                    } else {
                        ToastAlerta("Erro ao atualizar o Serviço", "erro")
                    }
                }
        } else {
            try {
                await cadastrar(`/servicos`, servico, setServico, {
                        headers: {
                            Authorization: token,
                        },
                    });
                ToastAlerta("Serviço cadastrado com sucesso!", "sucesso")
            
            } catch (error: any) {
                if (error.toString().includes('401')) {
                        handleLogout()
                    } else {
                        ToastAlerta("Erro ao cadastrar o Serviço", "erro")
                    }
            }
        }

        setIsLoading(false);
        retornar();
    }

    const carregandoCategoria = categoria.nome === "";

    return (
        <div className="container flex flex-col mx-auto items-center popup-content bg-slate-700 text-white">
        <h1 className="text-4xl text-center my-8">
            {id !== undefined ? "Editar ServiÇo" : "Cadastrar ServiÇo"}
        </h1>

        <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoServico}>
            <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Nome do Serviço</label>
            <input
                type="text"
                placeholder="Informe o nome do ServiÇo"
                name="nome"
                required
                className="border-2 border-slate-700 rounded p-2"
                value={servico.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Descrição</label>
            <input
                type="text"
                placeholder="Descreva o Serviço"
                name="descricao"
                required
                className="border-2 border-slate-700 rounded p-2"
                value={servico.descricao}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="titulo">valor</label>
            <input
                type="number"
                placeholder="Informe o valor do Serviço"
                name="valor"
                required
                className="border-2 border-slate-700 rounded p-2"
                value={servico.valor}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Status</label>
            <input
                type="text"
                placeholder="Informe o Status do Serviço"
                name="status"
                required
                className="border-2 border-slate-700 rounded p-2"
                value={servico.status}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            </div>
            <div className="flex flex-col gap-2">
            <p>Categoria do Servico</p>
                <select
                    name="categoria"
                    id="categoria"
                    className="border p-2 border-slate-800 rounded"
                    onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                >
                    <option value="" selected disabled>
                    Selecione o Categoria
                    </option>

                    {categorias.map((categoria) => (
                    <>
                        <option value={categoria.id}>{categoria.nome}</option>
                    </>
                    ))}
                </select>
            </div>
            <button
            type="submit"
            className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
            disabled={carregandoCategoria}
            >
            {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
            }
            </button>
        </form>
        </div>
    );
    }

export default FormServico;
