import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PiesChart from "../../components/grafico/pieschart/PiesChart";
import { AuthContext } from "../../contexts/AuthContext";
import BarChart from "../../components/grafico/barchart/BarChart";
import LineChart from "../../components/grafico/linechart/LineChart";

function Home() {

  const navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
      if (usuario.token === "") {
        alert("Você precisa estar logado")
        navigate("/")
      }
    }, [usuario.token])
    
    
  return (
    <>
      <div className="container mx-auto w-[75vw]">
        <h2 className="text-2xl p-2 my-2">Olá, <span className="font-semibold">{usuario.nome}</span>!</h2>
        <div className="grid grid-cols-2 mx-auto mt-2">
          <div className="py-2 m-2 flex flex-col gap-4">
            <div className="border border-slate-200 p-4 bg-white rounded-2xl shadow-lg">
              <h1 className="text-center text-lg font-semibold my-2 p-2">Origem do Contato</h1>
              <BarChart />
            </div>
            <div className="border border-slate-200 p-4 bg-white rounded-2xl shadow-lg">
              <h1 className="text-center text-lg font-semibold my-2 p-2">Contratos Assinados</h1>
              <LineChart />
            </div>
          </div>
          <div className="py-2 m-2 flex flex-col gap-4">
            <div className="border border-slate-200 p-4 bg-white rounded-2xl shadow-lg">
              <h1 className="text-center text-lg font-semibold my-2 p-2">Categoria de Serviços</h1>
              <div className="w-md mx-auto">
                <PiesChart />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="border border-slate-200 p-4 bg-white rounded-2xl shadow-lg w-1/2">
                <h1 className="text-center text-lg font-semibold my-2 p-2">Projetos Ativos</h1>
                <h1 className="text-center text-2xl font-semibold text-sky-500">18</h1>
              </div>
              <div className="border border-slate-200 p-4 bg-white rounded-2xl shadow-lg w-1/2">
                <h1 className="text-center text-lg font-semibold my-2 p-2">Faturamento</h1>
                <h1 className="text-center text-2xl font-semibold text-sky-500">R$ 1.433.645,94</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
