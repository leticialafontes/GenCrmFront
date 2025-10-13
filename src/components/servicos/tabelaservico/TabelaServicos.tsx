import { Link } from "react-router-dom";
import { InfoIcon, PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import type Servico from "../../../models/Servico";

interface TabelaServicosProps{
  servico: Servico,
  onEdit?: any
}

function TabelaServicos({servico, onEdit} : TabelaServicosProps) {

  return (
    <tr className="odd:bg-gray-200 even:bg-stone-50 hover:bg-gray-200 transition-colors">
        <td className="px-6 py-4 text-black text-lg">{servico.id}</td>
        <td className="px-6 py-4 text-black text-lg">{servico.nome}</td>
        <td className="px-6 py-4 text-black text-lg">{servico.descricao}</td>
        <td className="px-6 py-4 text-black text-lg">{new Intl.NumberFormat("pt-br", {style:"currency", currency:"BRL"}).format(servico.valor)}</td>
        <td className="px-6 py-4 text-black text-lg">{servico.status}</td>      
        <td className="px-6 py-4 text-black text-lg">{servico.categoria?.nome}</td>
        <td className="font-lg">
            <div className="flex gap-2 justify-center">
                <button  onClick={() => onEdit(servico)} className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-200 text-gray-700 
                                    hover:bg-gray-600 hover:text-white rounded-md transition duration-200">
                    <PencilSimpleIcon size={18} weight="bold" />
                    Editar
                </button>
                <Link to={`/deletarservico/${servico.id}`}>
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-200 text-gray-700 
                                      hover:bg-red-600 hover:text-white rounded-md transition duration-200">
                        <TrashIcon size={18} weight="bold" />
                        Deletar
                    </button>
                </Link>
                <Link to={`/manutencao`}>
                <button className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-200 text-gray-700 hover:bg-yellow-600 hover:text-white rounded-md transition duration-200">
                    <InfoIcon size={18} weight="bold"/>
                    info
                </button>
              </Link>
            </div>
        </td>
    </tr>
  );
}

export default TabelaServicos