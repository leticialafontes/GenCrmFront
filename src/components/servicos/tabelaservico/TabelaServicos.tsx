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
      <td className="px-6 py-4 text-black text-lg">R$ {servico.salario}</td>
      <td className="px-6 py-4 text-black text-lg">{servico.categoria?.nome}</td>
      <td className="font-lg"><Link to={`/editarservico/${servico.id}`}><PencilSimpleIcon className="border bg-yellow-200 text-black text-2xl mx-auto"/></Link></td>
      <td className="font-lg"><Link to={`/deletarservico/${servico.id}`}><TrashIcon className="border bg-red-200 text-black text-2xl mx-auto"/></Link></td>
    </tr>
  );
}

export default TabelaServicos