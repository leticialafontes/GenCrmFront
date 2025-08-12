
function Cadastro() {
  return (
    <div className="min-h-screen bg-[url(https://ik.imagekit.io/gengrupo03/genCRM/bg-login3.jpg)] bg-cover bg-center flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="my-9 text-center text-4xl font-extrabold text-gray-900">GenCRM</h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <div className="mt-1">
                <input id="nome" name="nome" type="text" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira o seu nome"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira o seu email"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="mt-1">
                <input id="senha" name="senha" type="password" required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira sua senha"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Foto de perfil<span className="text-slate-400"> (opcional)</span></label>
              <div className="mt-1">
                <input id="foto" name="foto" type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Insira o link da sua foto de perfil"/>
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
                <button type="button"
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