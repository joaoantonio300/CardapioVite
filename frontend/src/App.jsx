import './App.css'
import Cadastrar from './pages/Cadastrar';
import Consulta from './pages/Consulta';
import Home from './pages/Home';
import Lista from './pages/Lista';
import Info from './pages/Info';
import Location from './pages/Location';
import Login from './pages/Login';

import { AuthProvider } from "./context/AuthContext";

import { onAuthStateChanged } from 'firebase/auth';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//hooks 
import { useAuthentication } from './hooks/useAuthentication';
import { useEffect, useState } from 'react';
import Page404 from './pages/Page404';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  },[auth]);

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <>
   <AuthProvider value={{user}}>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/localizacao" element={<Location/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/lista" element={<Lista/>}/>
          <Route path="*" element={<Page404/>}/>
            {/* conditions */}
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/consulta"/> }  />
          <Route path="/consulta" element={user ? <Consulta/> : <Navigate to="/login"/> }  />
          <Route path="/cadastrar" element={user ? <Cadastrar/> : <Navigate to="/login"/> }  />
        </Routes>
    </BrowserRouter>
   </AuthProvider>
    </>
  )
}

export default App
