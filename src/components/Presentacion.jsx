import React from 'react'
import imagenCurriculum from '../../public/imagen-curriculum.avif'
import downArrow from '../../public/down-arrow.svg'
import curriculumLogo from '../../public/curriculum.svg'
import { useSpring, animated, config } from 'react-spring'
import linkedinLogo from '../../public/linkedin.svg'

const links = [
  {
    href: "https://drive.google.com/file/d/12VvLO9gf_2FlpIQRkjuKmCLCVUnWhd06/view?usp=sharing",
    logo: linkedinLogo,
    text: "Linkedin",
    alt: "linkedin img"
  },
  {
    href: "https://drive.google.com/file/d/12VvLO9gf_2FlpIQRkjuKmCLCVUnWhd06/view?usp=sharing",
    logo: curriculumLogo,
    text: "CV",
    alt: "cv img"
  }
];

export default function Presentacion() {
  const fade = useSpring({
    from: { opacity: 0, y: '-100%' },
    to: { opacity: 1, y: '0%' },
    delay: 500,
  })

  const fadeInDelay = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1500,
  })

  const fadeInDelayArrow = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2700,
  })


  return (
    <>
      <div className='flex p-1 flex-col justify-start items-center h-screen'>
        <div className='flex justify-center hover:scale-110 transition-all duration-300 p-16'>
          <animated.img
            className='rounded-full object-cover w-56 h-auto shadow-lg shadow-blue-400 hover:shadow-blue-600 hover transition-all duration-10'
            src={imagenCurriculum}
            alt="imagen cv"
            style={fade}
          />
        </div>
        <animated.div className="text-4xl md:text-7xl font-kanit text-color-1 my-2 text-center degradado2 hover:scale-110" style={fade}>
          Hola, soy Tomas,{' '}
          <strong className="degradado2">Desarrollador web.</strong> <br /> Ofrezco mis servicios de{' '}
          <strong className="degradado2">Programación y Desarrollo.</strong>
        </animated.div>
        <div className="flex justify-center md-flex-row text-center gap-3 p-10">
          {links.map((link, index) => (
            <animated.a
              key={index}
              href={link.href}
              target='_blank'
              className="rounded-md bg-blue-100 text-blue-800 py-3 px-8 text-base font-semibold  hover:bg-blue-200 transition-all duration-300"
              style={fadeInDelay}
            >
              <img className='w-16 h-auto' src={link.logo} alt={link.alt} />
              <div className='uppercase'>{link.text}</div>
            </animated.a>
          ))}
        </div>
        <div className=' hidden md:flex justify-center animate-bounce'>
          <animated.img className='w-16' src={downArrow} alt="arrow image" style={fadeInDelayArrow} />
        </div>
      </div>
    </>
  );
}