import React, { useState,useEffect,useRef, use } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Request } from '../helpers/Request';
import Header from "../components/Header";
import Footer from "../components/Footer";




export default function ListItemsLostUser () {
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const navigate:NavigateFunction = useNavigate()
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    let idLocal = localStorage.getItem('id') ? localStorage.getItem('id') : ''
    
    return (
            <>
            <Header/>
                <section className="flex flex-col">           
                        <a href='/myforum{{id}}'>
                        <div className="container_messages_view mt-1_5 m-1 justFlex ">
                            <figure >
                                <img src='{{image}}' className='adjust_img_notify' />
                            </figure>
                            <div className=' flex-col t'>
                                <h2 className="title_res_notify text-xs t"></h2>
                                <p className='p_card_res_notify text-xs t'></p>
                            </div>
                        </div>
                        </a>
                </section> 
            <Footer/>  
            </>
    )
}

