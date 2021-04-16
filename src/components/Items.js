import React from 'react';
import b1 from '../components/covers/pro_pbid_4390509.jpg';
import b2 from '../components/covers/pro_pbid_4352218.jpg';
import b3 from '../components/covers/pro_pbid_15539.jpg';
import b4 from '../components/covers/pro_pbid_4241604.jpg';

const items=()=>{
    return(
        <div>
<div className="products">
    <div className="card">
        <a href="/">
            <img src={b1} alt=""/>
        </a>
        <div className="box">
            <h3 title="Book 01">
                <a href="/">Book 01</a>
            </h3>
            <p>Discription</p>
            <h4>$50</h4>
            <button>Add to cart</button>
        </div>
    </div>
    <div className="card">
        <a href="/">
            <img src={b2} alt=""/>
        </a>
        <div className="box">
            <h3 title="Book 02">
                <a href="/">Book 0</a>
            </h3>
            <p>Discription</p>
            <h4>$50</h4>
            <button>Add to cart</button>
        </div>
    </div>
    <div className="card">
        <a href="/">
            <img src={b3} alt=""/>
        </a>
        <div className="box">
            <h3 title="Book 03">
                <a href="/">Book 03</a>
            </h3>
            <p>Discription</p>
            <h4>$50</h4>
            <button>Add to cart</button>
        </div>
    </div>
    <div className="card">
        <a href="/">
            <img src={b4} alt=""/>
        </a>
        <div className="box">
            <h3 title="Book 04">
                <a href="/">Book 04</a>
            </h3>
            <p>Discription</p>
            <h4>$50</h4>
            <button>Add to cart</button>
        </div>
    </div>
</div>
        </div>
    );
}

export default items;