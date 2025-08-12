import { Link } from "react-router-dom";
import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import type Servico from "../../../models/Servico";

interface TabelaServicosProps{
  servico: Servico
}

function TabelaServicos({servico} : TabelaServicosProps) {

  return (
    <tr className="bg-white border hover:bg-gray-200 text-center">
        <td className="px-6 py-4 text-black text-lg">{servico.id}</td>
        <td className="px-6 py-4 text-black text-lg">{servico.nome}</td>
        <td className="px-6 py-4 text-black text-lg">{servico.descricao}</td>
        <td className="px-6 py-4 text-black text-lg">R$ {servico.valor}</td>
        <td className="px-6 py-4 text-black text-lg">{servico.status}</td>      
        <td className="px-6 py-4 text-black text-lg">{servico.categoria?.nome}</td>
        <td className="font-lg">
            <div className="flex justify-center gap-2">
                <Link to={`/editarservico/${servico.id}`}>
                <PencilSimpleIcon className="border bg-yellow-200 text-black text-2xl p-1 rounded" />
                </Link>
                <Link to={`/deletarservico/${servico.id}`}>
                <TrashIcon className="border bg-red-200 text-black text-2xl p-1 rounded" />
                </Link>
            </div>
        </td>
    </tr>
  );
}

export default TabelaServicos