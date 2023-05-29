import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review de los clientes</h5>
      <h2>Testimonios</h2>
      <div className='container  testimonials__container'>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Hector Lozada</h5>
            <small className='client__review'>Una excelente empresa, muy cumplida y muy buenos diseños!</small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials