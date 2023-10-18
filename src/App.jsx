import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Home from './HOME.jsx'
import Comentario from './comentarios'
import Publica from './publicar'
import Nav from './navegar'
import Admin from './Admin.jsx';



function App () {
<Nav />
    <Routes>
    <Route  exact path='/' element={<Home />} /> 
        <Route exact path='/publicar' element={<Publica />} />
        <Route exact path='/comentarios' element={<Comentario />} />
        <Route exact path='/Admin' element={<Admin />} />
        <Route exact path='/comentarios/:id' element={<Comentario/>} />
      </Routes>
}






export default  App;