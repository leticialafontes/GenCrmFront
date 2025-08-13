import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"


interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {

  return (

    <div className='border-2'>
        <header>
            Categoria
        </header>


        <p>
            {categoria.nome}
        </p>


        <div>
            <Link to={`/categorias/editar/${categoria.id}`} >
            <button>Editar</button>
            </Link>


            <Link to= {`/categorias/deletar${categoria.id}`} >
            <button>Deletar </button>
            </Link>
        </div>
      
    </div>
  )
}

export default CardCategoria
