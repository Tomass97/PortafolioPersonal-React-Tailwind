import React from 'react'
import useTechnologies from '../custom-hooks/useTechnologies'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Curriculum = () => {
  const technologies = useTechnologies()

  return (
    <div className='max-w-screen-2xl mx-auto flex justify-start items-center flex-col min-h-screen p-10 degradado rounded-xl'>
      <h1 className='flex justify-center items-center text-3xl md:text-6xl text-color-1 font-kanit mb-5 p-10'>Mis habilidades</h1>

      <section className='grid grid-cols-3 xl:grid-cols-4 justify-center items-center gap-20 mb-20'>
        {technologies.map((tech, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          })
          const animation = useAnimation()

          React.useEffect(() => {
            if (inView) {
              animation.start({
                opacity: 1,
                x: '0%',
                transition: { duration: 1, delay: index * 0.2 },
              })
            }
          }, [animation, inView])

          return (
            <motion.div 
              className='flex flex-col justify-center items-center' 
              key={index} 
              ref={ref} 
              animate={animation} 
              initial={{opacity: 0, x: '-100%'}}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <img src={tech.src} alt={tech.alt} width='100' height='100' />
              <p className='text-center font-black p-1'>{tech.name}</p>
            </motion.div>
          )
        })}
      </section>
    </div>
  )
}

export default Curriculum