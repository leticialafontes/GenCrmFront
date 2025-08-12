import { useContext, useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import {buscar} from "../../../services/Service"
import CardCategoria from "../cardcategoria/CardCategoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
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


        <div>
            <div className=''>
                {categorias.map((categoria) => (
                    <CardCategoria key={categoria.id} categoria={categoria} />
                ))}
            </div>
        </div>
    </>
  );
}

export default ListarCategoria
