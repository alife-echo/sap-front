import React, { useState,useEffect,useRef } from 'react';
import { Request } from '../helpers/Request';
import BasicModal from '../components/BasicModal';
import { CardListProps } from '@/types/CardListProps';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom';


const captureData =  (data:any) =>{
    return ({ok:data.ok,error:data.error})
} 

function CardResponse({ item }:CardProps) {
  const [loading,setLoading] = useState<boolean>(false)
  const [error,setError] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [textResponse,setTextResponse] = useState<string>('')
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
  
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    setLoading(true)
    console.log(message)
    e.preventDefault()
    const data = {
       textResponse,
       token,
       idItem:item.id
    }
    Request('post','send-response-item',data).then((response)=> {
      if(response.ok){
        setMessage(response.ok)
        setLoading(false)
      }
    }).catch((error)=> {
      item.onCardResponseData(captureData(error.response.data.error))
        setMessage(error.response.data.error)
        setLoading(false)
    })
  }
 const handleCloseModal = () => setModalOpen(false);

    return (
      <>
        <figure>
        <img className='img-forum' alt='' src={`data:image/png;base64,${item.image}`}/>
        </figure>
        <h2 className="title-card title-rs text-xl">{item.nameItem}</h2>
        <div className="questions-container">
            <p className="p-card text-xs text-rs mt-1">{item.questionsValidated}</p>
        </div>
        <form className="flex flex-col" method='post' action='/send-response-item' onSubmit={handleSubmit}>
            <textarea name="res_item" className="input-textArea m-1 styles-input" placeholder="Ex: A) Nome Atlas, B)Cinza" value={textResponse} onChange={(e)=> setTextResponse(e.target.value)}></textarea>
            <input type="submit" className="bt-card" value="Enviar" />
        </form>
      
      </>
    );
  }



function ItemResponse({ item }: CardProps) {
  return (
    
    <div className="info-item">
        <CardResponse key={item.id} item={item}/>
     </div>
  );
}

export default ItemResponse;
