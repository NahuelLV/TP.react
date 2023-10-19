import "./comentarios.css"
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Link, useParams } from "react-router-dom";

function Comentario() {
  const { id } = useParams();
  const [texto, setTexto] = useState('');
  const [autor, setAutor] = useState('');
  const [tema, setTema] = useState('');
  const [comments, setComments] = useState([]);
  const [publications, setPublications] = useState([]);

  const comentario = (event) => {
    setTexto(event.target.value);
  };

  useEffect(() => {

    const storedPublications = JSON.parse(localStorage.getItem('publications'));
    if (storedPublications) {
      const filter = storedPublications.filter((publi) => publi.id == id);
      setPublications(filter);
    }

    const storedComments = JSON.parse(localStorage.getItem('comments'));
    if (storedComments) {

      const filteredComments = storedComments.filter((comment) => comment.publicationId == id);
      setComments(filteredComments);
    }
  }, [id]);

  const boton = (e) => {
    e.preventDefault();

    const newComment = { autor, tema, texto, publicationId: id };
    setComments([...comments, newComment]);
    localStorage.setItem('comments', JSON.stringify([...comments, newComment]));

    setAutor('');
    setTema('');
    setTexto('');
  };

  const [count, setcontador1] = useState(0);
  const [count1, setContador] = useState(0);

  return (
    <div>
      <div className='Com'>
        {publications.map((publication, index) => (
          <div key={index} className='publi'>
            <h1>Autor:{publication.autor}</h1>
            <h2>{publication.titulo}</h2>
            <Markdown>{publication.contenido}</Markdown>
            <button
              className='like'
              onClick={() => setcontador1((count) => count + 1)}
            >
              Like {count}
            </button>
            <button
              className='dis'
              onClick={() => setContador((count1) => count1 + 1)}
            >
              Dislike{count1}
            </button>
          </div>
        ))}
        <br />
        <br />
      </div>
      <form onSubmit={boton}>
        <textarea
          type="text"
          placeholder='nombre del autor'
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Escribe un comentario"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <button type="submit">Publica</button>
      </form>
      <br />
      {comments.map((comentario, i) => (
        <div key={i} className='Coments'>
          <h2>Autor:{comentario.autor}</h2>
          <p> Desarrollo: {comentario.texto} </p>
        </div>
      ))}
    </div>
  );
}

export default Comentario;
