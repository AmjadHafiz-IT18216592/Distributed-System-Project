import React from 'react'
import Close from "./svg/times-solid.svg";
import MenueBar from "./svg/bars-solid.svg";
import {BrowserRouter as Router , Routes ,Route ,Link} from 'react-router-dom';
const Header=()=>{
    return(
        <div>
            <header>
                <div className="logo">
                    <h1><Link to="/products">Ziya's</Link></h1>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login / Register</Link></li>
                    <li>
                        <img src={Close} alt="" width={30}/>
                    </li>
                    <li><img src={MenueBar} alt="" width={30}/></li>
                </ul>
            </header>
        </div>
    );
}

export  default  Header;