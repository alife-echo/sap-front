import React,{useState} from "react";
import '../globals.css';
import Footer from "../components/Footer";
import axios from "axios";
const ConfirmCodeEmail = () => {
    return (
        <>
        <main className="flex full-size">
        <section className="form-container flex">
          <form
            action="confirm-email-post"
            className="register-retrieve"
            method="post"
          >
            <h1 className="dra center-text title-form">
              CONFIRMAR EMAIL
            </h1>
            <p className="p-card color-red center-text text-xs">
            </p>
            <label htmlFor="name" className="sty-label">
              Insira o código enviado para seu email *
            </label>
            <input
              type="text"
              className="styles-input size-inputs"
              name="email_confirm"
              placeholder="24432"
            />
            <input
              type="submit"
              className="sb-style"
              value="Enviar"
            />
          </form>
        </section>
      </main>
      <Footer/>
      </>
    )
}

export default ConfirmCodeEmail