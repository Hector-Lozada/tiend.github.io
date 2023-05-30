import React from 'react'
import Catalogo from '../../assets/CATALOGO.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Catalogo} download className='btn btn-primary'>Descarga Catálogo</a>
        <a href='#contact' className='btn'>Contacto</a>
        <a href='#portafolio' className='btn'>Ir al Catálogo</a>
    </div>
  )
}

export default CTA