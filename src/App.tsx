
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <div className=''>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
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
