import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useProyectos from '../custom-hooks/useProyectos'

export const Portafolio = () => {
  const proyectos = useProyectos()

  return (
    <>
      <section className='p-4'>
        {proyectos.map((proyecto, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          })
          const animation = useAnimation()

          React.useEffect(() => {
            if (inView) {
              animation.start({
                opacity: 1,
                x: '0%',
                transition: { duration: 2.5, ease: 'easeOut' },
              })
            }
          }, [animation, inView])


          return (
            <motion.div
              ref={ref}
              animate={animation} 
              initial={{ opacity: 0, x: index % 2 === 0 ? '-100%' : '100%' }} 
              key={index} 
              className={`max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 m-4 p-4 md:p-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} degradado bg-opacity-60 rounded-lg`}>
              <div className=" flex justify-center items-center w-full md:w-1/2 ">
                <a href={proyecto.link} target="_blank">
                  <img
                    className={`rounded-md w-full h-auto shadow-2xl ${proyecto.shadowColor} img-scale`}
                    src={proyecto.image}
                    alt={proyecto.title}
                  />
                </a>
              </div>
              <div className="flex flex-col justify-center items-center gap-9 w-full md:w-3/5">
                <h2 className={`text-5xl font-kanit ${proyecto.titleColor}`}>{proyecto.title}</h2>
                <div className="flex flex-row justify-center items-center gap-4">
                  {proyecto.technologies.map((tech, index) => (
                    <img
                      key={index}
                      className="w-16 h-auto"
                      src={tech}
                      alt={proyecto.title}
                    />
                  ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <a
                    href={proyecto.link}
                    target="_blank"
                    className={`rounded-m text-white py-4 px-10 text-lg font-semibold hover:bg-slate-700 ${proyecto.buttonColor} transition-transform duration-200 ease-in-out active:transform hover:scale-110`}
                  >
                    <div className="uppercase">Ver</div>
                  </a>
                  <a
                    href={proyecto.githubLink}
                    target="_blank"
                    className={`rounded-md text-white py-4 px-10 text-lg font-semibold hover:bg-slate-700 ${proyecto.buttonColor} transition-transform duration-200 ease-in-out active:transform hover:scale-110`}
                  >
                    <div className="uppercase">Github</div>
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </section>
    </>
  )
}
export default Portafolio