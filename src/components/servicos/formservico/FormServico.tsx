import {
  useContext,
  useEffect,
  useState,
  useRef,
  type ChangeEvent
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Servico from "../../../models/Servico";
import type Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

interface FormServicoProps {
  onCreate?: () => void
  close?: any
  editData?: {open: boolean, data: any}
  refresh?: () => void
}

function FormServico({onCreate, editData, close, refresh}: FormServicoProps) {
  const {data} = {...editData}
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: "" });
  const [servico, setServico] = useState<Servico>({} as Servico);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  console.log('data',data)

  async function buscarServicoPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [navigate, token]);

  useEffect(() => {
    buscarCategorias();
    if (data.id !== undefined) {
      buscarServicoPorId(data.id);
    }
  }, [data.id]);

  useEffect(() => {
    setServico({
      ...servico,
      categoria: categoria,
    });
  }, [categoria]);

  useEffect(() => {
  if (data) {
    setServico(data);
  }
}, [data]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9]*$/;
    if(e.target.name === 'valor' && !regex.test(e.target.value)){
      return
    }

    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/servicos");
  }

  async function gerarNovoServico(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (data.id !== undefined) {
      try {
        await atualizar(`/servicos`, servico, setServico, {
          headers: { Authorization: token },
        });
        ToastAlerta("Serviço atualizado com sucesso!", "sucesso");
        close()
        refresh()
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar o Serviço", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/servicos`, servico, setServico, {
          headers: { Authorization: token },
        });
        ToastAlerta("Serviço cadastrado com sucesso!", "sucesso");
        if(onCreate) {
          onCreate()
        }
        close()
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar o Serviço", "erro");
        }
      }
    }
    setIsLoading(false);
    retornar();
  }

  const valid = (value: any) => {
    return value !== undefined || value !== "" || value !== null
  }

  const validate = valid(servico.nome) && valid(servico.descricao) && valid(servico?.categoria?.id) && valid(servico?.valor) && valid(servico?.status)

function closeModal(e: any) {
    if(modalRef.current === e.target){
      close()
    }
  }

  return (
      <div ref={modalRef} onClick={closeModal} className="container text-xl flex-col mx-auto justify-center items-center min-h-screen min-w-screen bg-sky rounded-sm p-10 backdrop-blur-sm">
            <div className="text-3xl text-center font-bold text-sky-900 mb-5">
                {data?.id ? 'Editar Serviço' : 'Cadastrar Serviço'}
            </div>

          <form className="bg-slate-100 shadow-xl/30 font-bold rounded-lg mx-auto p-8 max-w-md w-full flex flex-col gap-6" onSubmit={gerarNovoServico}>
            <div className="flex flex-col gap-2">
              <label htmlFor="nome">Nome do Serviço</label>
              <input
                type="text"
                placeholder="Informe o nome do Serviço"
                id="nome"
                name="nome"
                required
                className="border-2 border-sky-950 rounded p-2"
                value={ servico.nome ?? ""}
                
                onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="descricao">Descrição</label>
              <input
                type="text"
                placeholder="Descreva o Serviço"
                id="descricao"
                name="descricao"
                required
                className="border-2 border-slate-700 rounded p-2"
                value={servico.descricao ?? "" }
                onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="valor">Valor</label>
              <input
                type="number"
                placeholder="0000"
                id="valor"
                name="valor"
                pattern="[0-9]*"
                required
                className="border-2 border-slate-700 rounded p-2"
                value={servico.valor ?? 0}
                onChange={atualizarEstado}
                onKeyDown={(e) => {
                if (!/[0-9]|Backspace|Tab|ArrowLeft|ArrowRight|Delete/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                placeholder="Informe o Status do Serviço"
                id="status"
                name="status"
                required
                className="border-2 border-slate-700 rounded p-2"
                value={servico.status ?? ""}
                onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <p>Categoria do Serviço</p>
              <select
                name="categoria"
                id="categoria"
                value={servico.categoria?.id ?? ""}
                className="border p-2 border-slate-800 rounded"
                onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
              >
                <option value="" disabled selected className="bg-sky-200 tex-white">
                  Selecione a Categoria
                </option>
                {categorias.map((cat, index) => (
                  <option key={index} value={cat.id ? cat.id : data?.categoria?.id} >
                    {cat.nome ? cat.nome : data?.categoria?.nome}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="rounded disabled:bg-slate-200 bg-sky-700 hover:bg-sky-500 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
              disabled={!validate}
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
                <span>{data.id !== undefined ? "Atualizar" : "Cadastrar"}</span>
              )}
            </button>
          </form>
        </div>
  );
}

export default FormServico;
