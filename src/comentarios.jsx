import "./comentarios.css"
import React, { useState, useEffect} from 'react';

function Comentario () {
    const [texto, setTexto] = useState('');
    const [autor, setAutor] = useState('');
    const [tema, setTema] = useState('');
     const [comments, setComments] = useState([]);
  
    const comentario = (event) => {
      settexto(event.target.value);
    };
    
      const boton = (e) =>  {
        e.preventDefault();
        setComments([...comments, {autor, tema,texto}]);
      }
  
  
    return (
      <div>
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
            <div key={i}>
              <h2>{comentario.autor}</h2>
              <h3>Habla sobre: {comentario.tema} </h3>
              <p> Desarrollo: {comentario.texto} </p>
            </div>
  ))}
        </div>
    );
    }
  export default Comentario;