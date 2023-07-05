import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1g9a0s8",
        "template_usmm7jb",
        form.current,
        "4h-uTAmhgMcWGzJJ1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const msj = () => {
    toast.success("🏹 Mensaje enviado con éxito!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    toast.clearWaitingQueue();
  };

  return (
    <section
      className="contact container animate__animated animate__zoomInDown"
      id="contact"
    >
      <br />
      <h2>Contacto</h2>
      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-box">
            <label>Nombre</label>
            <input type="text" name="user_name" placeholder="Nombre" />
          </div>
          <div className="email-box">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="email@email.com"
            />
          </div>
          <div className="message-box">
            <label>Mensaje</label>
            <textarea rows="5" name="message" placeholder="Mensaje aqui..." />
          </div>
          <button
            className="btn-1 btn-msg"
            type="submit"
            value="Enviar mensaje"
            onClick={msj}
          >
            Enviar mensaje
          </button>
          <ToastContainer limit={1} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
