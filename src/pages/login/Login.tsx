import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";

function Login() {

  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>( {} as UsuarioLogin)

  useEffect(() => {
    if(usuario.token !== "") {
      navigate("/home")
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <div className="min-h-screen bg-[url(https://ik.imagekit.io/gengrupo03/genCRM/bg-login3.jpg)] bg-cover bg-center flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="my-9 text-center text-4xl font-extrabold text-gray-900">GenCRM</h2>
          </div>
          <form className="space-y-6" onSubmit={login}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="usuario" name="usuario" type="email" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira o seu email"
                  value={usuarioLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="mt-1">
                <input id="senha" name="senha" type="password" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira sua senha"
                  value={usuarioLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label className="ml-2 block text-sm text-gray-900">Lembrar de mim</label>
              </div>
                <div className="text-sm">
                  <Link to={"/cadastro"} className="font-medium text-blue-600 underline hover:text-blue-500">Cadastrar-se</Link>
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

export default Login