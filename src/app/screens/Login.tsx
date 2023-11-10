import React, { use, useEffect, useState } from 'react';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../globals.css';
import { Request } from '../helpers/Request';
import Footer from '../components/Footer';
import BasicModal from '../components/BasicModal';


function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false)
  const navigate:NavigateFunction = useNavigate()
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    Request( 'post', 'post-login',data)
      .then((response) => {
        if (response.status && response.token) {
          localStorage.setItem('token', response.token)
          localStorage.setItem('id',response.id)
          navigate('/home');
        }
      })
      .catch((error) => {
        setMessage(error.response.data.error);
        setLoading(false)
        setModalOpen(true);
      });
  }
  useEffect(()=> {
    if(token){
      Request('get','validated-token','',token).then(response=>{
        if(response.status){
           console.log(response.status)
        }
      }).catch(error => {
        console.log('error --->',error)
         if(error.response.data.error === 'Não autorizado'){
            localStorage.removeItem('token')
            localStorage.removeItem('id')
         }
         else{
          console.log(error)
         }
      })
    }},[])
  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <main className="flex full-size">
        <section className="form-container flex">
          {loading ? <div className='spinner'></div> : 
            <form action="/post-login" method='post' onSubmit={handleSubmit}>
            <h1 className="center-text title-form">ENTRAR</h1>
            <label htmlFor="login" className="sty-label">
              Email:
            </label>
            <input 
              type="email" 
              className="styles-input size-inputs" 
              name="email"  
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password" className="sty-label">
              Senha:
            </label>
            <input 
              type="password" 
              className="styles-input size-inputs" 
              name="password"    
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <Link to='/retrieve-account' className="link">
              Esqueceu senha ?
            </Link>      
             <input type="submit" id='bt-test' className="sb-style" value="Entrar"/>
            
            <Link to="/register" className="link center-text"> 
              Não tem conta?
            </Link>
          </form>          
          }
          
        </section>
      </main>
      <Footer />
      <BasicModal
        title="Aviso"
        body={`${message.charAt(0).toUpperCase() + message.slice(1)}`}
        open={modalOpen}
        handleClose={handleCloseModal}
      />
    </>
  );
}

export default LoginPage;
