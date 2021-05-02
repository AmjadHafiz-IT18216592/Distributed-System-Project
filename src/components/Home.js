import {useEffect,useState,Component,React} from "react";
import '../App.css';
//import axios from "axios";
import b1 from '../components/covers/pro_pbid_4390509.jpg';
import b2 from '../components/covers/pro_pbid_4352218.jpg';
import b3 from '../components/covers/pro_pbid_15539.jpg';
import b4 from '../components/covers/pro_pbid_4241604.jpg';


const HomeItems=()=>{



    return(
        <div>
            <div className="products">
                        <div className="card">
                            <a href="/">
                                <img src={b1} alt=""/>
                            </a>
                            <div className="box">
                                <h4 title={"Book-01"}>
                                    <a href="/">{"Book-01"}</a>
                                </h4>
                                <p>Kasun Perera</p>
                                <h5>200 LKR</h5>
                                <button>Add to cart</button>
                            </div>
                        </div>
                <div className="card">
                    <a href="/">
                        <img src={b2} alt=""/>
                    </a>
                    <div className="box">
                        <h4 title={"Book-02"}>
                            <a href="/">{"Book-02"}</a>
                        </h4>
                        <p>Don Sherman</p>
                        <h5>500 LKR</h5>
                        <button>Add to cart</button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default HomeItems;