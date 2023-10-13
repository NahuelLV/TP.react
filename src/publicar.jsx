import './publicar.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import {useState, setCount} from 'react'

function Publica() {
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

const [count, setCount] = useState(0);
const  [count1, setCount1] = useState(0);


<button onClick={() => setCount((count) => count + 1)}>
         count is {count}
             </button>

  return (
    
    <div className='escritura'>
      <div className='principal'>
        <h1 className='titulo'>Publica algo!!!!</h1>
      </div>
      <div className='pub'>
      <form className='area' onSubmit={boton}>
      <textarea type="text"
      placeholder='nombre del autor'
      value={autor}
        onChange={e => setAutor(e.target.value)}
        />
        <br />
       <textarea
        type="text"
        placeholder="Escribe sobre que temas vas hablar"
        value={tema}
        onChange={e => setTema(e.target.value)}
      />
      <br />
      <textarea
      className='texto'
        type="text"
        placeholder="Escribe un comentario"
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />
      <br />
      <button type="submit">Publica</button>
        </form>
        </div>
        {comments.map((comentario, i) => (
            <button className="comentarios">
          <div key={i}>
            <h2>{comentario.autor}</h2>
            <h3>Habla sobre: {comentario.tema} </h3>
            <p className='des'> Desarrollo: {comentario.texto} </p>
            <button className='like' onClick={() => setCount((count) => count + 1)}>Like {count}</button>
             <button className='dis' onClick={() => setCount1((count1) => count1 + 1)}>Dislike{count1}</button>
          </div>
          </button>
))} 
      </div>
  );
  }

export default Publica;