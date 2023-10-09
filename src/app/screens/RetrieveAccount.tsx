import React,{useState,useEffect} from "react";
import Footer from '../components/Footer';
import '../globals.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Request } from "../helpers/Request";
import BasicModal from "../components/BasicModal";

function RetrieveAccount() {
  const [email,setEmail] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate:NavigateFunction = useNavigate()
  const [message,setMessage] = useState<string>('')
  const [response,setResponse] = useState()
  const [loading,setLoading] = useState<boolean>(false)


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    const data = {
      email:email
    }
    Request('post','send-token-post',data)
    .then((response) => {
      setResponse(response)
      localStorage.setItem('token', response.token)
      setLoading(false)
      navigate('/validated-retrieve')
    })
    .catch((error) => {
      setMessage(error.response.data.error);
      setLoading(false)
      setModalOpen(true);
    });
  }

  const handleCloseModal = () => {setModalOpen(false)} 

  return (
    <>
    <main className="flex full-size">
      <section className="form-container flex">
        {loading ?  <div className='spinner'></div> : <form onSubmit={handleSubmit} action="send-token-post" className="register-retrieve" method="post">
          <h1 className="dra center-text title-form">RECUPERAR SENHA</h1>
          <label htmlFor="email-retrieve" className="sty-label">Email Institucional *</label>
          <input 
            type="email" 
            className="styles-input size-inputs" 
            name="email" 
            placeholder="Ex: alife.silva@unifesspa.edu.br" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <input type="submit" className="sb-style" value="Enviar" />
          <BasicModal
              title="Aviso"
              body={`${message.charAt(0).toUpperCase() + message.slice(1)}`}
              open={modalOpen}
              handleClose={handleCloseModal}
                 />
        </form>}
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default RetrieveAccount;
