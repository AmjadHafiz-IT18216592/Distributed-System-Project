import {useEffect,useState,Component,React} from "react";
import '../App.css';
import axios from "axios";

const  Fetch=()=>{
    const [item,setItem] = useState([]);
    const getItemsDetails = async ()=> {
        try{
            const data = await axios.get('http://localhost:4001/app/readItems');
            console.log(data.data);
            setItem(data.data);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(()=>getItemsDetails(),[]);


    return(
        <div>
            <h1>Wow</h1>
            {item.map((item)=>{
                return(
                    <p>
                        {item.title} - {item.about} - {item.booktype} - {item.date} - {item.price}
                    </p>
                );
            })}
        </div>
    );

};

export default Fetch;