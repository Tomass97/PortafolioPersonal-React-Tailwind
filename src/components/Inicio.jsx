import React from 'react'
import Portafolio from './Portafolio'
import Presentacion from './Presentacion'
import Curriculum from './Habilidades'
import Contacto from './Contacto'


export const Inicio = () => {


  return (
    <>
      <div className='md:snap-normal'>
        <Presentacion />
      </div>
      <main
        className='snap-mandatory'
      >
        <div className='md:snap-normal'>
          <Portafolio />
        </div>
        <div className='md:snap-normal'>
          <Curriculum />
        </div>
        <div className='md:snap-normal'>
          <Contacto />
        </div>
      </main>
    </>
  )
}