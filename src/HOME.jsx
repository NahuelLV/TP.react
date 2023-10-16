import './HOME.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [publications, setPublications] = useState([]); 

  useEffect(() => {
    const storedPublications = localStorage.getItem('publications');
    if (storedPublications) {
      setPublications(JSON.parse(storedPublications));
    }
  }, []);
  console.log("Publicaciones recuperadas de localStorage:", publications);

const [count, setcontador1] = useState(0);
const  [count1, setContador] = useState(0);

<button onClick={() => setcontador1((count) => count + 1)}>
count is {count}
</button>
  return (
    <>
      <div className='inicio'>
        <h1 className='title'>TU BLOG!!!!</h1>
        <h4 className='sub'>En esta app puedes publicar y hablar de lo que quieras.</h4>
      </div>
      <h1 className='subtitle'>Publicaciones:</h1>
      <div>
        {publications.map((publication, index) => (
          <div key={index} className='publi'>
            <h1>{publication.autor}</h1>
            <h2>{publication.titulo}</h2>
            <p>{publication.contenido}</p>
            <button className='like' onClick={() => setcontador1((count) => count + 1)}>Like {count}</button>
            <button className='dis' onClick={() => setContador((count1) => count1 + 1)}>Dislike{count1}</button>
            <Link to={`./comentarios/${publication.id}`}>Comentario</Link>
          </div>
        ))}
      </div>
      <div className='info'>
      <p >Esta app está desarrollada por estudiantes que están aprendiendo.<a href="https://www.mercadopago.com.ar/">Ayuda</a></p>
      </div>
    </>
  );
};

export default Home;