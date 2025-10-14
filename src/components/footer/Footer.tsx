import { Link } from "react-router-dom"

type FooterProps = {
  darkMode: boolean
}

function Footer({ darkMode }: FooterProps) {
  const data = new Date().getFullYear()

  return (
    <>
      <footer className={`${darkMode ? "bg-[#1A202C] text-gray-300" : "bg-white text-gray-700"} rounded-lg shadow-sm`}>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">GenCRM</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
              <li>
                <a
                  href="https://github.com/orgs/Grupo-03-Turma-JavaScript-07/repositories"
                  target="_blank"
                  className="hover:underline me-4 md:me-6"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/orgs/Grupo-03-Turma-JavaScript-07"
                  target="_blank"
                  className="hover:underline me-4 md:me-6"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/orgs/Grupo-03-Turma-JavaScript-07"
                  target="_blank"
                  className="hover:underline"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <hr className={`my-6 ${darkMode ? "border-gray-600" : "border-gray-200"} sm:mx-auto lg:my-8`} />
          <span className="block text-sm sm:text-center">
            © {data} <Link to={"/"} className="hover:underline">GenCRM™</Link>. Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer

