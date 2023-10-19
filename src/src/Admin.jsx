import React, { useState, useEffect } from 'react';
import './HOME.css';

const isAdmin = ({ setIsAdmin }) => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const correctPassword = '1234';

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
      setIsAdmin(true); 
    }
  }, []);

  const Iniciar = () => {
    if (password === correctPassword) {
      setLoggedIn(true);
      setIsAdmin(true);
      localStorage.setItem('loggedIn', 'true');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const CerrarSesion = () => {
    setLoggedIn(false);
    setIsAdmin(false); 
    localStorage.removeItem('loggedIn');
  };

  return (
    <div>
      <h1>Modo Admin</h1>
      {loggedIn ? (
        <div className="admin">
          <h1>Modo Admin</h1>
          <button onClick={CerrarSesion}>Cerrar sesión</button>
          <h1>Sos Admin</h1>
          <img src="https://th.bing.com/th/id/OIP.hGp8LWrADaLRbgzToOSV0wAAAA?w=217&h=180&c=7&r=0&o=5&pid=1.7" />
        </div>
      ) : (
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={Iniciar}>Iniciar sesión</button>
          <br />
          <br />
          <img src="https://cdn.memegenerator.es/imagenes/memes/full/31/80/31803379.jpg" />
        </div>
      )}
    </div>
  );
};

export default isAdmin;