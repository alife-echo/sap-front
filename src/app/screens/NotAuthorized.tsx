
import React from 'react';
import '../globals.css';
import Footer from '../components/Footer';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NotAuthorized = () => {
const navigate:NavigateFunction = useNavigate()

  return (
    <>
      <main className="flex full-size">
        <section className="form-container flex"> 
          <form action="confirm-email-post" className="register-retrieve flex" method="post">
            <h1 className="dra center-text title-form">ACESSO NÃO AUTORIZADO</h1>
            <Link to="/" className="sb-style center-text flex" > 
                    Ir para página inicial
            </Link>
          </form>
        </section>
      </main>
      <Footer/>
      </>
  );
}

export default NotAuthorized;
