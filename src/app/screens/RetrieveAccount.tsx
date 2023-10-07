import React from 'react';
import Footer from '../components/Footer';
import '../globals.css';
function RetrieveAccount() {
  return (
    <>
    <main className="flex full-size">
      <section className="form-container flex">
        <form action="" className="register-retrieve" method="post">
          <h1 className="dra center-text title-form">RECUPERAR SENHA</h1>
          <label htmlFor="email-retrieve" className="sty-label">Email Institucional *</label>
          <input type="email" className="styles-input size-inputs" name="email-retrieve" placeholder="Ex: alife.silva@unifesspa.edu.br" />
          <input type="submit" className="sb-style" value="Enviar" />
        </form>
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default RetrieveAccount;
