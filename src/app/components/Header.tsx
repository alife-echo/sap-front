import React, { use, useEffect, useState } from 'react';
import { FaSearch, FaSignOutAlt, FaHome, FaLayerGroup, FaCloudUploadAlt, FaEnvelope } from 'react-icons/fa';
import '../globals.css';
import { Request } from '../helpers/Request';
import Tooltip from '@mui/joy/Tooltip';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



function Header({userId}:headerProps) {
  const [show,setShow] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false)
  const [contentInput,setContentInput] = useState<string>()
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
   setLoading(true)
   e.preventDefault()
   const data = {
    contentInput
   }
   console.log(userId)
   Request('get','filterCard',data).then((response)=>{
      if(response.cards){
         
      }
   })

  }

  return (
    <>
    <header className="on">
      <nav>
        <h1 className="title-home">SAP</h1>
        <div className="form-group fg--search">
          <form method="GET" action="/filterCard" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-filter"
              name="filterSearch"
              value={contentInput}
              onChange={(e)=> setContentInput(e.target.value)}
              placeholder="Informações sobre o achado"
            />
            <button type="submit">
              <FaSearch size={28}/>
            </button>
          </form>
        </div>
        <div className="menu-toggle" onClick={()=> setShow(!show)}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="imgs-link">
        
          <Tooltip title='Página principal' size='lg'>
          <figure>
             <Link to='/home'>
              <FaHome size={28} style={{ color: 'white' }}/>
              </Link>
          </figure> 
          </Tooltip>
          <Tooltip title='Meus perdidos' size='lg'>
          <figure>
          
              <FaLayerGroup size={28} style={{ color: 'white' }} />
          </figure>
          </Tooltip>
          <Tooltip title='Enviar item perdido' size='lg'>
          <figure>
              <Link to='/upload'>  
                  <FaCloudUploadAlt size={28} style={{ color: 'white' }} />
              </Link>
             
          </figure>
          </Tooltip>
          <Tooltip title='Minhas mensagens' size='lg'>
          <figure>
            <Link to={`/messagesLocation/${userId}`}>
              <FaEnvelope size={28} style={{ color: 'white' }} />
           </Link>
          </figure>
          </Tooltip>
          <figure>
            <form action="/logout" method="post">
            <Tooltip title='Sair' size='lg'>
              <button type="submit">
             
                <FaSignOutAlt size={28}  style={{ color: 'white' }}/>
            
              </button>
              </Tooltip>
            </form>
          </figure>
        </div>
      </nav>
    </header>
    <section className="links-hidden">
          <form method='GET' action="filter-cards" className="form-input-search-hidden">
             <input type="text" name="filterSearch" className="input-search-hidden"/>
             <input type="submit" value="Pesquisar" className="submit-search-hidden"/>
          </form>
          <a href="/home">HOME</a>
          <a href="/list_items_user{{infoUser}}">ITEMS</a>
          <a href="/upload">UPLOAD</a>
          <a href="/messages">MENSAGENS</a>
           <form action="/logout" method="post">
                      <button type="submit"  className='sb-mob-logout'>
                          SAIR
                      </button>
            </form>
          
       </section>
    </>
  );
}

export default Header;
