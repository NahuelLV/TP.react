import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './HOME.jsx'
import Publica from './publicar'
import Nav from './navegar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
    <Nav />
    <Routes>
    <Route  exact path='/' Component={App} /> 
        <Route exact path='/publicar' Component={Publica} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)