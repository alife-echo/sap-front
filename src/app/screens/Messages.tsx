import React,{useState,useEffect} from "react";
import { Request } from "../helpers/Request";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { MessageProps } from "@/types/MessageLocationProps";

export const Messages = () => {
    const [loading,setLoading] = useState<boolean>(false)
    const [messages,setMessages] = useState<MessageProps>()
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    let id = localStorage.getItem('id') ? localStorage.getItem('id') : ''

    const navigate:NavigateFunction = useNavigate()

    useEffect(()=> {
        setLoading(true)
        Request('get',`messagesLocation/${id}`,'',token).then((response)=>{
            console.log(response)
            if(response.ok){
                console.log(response.ok)
                setLoading(false)
            }
        }).catch((error)=> {
            if(!token || error.response.data.error === 'Não autorizado'){
                navigate('/not-authorized')
              }
             
        })
    },[token,navigate])
   return (
    <>
      <Header/>
       <section className="flex flex-col">
       <h1>meu zovo</h1>
       </section>
      <Footer/>
    </>
   )
}

export default Messages