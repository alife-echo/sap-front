import React, { useState } from 'react';
import '../globals.css';
import Footer from '../components/Footer';
import axios from 'axios';
import { Request } from '../helpers/Request';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import BasicModal from '../components/BasicModal';
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate:NavigateFunction = useNavigate()
  const [message,setMessage] = useState<string>('')
  const [loading,setLoading] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      name:name
    };


   Request(data, 'post','register-post')
      .then((response) => {
      if (response.id && response.token) {
        console.log('RESPOSTA',response)
        navigate('/confirm-email');
      }
      })
      .catch((error) => {
        console.log('ERROR---->',error)
        setMessage(error.response.data.error ? error.response.data.error : '')
        setLoading(false)
        setModalOpen(true)
      });
  }
  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <main className="flex full-size">
        <section className="form-container flex">
        {loading ?   <div className='spinner'></div> :  <form onSubmit={handleSubmit} className="register-retrieve" method="post" action='register-post'>            
            <h1 className="center-text title-form">REGISTRAR</h1>
          
            <label htmlFor="name" className="sty-label">Nome completo *</label>
            <input
              type="text"
              className="styles-input size-inputs"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Álife Silva De Moraes"
            />
            <label htmlFor="email" className="sty-label">Email Institucional *</label>
            <input
              type="email"
              className="styles-input size-inputs"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: alife.silva@unifesspa.edu.br"
            />
            <label htmlFor="password" className="sty-label">Senha *</label>
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

export default Register;
