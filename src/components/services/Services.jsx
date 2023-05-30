import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Nuestra Ventaja</h5>
      <h2>Competitiva</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Atención Personalizada</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Trabajamos en conocer las necesidades prácticas y de imagen que requiere cada uno de nuestros clientes, según el sector en que trabaja.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Experiencia en múltiples sectores</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Tenemos amplia experiencia en la elaboración de uniformes de más de 25 giros comerciales como uniformes ejecutivos, uniformes operativos, supervisores, visitadores, vendedores, mercaderistas, uniformes industriales, construcción, logística, alimentaria, sanitarios, laboratorios, almacenes, entre muchos más.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Diseños exclusivos</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Contamos con un catálogo de prendas que personalizamos para cada cliente, pero también desarrollamos diseños únicos y exclusivos que atiendan las necesidades de imagen y funcionalidad de cada cliente.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Tiempos de entrega</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Cumplimos con nuestro compromiso en tiempos de entrega y superamos tus expectativas de calidad.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services