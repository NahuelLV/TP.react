import {React, UseState, UseEfect} from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='main'>
  <React.StrictMode>
    <BrowserRouter>  
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  </div>
)

