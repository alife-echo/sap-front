import React , {useState,useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import { useNavigate,NavigateFunction,useLocation, NavigateOptions } from 'react-router-dom';
import { customizedState } from "@/types/CustomizedState";
import { useJwt } from "react-jwt";
import axios from 'axios'
import { Request } from "../helpers/Request";
import { CardListProps } from "@/types/CardListProps";



export default function Home () {
    const [response,setResponse] = useState<CardListProps>()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('');
    const navigate:NavigateFunction = useNavigate()

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
   
    useEffect(() => {
      setLoading(true)
        Request('get', `list-items?token=${token}`, '', token)
        .then((response) => {
          setResponse(response)
          setLoading(false)
        })
        .catch((error) => {
          if(!token || error.response.data.error === 'Não autorizado'){
            navigate('/not-authorized')
          }
          setLoading(false)
        });
    }, [token, navigate])
     return (
        <>
           
    <div className="flex-col-home full-sizeHome">
    <Header/> 
    <main className={(response !== undefined && <CardList items={response.items}  />) ? 'full-size-grow' :'full-sizeFalse'}>
     { loading ? 
      <div className="full-sizeFalse">
        <div className="centerSpinner">
          <div className='spinner'></div>
        </div>
      </div> : 
      (response !== undefined && <CardList items={response.items}  />) ? 
      <CardList items={response.items}/> :
      <CardList items={[]}/> 
    }
    </main> 
    <Footer/>     
    </div>
             
        </>
     )
}