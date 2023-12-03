import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import menuIcon from '../../public/menu.svg'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-neutral-50'>
      <nav className='flex flex-col md:flex-row items-center justify-between mx-auto p-6'>
        <div className='flex justify-between w-full'>
          <button onClick={toggleMenu} className='md:hidden'>
            <img className='w-12' src={menuIcon} alt='Menu' />
          </button>
          <div className='text-sky-700 grow flex items-center justify-center md:justify-start'>
            <span className='block text-7xl font-bold font-mono degradado-logo animate-pulse'>T</span>
            <h1 className='basis-16 text-1xl font-mono font-semibold'>Tomas Roland Preduna</h1>
          </div>
        </div>
        <div className={`text-center p-10 text-slate-900 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='h-auto items-center list-none gap-5 flex flex-col md:flex-row'>
            <li className='uppercase font-bold text-sm'>
              <NavLink to='/Inicio'  className='hover:bg-blue-500  hover:text-white  px-3 py-2 rounded-md text-sm font-mono font-bold duration-300'>Inicio</NavLink>
            </li>
            <li className='uppercase font-bold text-sm'>
              <NavLink to='/Portafolio' className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-mono font-bold duration-300'>Portafolio</NavLink>
            </li>
            <li className='uppercase font-bold text-sm'>
              <NavLink to='/Curriculum'  className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-mono font-bold duration-300'>Habilidades</NavLink>
            </li>
            <li className='uppercase font-bold text-sm'>
              <NavLink to='/Contacto'  className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-mono font-bold duration-300'>Contacto</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}