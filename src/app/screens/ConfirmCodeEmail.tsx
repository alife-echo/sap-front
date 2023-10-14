import React,{useState,useEffect} from "react";
import '../globals.css';
import Footer from "../components/Footer";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Request } from "../helpers/Request";
import JWT from 'jsonwebtoken';
import { useJwt } from "react-jwt";
import dotenv from 'dotenv'
dotenv.config()
import axios from "axios";
import BasicModal from "../components/BasicModal";
const ConfirmCodeEmail = () => {

  const [code,setCode] = useState('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate:NavigateFunction = useNavigate()
  const [message,setMessage] = useState<string>('')
  const [response,setResponse] = useState()
  const [loading,setLoading] = useState<boolean>(false)
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    const data = {
      code:code
    };
    Request('post','confirm-email-post',data)
    .then((response) => {
      setResponse(response)
      navigate('/success-create')
    })
    .catch((error) => {
      setMessage(error.response.data.error);
      setLoading(false)
      setModalOpen(true);
    });
    
  }
  useEffect(() => {
    if (!token) {
       navigate('/not-authorized')

  } 
  }, [token, navigate])
  const handleCloseModal = () => {setModalOpen(false)} 
    return (
        <>
        <main className="flex full-size">
        <section className="form-container flex">
          {loading ? <div className='spinner'></div> : 
            <form
            action="confirm-email-post"
            className="register-retrieve"
            method="post"
            onSubmit={handleSubmit}
          >
            <h1 className="dra center-text title-form">
              CONFIRMAR EMAIL
            </h1>
            <p className="p-card color-red center-text text-xs">
            </p>
            <label htmlFor="name" className="sty-label">
              Insira o código enviado para seu email *
            </label>
            <input
              type="text"
              className="styles-input size-inputs"
              name="code"
              placeholder="24432"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <input
              type="submit"
              className="sb-style"
              value="Enviar"
            />
             <BasicModal
              title="Aviso"
              body={`${message.charAt(0).toUpperCase() + message.slice(1)}`}
              open={modalOpen}
              handleClose={handleCloseModal}
                 />
          </form>          
          }
          
        </section>
      </main>
      <Footer/>
      </>
    )
}

export default ConfirmCodeEmail