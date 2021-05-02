import React from 'react'
import Close from "./svg/times-solid.svg";
import MenueBar from "./svg/bars-solid.svg";

import {BrowserRouter as Router , Routes ,Route ,Link} from 'react-router-dom';
const Header=()=>{
    return(
        <div className="Main">
            <header>
                <div className="logo">
                    <h1><Link to="/products" style={{textDecoration:'none'}}>Ziya's</Link></h1>
                </div>
                <ul>
                    <li><Link to="/home" style={{textDecoration:'none'}}>Home</Link></li>
                    <li><Link to="/products" style={{textDecoration:'none'}}>Products</Link></li>
                    <li><Link to="/about" style={{textDecoration:'none'}}>About</Link></li>
                    <li><Link to="/newproducts" style={{textDecoration:'none'}}>Add Products</Link></li>
                    <li><Link to="/login" style={{textDecoration:'none'}}>Login / Register</Link></li>
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