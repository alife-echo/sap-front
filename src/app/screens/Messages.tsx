import React,{useState,useEffect} from "react";
import { Request } from "../helpers/Request";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { MessageProps } from "@/types/MessageLocationProps";
import MessagesList from "../components/MessagesLocation";
export const Messages = () => {
    const [loading,setLoading] = useState<boolean>(false)
    const [messages,setMessages] = useState()
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    let id = localStorage.getItem('id') ? localStorage.getItem('id') : ''

    const navigate:NavigateFunction = useNavigate()

    useEffect(()=> {
        setLoading(true)
        Request('get',`messagesLocation/${id}`,'',token).then((response)=>{
            if(response.ok){
                setMessages(response.ok)
                setLoading(false)
            }
            if(!token || !id){
                navigate('/not-authorized')
            }
        }).catch((error)=> {
            setLoading(false)
            if(!token || error.response.data.error === 'Não autorizado'){
                navigate('/not-authorized')
              }
             
        })
    },[token,navigate])
   return (
    <>
       <div className="flex-col-home full-sizeHome">
        <Header/>
        <main className={(messages !== undefined && <MessagesList message={messages}/>) ? 'full-size-grow' :'full-sizeFalse'}>
        { loading ? 
            <div className="full-sizeFalse">
                <div className="centerSpinner">
                <div className='spinner'></div>
                </div>
            </div> : 
            (messages !== undefined && <MessagesList message={messages}/>) ? 
            <MessagesList message={messages}/> :
            <MessagesList message={[]}/> 
    }
        </main>
        <Footer/>
      </div>
    </>
   )
}

export default Messages