import { useContext, useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import {buscar} from "../../../services/Service"
import CardCategoria from "../cardcategoria/CardCategoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { DNA } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListarCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]> ([]);
    const navigate = useNavigate ();
    const {usuario, handleLogout} = useContext (AuthContext);
    const token = usuario.token;


    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias, {
                headers: {Authorization: token,
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout ()
            }
        }
    }


    useEffect (() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!','erro')
            navigate ('/')
        }
    }, [token])
        

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);


  return (
    <>

        {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}


        <div className="flex flex-col items-center text-center bg-gradient-to-b from-sky-100 via-slate-100 to-sky-300 min-h-[80vh] bg-fixed py-8 px-4">
            <Link to='/categorias/cadastrar' className="mb-6 px-6 py-2 border border-gray-400 rounded-md text-gray-800 font-semibold 
               hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 shadow-sm">Cadastrar nova categoria</Link>

            <p className="text-xl font-bold text-gray-700 mb-4">Lista de categorias</p>

            <div>
                {categorias.map((categoria) => (
                    <CardCategoria key={categoria.id} categoria={categoria} />
                ))}
            </div>
        </div>
    </>
  );
}

export default ListarCategoria
