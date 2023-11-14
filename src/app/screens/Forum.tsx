import React, { useState,useEffect,useRef, use } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { Request } from '../helpers/Request';
import BasicModal from '../components/BasicModal';
import { CardListProps } from '@/types/CardListProps';
import ItemResponse from '../components/CardResponse';
import ItemMessageResponse from '../components/MessagesResponse';
import { ItemResponseProps, ListItemResponseProps } from '@/types/ItemResponseProps';
/*{`/forum${item.id}`} */
export const Forum = () => {
    const {id} = useParams()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [messagesResponse,setMessagesResponse] = useState()
    const [idItem,setId] = useState<string>()
    const [image,setImage] = useState<string>()
    const [title,setTitle] = useState<string>()
    const [questions,setQuestions] = useState<string>()
    const navigate:NavigateFunction = useNavigate()
    const [textResponse,setTextResponse] = useState<string>('')
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    let idLocal = localStorage.getItem('id') ? localStorage.getItem('id') : ''
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        setLoading(true)
        e.preventDefault()
        const data = {
           textResponse,
           token,
           idItem:idItem
        }
        Request('post','send-response-item',data).then((response)=> {
        if(response.ok){
            setMessage(response.ok)
            setLoading(false)
            setModalOpen(true);
            setTextResponse('');

          }
        }).catch((error)=> {
            setMessage(error.response.data.error)
            setModalOpen(true);
            setLoading(false)
        })
      }
   
   
   
   
    useEffect(()=> {
        setLoading(true)
        Request('get',`forum/${id}`,'',token).then((response)=>{
            if(response.item){
                 setId(response.item.id)
                 setTitle(response.item.nameItem)
                 setImage(response.item.image)
                 setQuestions(response.item.questionsValidated)
                 setMessagesResponse(response.responses)
                 setLoading(false)
            }
        }).catch((error)=> {
            if(!token || error.response.data.error === 'Não autorizado'){
                navigate('/not-authorized')
              }
             
        })
    },[token,navigate])
    
    const handleCloseModal = () => setModalOpen(false);
    return(
        <>
        <main>
            <Header userId={idLocal}/> 
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
                    { (image && title && questions) !== undefined && (<>   
                        <div className="info-item">
                        <figure>
                            <img className='img-forum' alt='' src={`data:image/png;base64,${image}`}/>
                        </figure>
                        <h2 className="title-card title-rs text-xl">{title}</h2>
                        <div className="questions-container">
                            <p className="p-card text-xs text-rs mt-1">{questions}</p>
                        </div>
                        <form className="flex flex-col" method='post' action='/send-response-item' onSubmit={handleSubmit}>
                            <textarea name="res_item" className="input-textArea m-1 styles-input" placeholder="Ex: A) Nome Atlas, B)Cinza" value={textResponse} onChange={(e)=> setTextResponse(e.target.value)}></textarea>
                            <input type="submit" className="bt-card" value="Enviar" />
                        </form>
                        </div>
                    </>)
                    }
                    {messagesResponse !== undefined && <ItemMessageResponse responses={messagesResponse} />}
                    </>
                )
            }   
                <BasicModal
                    title="Aviso"
                    body={`${message.charAt(0).toUpperCase() + message.slice(1)}`}
                    open={modalOpen}
                    handleClose={handleCloseModal}
                />
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Forum