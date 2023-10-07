import React , {useState,useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import { useNavigate,NavigateFunction } from 'react-router-dom';

import axios from 'axios'
import { Request } from "../helpers/Request";
import { CardListProps } from "@/types/CardListProps";




export default function Home () {
    const [response,setResponse] = useState<CardListProps>()
    const [loading,setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('');
    const navigate:NavigateFunction = useNavigate()
    let token = localStorage.getItem('token')
   
    useEffect(() => {
      if (token) {
        Request('get', `list-items?token=${token}`, '', token)
          .then((response) => {
            setResponse(response)
          })
          .catch((error) => {
            console.log(error)
          });
      } else {
        navigate('/not-authorized')
      }
    }, [token, navigate])
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