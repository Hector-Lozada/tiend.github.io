import React from 'react'
import './about.css'
import ME from '../../assets/logo2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsWhatsapp} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce</h5>
      <h2>Sobre Nosotros</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>5+ años trabajando</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>+100k en todo el mundo</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Vestimenta</h5>
              <small>25+ tipos de vestimenta</small>
            </article>
          </div>
          <p>
            Somos una empresa dedicada única y exclusivamente a las confexiones de todo tipo de ropa. <br/>
            Tenemos más de 5 años trabajando con todo tipo de telas, aliandonos con más de 15 empresas nacionales e internacionales.<br/>
            Estamos ubicados en PORTETE #1134 ENTRE VILLACENCIO Y GUARANDA en la ciudad de Guayaquil.<br/>
            Deseas saber más?</p>
          <a href='#contact' className='btn btn-primary'> Contacta un Ejecutivo</a>  O <a href='https://wa.link/0imtvo' className='btn'><BsWhatsapp/> Escribenos por Whatsapp</a>
        </div>
      </div>
    </section>
  )
}

export default About