import { InfoIcon, PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"


interface CardCategoriaProps {
    categoria: Categoria
}


function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="w-full bg-slate-100 border border-gray-300 rounded-md px-4 py-4 my-4 shadow-sm hover:bg-slate-300 hover:shadow-md hover:scale-[1.005] transition-all duration-300">
            
        
            <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-gray-800 uppercase tracking-wide">
                    {categoria.nome}
                </p>
 

                <div className="flex gap-2">
                    <Link to={`/categorias/editar/${categoria.id}`}>
                        <button className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-200 text-gray-700 
                                           hover:bg-gray-600 hover:text-white rounded-md transition duration-200">
                            <PencilSimpleIcon size={18} weight="bold" />
                            Editar
                        </button>
                    </Link>


                    <Link to={`/categorias/deletar/${categoria.id}`}>
                        <button className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-200 text-gray-700 
                                           hover:bg-red-600 hover:text-white rounded-md transition duration-200">
                            <TrashIcon size={18} weight="bold" />
                            Deletar
                        </button>
                    </Link>


                    <Link to={`/informações`}>
                        <button className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-200 text-gray-700 
                                           hover:bg-red-600 hover:text-white rounded-md transition duration-200">
                            <InfoIcon size={18} weight="bold"/>
                            info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCategoria
