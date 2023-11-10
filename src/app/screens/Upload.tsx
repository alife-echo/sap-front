import React, { useState,useEffect,useRef } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Request } from '../helpers/Request';
import BasicModal from '../components/BasicModal';

import '../globals.css';


 const Upload = () => {
    const [nameItem, setNameItem] = useState<string>('');
    const [littleDescription, setLittleDescription] = useState<string>('');
    const [questionsValidated,setQuestionsValidated] = useState<string>('')
    const [meetingLocation,setMeetingLocation] = useState<string>('')
    const [image, setImage]  = useState<File | undefined>(undefined);
    const navigate:NavigateFunction = useNavigate()
    const [message,setMessage] = useState<string>('')
    const [loading,setLoading] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [error,setError] = useState<boolean>(false)
    const fileInput = useRef<HTMLInputElement>(null);
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    let idUser = localStorage.getItem('id') || ''

    
    const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      setLoading(true);
      e.preventDefault();
  
      if (image) {
        const data = {
          nameItem,
          littleDescription,
          questionsValidated,
          meetingLocation,
          idUser: localStorage.getItem('id') || '',
          image: image.name
        }
  
        const formData = new FormData();
        formData.append("nameItem", data.nameItem);
        formData.append("littleDescription", data.littleDescription);
        formData.append("questionsValidated", data.questionsValidated)
        formData.append("meetingLocation", data.meetingLocation);
        formData.append("idUser", data.idUser);
        formData.append("image", image);
  
        try {
          const response = await fetch("http://localhost:4000/upload", {
            method: 'POST',
            body: formData,
            redirect: 'follow'
          });
          const result = await response.json();
          setLoading(false)
          setMessage(result.ok || result.error);
          setModalOpen(true);

        } catch (error) {
          setLoading(false)
          console.log(error)
        }
  
      } else {
          setLoading(false)
          setMessage('Selecione uma imagem')
          setModalOpen(true);
      }
    }
  
  
    useEffect(()=>{
      if(token){
        Request('get','validated-token','',token).then(response=>{
          if(response.status){
             console.log(response.status)
          }
        }).catch(error => {
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
    <Header/>
    <main className='full-sizeUpload'>
    <section className="upload-container flex flex-col">
    {loading ? <div className="centerSpinner"> <div className='spinner'></div></div> :
      <form action="/upload" className="flex-col upload-form" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
      <label htmlFor="" className="label-upload sty-label">Nome do item:</label>
      <input
        type="text"
        name="nameItem"
        className="si-tu styles-input size-input-name-item"
        placeholder="Ex:Copo Stanley"
        value={nameItem}
        onChange={(e)=> setNameItem(e.target.value)}
      />
      <label htmlFor="" className="label-upload sty-label">Pequena descrição item:</label>
      <textarea
        className="textArea styles-input"
        name="littleDescription"
        maxLength={parseInt('90' as string)}
        placeholder="Ex:Copo Stanley encontrado no laboratorio de informatica"
        value={littleDescription}
        onChange={(e)=> setLittleDescription(e.target.value)}

      ></textarea>
      <label htmlFor="" className="label-upload sty-label">Perguntas para validação:</label>
      <textarea
        className="textArea styles-input"
        name="questionsValidated"
        placeholder={`Ex:Qual o nome atras abaixo do item ?\nQual o nome atras abaixo do item ?`}
        value={questionsValidated}
        onChange={(e)=> setQuestionsValidated(e.target.value)}
      ></textarea>
      <label htmlFor="" className="label-upload sty-label">Localização de encontro:</label>
      <textarea
        className=" dif-heigh-text textArea styles-input"
        name="meetingLocation"
        placeholder={`Ex:Unifesspa campus 2 \n Bloco 5 \n Sala 24 \n Horario : 17:30`}
        value={meetingLocation}
        onChange={(e)=> setMeetingLocation(e.target.value)}
      ></textarea>
      <label htmlFor="" className="label-upload sty-label">Escolha imagem:</label>
      <input type="file" name="image" onChange={handleFileSelected} ref={fileInput} />
      <input className="bt-upload sb-style-upload" type='submit' value="Enviar" />
    </form>
    }  
    </section>
    </main>
    <Footer/>
    <BasicModal
        title="Aviso"
        body={`${message.charAt(0).toUpperCase() + message.slice(1)}`}
        open={modalOpen}
        handleClose={handleCloseModal}
      />
    </>
  );
}

export default Upload