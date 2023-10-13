import './HOME.css'
import { Link, Routes, Route } from 'react-router-dom';


const App = () =>  {
  return (
   <>
   <div className='inicio'>
   <h1 className='title'>TU BLOG!!!!</h1>
   <h4 className='sub'>En esta app podes publicar y hablar de lo que vos quieras!</h4>
    
   </div>
   <h1 className='subtitle'>Publicaciones:</h1>
   <p className='info'>Esta app esta desarrolada por unos estudiantes que estan aprendiendo. Si queres ayudar entra aca: 
   <a href="https://www.mercadopago.com.ar/">Ayuda</a>
   </p>

   </>
  )
}

export default App




//const [count, setCount] = useState(0)

//<button onClick={() => setCount((count) => count + 1)}>
 //         count is {count}
   //     </button>