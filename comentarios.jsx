import "./comentarios.css"
import React, { useState, useEffect} from 'react';
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom';

function Comentario () {
    const [texto, setTexto] = useState('');
    const [autor, setAutor] = useState('');
    const [tema, setTema] = useState('');
     const [comments, setComments] = useState([]);
     const [publications, setPublications] = useState([]); 
  
    const comentario = (event) => {
      settexto(event.target.value);
    };
    useEffect(() => {
      const storedPublications = localStorage.getItem('publications');
      if (storedPublications) {
        setPublications(JSON.parse(storedPublications));
      }
    }, []);
    console.log("Publicaciones recuperadas de localStorage:", publications);
    
      const boton = (e) =>  {
        e.preventDefault();
        setComments([...comments, {autor, tema,texto}]);
      }
      const [count, setcontador1] = useState(0);
      const  [count1, setContador] = useState(0);
      
      <button onClick={() => setcontador1((count) => count + 1)}>
      count is {count}
      </button>
  
    return (
      <div>
        <div className='Com'>
        {publications.map((publication, index) => (
          <div key={index} className='publi'>
            <h1>Autor:{publication.autor}</h1>
            <h2>{publication.titulo}</h2>
            <Markdown>{publication.contenido}</Markdown>
            <button className='like' onClick={() => setcontador1((count) => count + 1)}>Like {count}</button>
            <button className='dis' onClick={() => setContador((count1) => count1 + 1)}>Dislike{count1}</button>
          </div>
        ))}
        <br />
        <br />
      </div>
        <form onSubmit={boton}>
        <textarea type="text"
        placeholder='nombre del autor'
        value={autor}
          onChange={e => setAutor(e.target.value)}
          />
        <textarea
          type="text"
          placeholder="Escribe un comentario"
          value={texto}
          onChange={e => setTexto(e.target.value)}
        />
  
        <button type="submit">Publica</button>
        
          </form>
          {comments.map((comentario, i) => (
            <div key={i} className="Coments">
              <h2>Autor:{comentario.autor}</h2>
              <p> Desarrollo: {comentario.texto} </p>
              
            </div>
  ))}
        </div>
    );
    }
  export default Comentario;