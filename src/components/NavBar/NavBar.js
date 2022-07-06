import React, { useState } from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {

    const categories = [
        {nombre:"Bañadas",id:"0", route:"category/Bañadas"},
        {nombre:"Comunes",id:"1", route:"category/Comunes"},
        {nombre:"Especiales",id:"2", route:"category/Especiales"},
        {nombre:"Contacto",id:"3", route:"category/Contacto"},
    ];

    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <div className="NavBar">
            <Link to="/"> <h2> DonutsHomero </h2> </Link>
            <div className={`nav-items ${isOpen && "open"}`}>
                {categories.map((category)=> <Link key={category.id} to={category.route}>{category.nombre}</Link>)}
            </div>
            <div>
                    <CartWidget/>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`}
             onClick={ () => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>

    )
};

export default NavBar