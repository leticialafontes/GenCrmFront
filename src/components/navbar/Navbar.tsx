import { useContext, useState, type ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    ToastAlerta("Usuário foi desconectado com sucesso!", "sucesso")
    setDropdownOpen(false)
    navigate("/login")
  }

  let component: ReactNode

  if(usuario.token !== "") {
    component = (
      <nav className="bg-white border-b-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="LINK DA LOGO" className="h-8" alt="Logo do GenCRM" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">GenCRM</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="relative">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                id="user-menu-button"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={usuario.foto} alt="Foto do usuario"/>
              </button>
              <div className={`absolute right-0 mt-2 z-50 ${dropdownOpen ? "" : "hidden"} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm`} id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900">{usuario.nome}</span>
                  <span className="block text-sm  text-gray-500 truncate">{usuario.usuario}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link to={"/perfil"} onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</Link>
                  </li>
                  <li>
                    <Link to={"/manutencao"} onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configurações</Link>
                  </li>
                  <li>
                    <Link to={"/manutencao"} onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Suporte</Link>
                  </li>
                  <li>
                    <Link to={"/login"} onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sair</Link>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link to={"/home"} onClick={() => setDropdownOpen(false)}  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Home</Link>
            </li>
            <li>
              <Link to={"/servicos"} onClick={() => setDropdownOpen(false)} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Serviços</Link>
            </li>
            <li>
              <Link to={"/categorias"} onClick={() => setDropdownOpen(false)} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Categorias</Link>
            </li>
            <li>
              <Link to={"/clientes"} onClick={() => setDropdownOpen(false)} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Clientes</Link>
            </li>

            <li>
              <Link to={"/notasdeatualizacoes"} onClick={() => setDropdownOpen(false)} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Notas de atualizações</Link>
            </li>
            
          </ul>
        </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {component}
    </>
  )
};

export default Navbar