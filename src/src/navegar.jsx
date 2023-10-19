import React from 'react'
import { Link} from 'react-router-dom'
import './publicar.css';

const links = [
{
    name: "Home",
    href:"/",
},
{
    name:"Publicar",
    href:"/publicar",
},
{
    name:"Inicia sesion",
    href:"/Admin",
},
{
    href:"/comentarios",
}
];

const Nav = () => {
    return <div className='nav'>
        {links.map((x) =>(
            <Link to={x.href}>{x.name}</Link>
        ))}
       
    </div> 
    
}

export default Nav;
