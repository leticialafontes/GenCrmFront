import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const navigate = useNavigate()

  const { handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert("O Usuário foi desconectado com sucesso!")
    navigate("/login")
  }

  return (
    <>
      <nav className="bg-white border-b-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="" className="h-8" alt="Logo do GenCRM" /> */}
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
                <img className="w-8 h-8 rounded-full" src="https://github.com/SamuelSRJ.png" alt="Foto do usuario"/>
              </button>
              <div className={`absolute right-0 mt-2 z-50 ${dropdownOpen ? "" : "hidden"} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm`} id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900">Samuel de Souza</span>
                  <span className="block text-sm  text-gray-500 truncate">samuel@gencrm.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</Link>
                  </li>
                  <li>
                    <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configurações</Link>
                  </li>
                  <li>
                    <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Suporte</Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sair</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button> */}
        </div>
        {/* Menu */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link to={"/"} className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to={"/"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Serviços</Link>
            </li>
            <li>
              <Link to={"/"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Categorias</Link>
            </li>
            <li>
              <Link to={"/"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Clientes</Link>
            </li>
            <li>
              <Link to={"/"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Relatórios</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar