import React, { useState,useEffect,useRef } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { Request } from '../helpers/Request';
import BasicModal from '../components/BasicModal';
import { CardListProps } from '@/types/CardListProps';
import ItemResponse from '../components/CardResponse';
import ItemMessageResponse from '../components/MessagesResponse';
/*{`/forum${item.id}`} */
export const Forum = () => {
    const {id} = useParams()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<boolean>(false)
    const [item,setItem] = useState()
    const [messagesResponse,setMessagesResponse] = useState()
    const navigate:NavigateFunction = useNavigate()
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''

    useEffect(()=> {
        setLoading(true)
        Request('get',`forum/${id}`,'',token).then((response)=>{
            if(response.item){
                 setItem(response.item)
                 setMessagesResponse(response.responses)
                 setLoading(false)
                 console.log(response)
            }
        }).catch((error)=> {
            if(!token || error.response.data.error === 'Não autorizado'){
                navigate('/not-authorized')
              }
             
        })
    },[token,navigate])
    return(
        <>
        <main>
            <Header/>
            <section className="flex mt-1_5 forum-container flex-col">

            {
                loading ? (
                    <div className="full-sizeFalse">
                    <div className="centerSpinner">
                        <div className='spinner'></div>
                    </div>
                    </div>
                ) : (
                    <>
                    {item !== undefined && <ItemResponse item={item}  />}
                    {messagesResponse !== undefined && <ItemMessageResponse responses={messagesResponse} />}
                    </>
                )
            }  
              
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Forum