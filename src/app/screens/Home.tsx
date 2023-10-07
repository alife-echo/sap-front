import React , {useState,useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import axios from 'axios'
import { CardListProps } from "@/types/CardListProps";




export default function Home () {
    const [response,setResponse] = useState<CardListProps>()
    const swap = []
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1MWRiZDgxLWJjMTEtNGIzZC05NzM2LTY4YTk5MWY4ZTA3NiIsImVtYWlsIjoiYWxpZmUuc2lsdmFAdW5pZmVzc3BhLmVkdS5iciIsImlhdCI6MTY5NjI3NTc2NSwiZXhwIjoxNjk2Mjc5MzY1fQ.y6dAIsIPoD4sWtpAr1p_3j4jWg0KwIrZWB3973IZxBA'
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:4000/list-items?token=${token}`,
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
    useEffect(()=>{
        axios.request(config)
        .then((response) => {
        setResponse(response.data)
        })
        .catch((error) => {
        console.log(error);
    });
    },[])
    

     return (
        <>
           
                <Header/> 
                <main className={(response !== undefined && <CardList items={response.items}  />) ? 'full-sizeHome' :'full-sizeFalse'}>  
                    {(response !== undefined && <CardList items={response.items}  />) ? <CardList items={response.items}/> :<CardList items={[]}/> }
                </main>
                <Footer/>
          
        </>
     )
}