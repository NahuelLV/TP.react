import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Iniciar from './Admin.jsx'

const Home = () => {
  const [publications, setPublications] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  
  useEffect(() => {
    const storedPublications = localStorage.getItem('publications');
    if (storedPublications) {
      setPublications(JSON.parse(storedPublications));
    }

    const storedIsAdmin = localStorage.getItem('loggedIn');
    if (storedIsAdmin === 'true') {
      setIsAdmin(true);
    }

    console.log('isAdmin:', isAdmin);
  }, []);

  const handleBorrarPost = (id) => {
    if (isAdmin) {
      const updatedPublications = publications.filter((publication) => publication.id !== id);
      setPublications(updatedPublications);
      localStorage.setItem('publications', JSON.stringify(updatedPublications));
    }
  };

  return (
    <>
      <div className='inicio'>
        <h1 className='title'>TU BLOG!!!!</h1>
        <h4 className='sub'>En esta app puedes publicar y hablar de lo que quieras.</h4>
      </div>
      <h1 className='subtitle'>Publicaciones:</h1>
      <div className='Com'>
        {publications.map((publication, index) => (
          <div key={index} className='publi'>
            <h1>Autor: {publication.autor}</h1>
            <h2>{publication.titulo}</h2>
            <Link to={`/comentarios/${publication.id}`}>Ampliar</Link>
            {isAdmin && (
              <button onClick={() => handleBorrarPost(publication.id)}>Borrar</button>
            )}
          </div>
        ))}
      </div>
      <div className='info'>
        <p>Esta app está desarrollada por estudiantes que están aprendiendo.<a href="https://www.mercadopago.com.ar/">Ayuda</a></p>
      </div>
    </>
  );
};

export default Home;