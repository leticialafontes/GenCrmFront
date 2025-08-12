
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import ListaServicos from './components/servicos/listaservico/ListaServicos'
import FormServico from './components/servicos/formservico/FormServico'
import DeletarServico from './components/servicos/deletarservico/DeletarServico'

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
                <Route path="/cadastrarservico" element={<FormServico />} />
                <Route path="/editarservico/:id" element={<FormServico />} />
                <Route path="/deletarservico/:id" element={<DeletarServico />} />
                <Route path='/home' element={<Home />} />
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
