import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Portafolio de</h5>
      <h2>Servicios</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Asesoría</h4>
                <small className='text-light'>
                  Te ofrecemos asesoría técnica personalizada guiada por expertos en la cual se tiene en cuenta el análisis de necesidades de tu empresa y las tendencias mundiales con respecto al uso de uniformes.
                </small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
             <div>
              <h4>Tallaje Personalizado</h4>
                <small className='text-light'>
                  Realizamos pruebas de determinación de tallas mediante una corrida de piezas en molde para garantizar que los uniformes se adapten perfectamente a cada usuario.
                </small>
             </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Catálogo Digital</h4>
                <small className='text-light'>
                  Nuestro catálogo digital es una herramienta multimedia y dinámica, en la cual nuestros clientes pueden seleccionar los modelos base sobre los cuales desean personalizar su nuevo uniforme.
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <div className="experience__content">
          <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Logística y Distribución</h4>
                <small className='text-light'>
                  Tú eliges la logística y nosotros la desarrollamos: GRANEL Todas las prendas sin discriminación de tallas o tipo de artículo son empacadas y distribuidas juntas. PERSONALIZADO Se realiza el armado de kits para cada usuario.
              </small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Diseños Exclusivos</h4>
                <small className='text-light'>
                  Diseñamos lo que tu marca y equipo de trabajo necesita. Nuestra área de diseño desarrolla prendas exclusivas enfocadas en satisfacer las necesidades funcionales y de imagen.
                </small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Gestión y Almacenamiento de Stock</h4>
                <small className='text-light'>
                  Contamos con un sistema de gestión que nos permite planificar, organizar, dirigir y controlar los productos y materiales almacenados para su posterior distribución.
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience