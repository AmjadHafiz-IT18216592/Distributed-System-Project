import {useEffect,useState,Component,React} from "react";
import '../App.css';
import axios from "axios";
import UpdateItems from "./UpdateItems";
import b1 from '../components/covers/pro_pbid_4390509.jpg';
import b2 from '../components/covers/pro_pbid_4352218.jpg';
import b3 from '../components/covers/pro_pbid_15539.jpg';
import b4 from '../components/covers/pro_pbid_4241604.jpg';


const Items=()=>{

    const [item,setItem] = useState([]);
    const getItemsDetails = async ()=> {
        try{
            const Data = await axios.get('http://localhost:4001/app/readItems');
            console.log(Data.data);
            setItem(Data.data);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(()=>getItemsDetails(),[]);

//<a href="/updateproducts" title={item.title}>
    //<UpdateItems title={item.title}/>

   /*
    const deleteItems=(id)=>{
        axios.delete('http://localhost:4001/app/deleteItems/${id}');
    };
    */
    return(
        <div>
<div className="products">

    {item.map((item)=> {
    return(
        <div className="card">
            <a href="/updateproducts">
                <img src={b1} alt=""/>
            </a>
            <div className="box">
                <h4 title={item.title}>
                    <a href="/">{item.title}</a>
                </h4>
                <p>{item.about}</p>
                <h5>{item.price} LKR</h5>

                <a href="/deleteproducts" style={{textDecoration:'none'}}>Delete</a>
            </div>
        </div>
    );
    })}


 </div>

        </div>
    );
}

export default Items;