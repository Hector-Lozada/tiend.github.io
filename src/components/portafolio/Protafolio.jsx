import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/camisa1.PNG'
import IMG2 from '../../assets/camisa2.PNG'
import IMG3 from '../../assets/ss.jpg'
import IMG4 from '../../assets/ss2.jpg'
import IMG5 from '../../assets/ss3.jpg'
import IMG6 from '../../assets/ss4.jpg'
import CATALOGO from '../../assets/CATALOGO.pdf'
import {BsWhatsapp} from 'react-icons/bs'

const Protafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Nuestro nuevo</h5>
      <h2>Catálogo</h2>
      <div className="container portafolio__container">
        <article className="portafilio__item">
          <div className="portafolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Camisa cuello redondo</h3>
        </article>
        <article className="portafilio__item">
          <div className="portafolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Camiseta tipo polo</h3>
        </article>
        <article className="portafilio__item">
          <div className="portafolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Camisa oxford manga larga</h3>
        </article>
        <article className="portafilio__item">
          <div className="portafolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Camisa oxford manga corta</h3>
        </article>
        <article className="portafilio__item">
          <div className="portafolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Camisa drill manga larga</h3>
        </article>
        <article className="portafilio__item">
          <div className="portafolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Camisa jean manga larga</h3>
        </article>
      </div>
    <div class="bot">
      <a href='https://wa.link/0imtvo' target='_blanck' className='btn'><BsWhatsapp/> Escribenos a WhatsApp</a>  O <a href={CATALOGO} download className="btn btn-primary"> Descarga el Catálogo</a>
      
    </div>
    </section>
  )
}

export default Protafolio