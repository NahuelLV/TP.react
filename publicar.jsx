import './publicar.css';
import React, { useState, useEffect} from 'react';

function Publica() {
  const [autor, setAutor] = useState('');
  const [tema, setTema] = useState('');
  const [texto, setTexto] = useState('');
  const [comments, setComments] = useState([]);
  const [publications, setPublications] = useState([]); 
  
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }

    const storedPublications = localStorage.getItem('publications'); 
    if (storedPublications) {
      setPublications(JSON.parse(storedPublications));
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'autor') {
      setAutor(value);
    } else if (name === 'tema') {
      setTema(value);
    } else if (name === 'texto') {
      setTexto(value);
    }
  };

  const boton = (e) =>  {
    e.preventDefault();
   
      const newComment = [...comments, {autor, tema,texto, id:comments.length}];
      setComments(newComment);

      localStorage.setItem('comments', JSON.stringify(newComment));
  
      const newPublication = { autor: autor, titulo: tema, contenido: texto };
      const updatedPublications = [...publications, newPublication];
      setPublications(updatedPublications);
      localStorage.setItem('publications', JSON.stringify(updatedPublications));

      setAutor('');
      setTema('');
      setTexto('');
  };

  return (
    <div className='escritura'>
      <div className='principal'>
        <h1 className='titulo'>Publica algo!!!!</h1>
      </div>
      <div>
        <form className='area' onSubmit={boton}>
          <input
            type="text"
            name="autor"
            placeholder='nombre del autor'
            value={autor}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="tema"
            placeholder="Escribe sobre qué temas vas a hablar"
            value={tema}
            onChange={handleInputChange}
          />
          <br />
          <textarea
            className='texto'
            name="texto"
            placeholder="Escribe un comentario"
            value={texto}
            onChange={handleInputChange}
          />
           <button type="submit">Publica</button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Publica;

