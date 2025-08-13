
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import DeletarServico from './components/servicos/deletarservico/DeletarServico'
import FormServico from './components/servicos/formservico/FormServico'
import ListaServicos from './components/servicos/listaservico/ListaServicos'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import ListarCategoria from './components/categoria/listarcategoria/ListarCategoria'
import Grafico from './components/grafico/Grafico'

function App() {

  return (
    <>
      <div className='bg-slate-200'>
        <AuthProvider>
          <ToastContainer />
          <BrowserRouter>
            <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
                <Route path='/servicos' element={<ListaServicos />} />
                <Route path='/categorias' element={<ListarCategoria />} />
                <Route path="/cadastrarservico" element={<FormServico />} />
                <Route path="/editarservico/:id" element={<FormServico />} />
                <Route path="/deletarservico/:id" element={<DeletarServico />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/home' element={<Home />} />
                <Route path='/grafico' element={<Grafico />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
