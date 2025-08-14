import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import type Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/Service"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: ""
  })

  useEffect(() => {
    if(usuario.id !== 0){
      retornar()
    } 
  }, [usuario])

  function retornar() {
    navigate("/login")
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
      e.preventDefault()

      if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
        setIsLoading(true)

      // if(usuario.foto === "" || usuario.foto === null) {
      //   setUsuario({
      //     ...usuario,
      //     foto: "https://ik.imagekit.io/gengrupo03/genCRM/user-pic.png"
      //   })
      //   cadastrarNovoUsuario
      // }

      const usuarioDefault = {
        ...usuario,
        foto: usuario.foto?.trim() === "" 
          ? "https://ik.imagekit.io/gengrupo03/genCRM/user-pic.png"
          : usuario.foto
      };

        try {
          await cadastrarUsuario("/usuarios/cadastrar", usuarioDefault, setUsuario)
          ToastAlerta("Usuário foi cadstrado com sucesso!", "sucesso")
        } catch (error) {
          ToastAlerta("Erro ao cadastrar usuário", "erro")
        }
      } else {
        ToastAlerta("Dados do usuário inconsistentes! Verifique as informações do cadastro.", "erro")
        setUsuario({...usuario, senha: ""})
        setConfirmaSenha("")
      }

      setIsLoading(false)
    }

  return (
    <div className="min-h-screen bg-[url(https://ik.imagekit.io/gengrupo03/genCRM/bg-login3.jpg)] bg-cover bg-center flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="my-9 text-center text-4xl font-extrabold text-gray-900">GenCRM</h2>
          </div>
          <form className="space-y-6" onSubmit={cadastrarNovoUsuario}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <div className="mt-1">
                <input id="nome" name="nome" type="text" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira o seu nome"
                  value={usuario.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="usuario" name="usuario" type="email" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira o seu email"
                  value={usuario.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="mt-1">
                <input id="senha" name="senha" type="password" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira sua senha"
                  value={usuario.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
              <div className="mt-1">
                <input id="confirmarSenha" name="confirmarSenha" type="password" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira sua senha"
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Foto de perfil<span className="text-slate-400"> (opcional)</span></label>
              <div className="mt-1">
                <input id="foto" name="foto" type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira o link da sua foto de perfil"
                  value={usuario.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="termos" name="termos" type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label className="ml-2 block text-sm text-gray-900">Li e aceito os termos e condições</label>
              </div>
            </div>
              <div>
                <button type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Entrar
                </button>
              </div>
          </form>
          <div className="mt-6">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro