import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'

import Login from './paginas/Login'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import NuevoPassword from './paginas/NuevoPassword'
import OlvidePassword from './paginas/OlvidePassword'
import Registrar from './paginas/Registrar'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='registrar' element={<Registrar/>}/>
          <Route path='olvide-password' element={<OlvidePassword/>}/>
          <Route path='olvide-password/:token' element={<NuevoPassword/>} />
          <Route path='confirmar/:id' element={<ConfirmarCuenta/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
