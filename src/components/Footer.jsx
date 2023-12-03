import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center h-96 leading-6 text-center text-neutral-800 text-1xl font-mono'>
      <div>
      <div className='text-center p-10 text-slate-900'>
        <ul className='h-auto items-center list-none gap-5 flex flex-col md:flex-row'>
          <li className='uppercase font-bold text-sm'>
            <NavLink to='/Inicio'  className='hover:bg-blue-500  hover:text-white  px-3 py-2 rounded-md text-sm font-mono font-medium duration-300'>Inicio</NavLink>
          </li>
          <li className='uppercase font-bold text-sm'>
            <NavLink to='/Portafolio' className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-mono font-medium duration-300'>Portafolio</NavLink>
          </li>
          <li className='uppercase font-bold text-sm'>
            <NavLink to='/Curriculum'  className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-mono font-medium duration-300'>Habilidades</NavLink>
          </li>
          <li className='uppercase font-bold text-sm'>
            <NavLink to='/Contacto'  className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-mono font-medium duration-300'>Contacto</NavLink>
          </li>
        </ul>
      </div>
      </div>
      <div>Portafolio Roland Tomas Preduna  2023</div>
    </footer>
  )
}
