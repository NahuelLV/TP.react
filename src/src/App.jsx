import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './HOME.jsx';
import Comentario from './comentarios';
import Publica from './publicar';
import Nav from './navegar';
import Admin from './Admin.jsx';

function App() {
  const [isAdmin, setIsAdmin] = useState();

  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home isAdmin={isAdmin} />} />
        <Route exact path='/publicar' element={<Publica />} />
        <Route exact path='/comentarios' element={<Comentario />} />
        <Route exact path='/Admin' element={<Admin setIsAdmin={setIsAdmin} />} />
        <Route exact path='/comentarios/:id' element={<Comentario />} />
      </Routes>
    </>
  );
}

export default App;