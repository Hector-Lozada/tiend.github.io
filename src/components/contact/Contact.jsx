import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3htoopn', 'template_eolmdoj', form.current, 'efHJkLly3-QZHpnbJ')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contactanos</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Correo</h4>
            <h5>dylanmos8@gmail.com</h5>
            <a href="mailto:dylanmos8@gmail.com">Envia un mensaje</a>
          </article>
          <article className="contact__option">
            <BsFillTelephoneFill className='contact__option-icon'/>
            <h4>Teléfonos</h4>
            <h5>+593 99 941 2646</h5>
            <h5>+593 96 121 2900</h5>
            <a >Llamar</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Tu nombre completo' required/>
          <input type='email' name='email' placeholder='Tu correo' required/>
          <textarea name="message"  rows="10" placeholder='Escribe tu mensaje' required/>
          <button type='submit' className='btn btn-primary' required>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact