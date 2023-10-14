import React, { useState,useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useJwt } from "react-jwt";
import Header from '../components/Header';
import Footer from '../components/Footer';


const Upload = () => {
    const [code, setCode] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate:NavigateFunction = useNavigate()
    const [message,setMessage] = useState<string>('')
    const [loading,setLoading] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [error,setError] = useState<boolean>(false)
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    const { isExpired } = useJwt(token  as  string);
  
  return (
    <>
    <Header/>
    <main className='full-sizeHome'>
    <section className="upload-container flex flex-col">
      <form action="upload-post" className="flex-col upload-form" method="post" encType="multipart/form-data">
        <label htmlFor="" className="label-upload sty-label">Nome do item:</label>
        <input
          type="text"
          name="name_item"
          className="si-tu styles-input size-input-name-item"
          placeholder="Ex:Copo Stanley"
        />
        <label htmlFor="" className="label-upload sty-label">Pequena descrição item:</label>
        <textarea
          className="textArea styles-input"
          name="description_item"
          maxLength={parseInt('90' as string)}
          placeholder="Ex:Copo Stanley encontrado no laboratorio de informatica"
        ></textarea>
        <label htmlFor="" className="label-upload sty-label">Perguntas para validação:</label>
        <textarea
          className="textArea styles-input"
          name="questions_item"
          placeholder="Ex:Qual o nome atras abaixo do item ?&#10Qual o nome atras abaixo do item ?"
        ></textarea>
        <label htmlFor="" className="label-upload sty-label">Localização de encontro:</label>
        <textarea
          className=" dif-heigh-text textArea styles-input"
          name="location_item"
          placeholder="Ex:Unifesspa campus 2 &#10 Bloco 5 &#10 Sala 24 &#10 Horario : 17:30"
        ></textarea>
        <label htmlFor="" className="label-upload sty-label">Escolha imagem:</label>
        <input type="file" name="upload_img" />
        <input className="bt-upload sb-style-upload" type="submit" value="Enviar" />
      </form>
    </section>
    </main>
    <Footer/>
    </>
  );
}

export default Upload;
