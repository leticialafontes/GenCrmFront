import { Link } from "react-router-dom";
import { InfoIcon, PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import type Categoria from "../../../models/Categoria";

interface TabelaCategoriasProps{
  categoria: Categoria
}

function TabelaCategorias({categoria} : TabelaCategoriasProps) {

  return (
    <tr className="odd:bg-gray-200 even:bg-stone-50 hover:bg-gray-200 transition-colors">
        <td className="px-6 py-4 text-black text-lg">{categoria.id}</td>
        <td className="px-6 py-4 text-black text-lg">{categoria.nome}</td>
        <td className="font-lg">
            <div className="flex gap-2 justify-end mr-5">
                <Link to={`/categorias/editar/${categoria.id}`}>
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-200 text-gray-700 hover:bg-gray-600 hover:text-white rounded-md transition duration-200">
                        <PencilSimpleIcon size={18} weight="bold" />
                        Editar
                    </button>
                </Link>
               <Link to={`/categorias/deletar/${categoria.id}`}>
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-200 text-gray-700 hover:bg-red-600 hover:text-white rounded-md transition duration-200">
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

export default TabelaCategorias