
import React from 'react';
import '../globals.css';
import Footer from '../components/Footer';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SuccessulCreateAccount = () => {
const navigate:NavigateFunction = useNavigate()

  return (
    <body className="flex full-size">
      <main className="flex full-size">
        <section className="form-container flex">
          <form action="confirm-email-post" className="register-retrieve flex" method="post">
            <h1 className="dra center-text title-form">CONTA CRIADA COM SUCESSO</h1>
            <Link to="/" className="sb-style" > 
                    Ir para página inicial
            </Link>
          </form>
        </section>
      </main>
      <Footer/>
    </body>
  );
}

export default SuccessulCreateAccount;
