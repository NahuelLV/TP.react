import React from 'react';
import { useState } from 'react'
import { Link} from 'react-router-dom';

// Componente de la página de administración
const Admin = () => {
  const [password, setPassword] = useState(''); 
  
  const [loggedIn, setLoggedIn] = useState(false); 
  
  const [posts, setPosts] = useState([]); 
  

  const correctPassword = '1234'; 
  

  const Iniciar = () => {
    if (password === correctPassword) {
      setLoggedIn(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const Borrarpost = (postId) => {
    // ID para poder borrar la publicacion
    // Puedes usar el estado 'posts' para almacenar y gestionar las publicaciones
  };

  if (!loggedIn) {
    return (
      <div>
        <h1>Modo Admin</h1>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={Iniciar}>Iniciar sesión</button>
      </div>
    );
  }
else 
  return (
    <div>
      <h1>Modo Admin</h1>
      <button onClick={() => setLoggedIn(false)}>Cerrar sesión</button>
      <h2>Publicaciones del Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => Borrarpost(post.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;