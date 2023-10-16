import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './HOME.jsx'
import Comentario from './comentarios'
import Publica from './publicar'
import Nav from './navegar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
    <Nav />
    <Routes>
    <Route  exact path='/' Component={App} /> 
        <Route exact path='/publicar' Component={Publica} />
        <Route exact path='/comentarios' Component={Comentario} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

const Com = () => {
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>  
  <Nav />
    <Routes>
        <Route exact path='/comentarios' Component={Comentario} />
    </Routes>
</BrowserRouter>
</React.StrictMode>
) }
export default Com;