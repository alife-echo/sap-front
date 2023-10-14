import React, { useState,useEffect } from 'react';
import '../globals.css';
import Footer from '../components/Footer';
import axios from 'axios';
import { Request } from '../helpers/Request';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import BasicModal from '../components/BasicModal';
import { useJwt } from "react-jwt";

function ValidatedRetrieve() {
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate:NavigateFunction = useNavigate()
  const [message,setMessage] = useState<string>('')
  const [loading,setLoading] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    const data = {
        token:code,
        password: password,
    };


   Request('post','retrieve-post',data)
      .then((response) => {
      if (response.ok) {
        console.log('RESPOSTA',response)
        navigate('/success-retrieve');
      }
      })
      .catch((error) => {
        console.log('ERROR---->',error)
        setMessage(error.response.data.error ? error.response.data.error : '')
        setLoading(false)
        setModalOpen(true)
      });
  }
  useEffect(() => {
    if (!token) {
       navigate('/not-authorized')
  } 
  }, [token, navigate])
  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <main className="flex full-size">
        <section className="form-container flex">
        {loading ?   <div className='spinner'></div> :  <form onSubmit={handleSubmit} className="register-retrieve" method="post" action='register-post'>            
            <h1 className="mn center-text title-form">REDEFINIR SENHA</h1>
          
            <label htmlFor="name" className="sty-label">Código *</label>
            <input
              type="text"
              className="styles-input size-inputs"
              name="token"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Ex:adw12312"
            />
            <label htmlFor="password" className="sty-label">Nova Senha *</label>
            <input
              type="password"
              className="styles-input size-inputs"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ex: #@d291312"
            />
            <input type="submit" className="sb-style" value="Enviar" />
             <BasicModal
              title="Aviso"
              body={`${message.charAt(0).toUpperCase() + message.slice(1)}`}
              open={modalOpen}
              handleClose={handleCloseModal}
                 />
          </form> }
      
        </section>
      </main>
      <Footer />
     
    </>
  );
}

export default ValidatedRetrieve;