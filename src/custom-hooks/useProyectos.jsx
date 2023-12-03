// useProyectos.js
import { useState } from 'react';


import teslaimg from '../../public/teslaimg.avif'
import cluckinbellimg from '../../public/cluckinbellimg.avif'
import auriculares from '../../public/auriculares.avif'
import reservas from '../../public/reservas.avif'
import udemy from '../../public/udemy.avif'
import spotify from '../../public/spotifyimg.avif'

import reactsvg from '../../public/react.svg'
import tailwindsvg from '../../public/tailwind.svg'
import nextsvg from '../../public/next.svg'
import strapisvg from '../../public/strapi.svg'
import astrosvg from '../../public/astro.svg'
import githubsvg from '../../public/github.svg'
import prismasvg from '../../public/prisma.svg'
import vitesvg from '../../public/vite.svg'
import bootstrapsvg from '../../public/bootstrap.svg'
import sasssvg from '../../public/sass.svg'
import csssvg from '../../public/css.svg'
import typescriptsvg from '../../public/typescript.svg'

const useProyectos = () => {
  const [proyectos, setProyectos] = useState([
    {
      title: 'E-Commerce TMS-AUDIO',
      link: 'https://tms-audio.vercel.app/',
      githubLink: 'https://github.com/Tomass97/Tienda-Auriculares-Next',
      image: auriculares,
      technologies: [reactsvg, nextsvg, strapisvg],
      shadowColor: 'shadow-blue-600',
      buttonColor: 'bg-blue-600',
      titleColor: 'text-blue-600'
    },
    {
      title: 'Menú Cluckin Bell',
      link: 'https://cluckinbell.up.railway.app/',
      githubLink: 'https://github.com/Tomass97/cluckinbell-app',
      image: cluckinbellimg,
      technologies: [reactsvg, nextsvg, tailwindsvg, prismasvg],
      shadowColor: 'shadow-purple-600',
      buttonColor: 'bg-purple-600',
      titleColor:   'text-purple-600'
    },
    {
      title: 'Tesla landing page',
      link: 'https://tesla-landing-tomas.netlify.app',
      githubLink: 'https://github.com/Tomass97/Tesla-Principal',
      image: teslaimg,
      technologies: [csssvg, astrosvg, tailwindsvg],
      shadowColor: 'shadow-slate-900',
      buttonColor: 'bg-slate-900',
      titleColor:   'text-slate-900'
    },
    {
      title: 'Web reservas TMS-EATS',
      link: 'https://reservas-tms.netlify.app/',
      githubLink: 'https://github.com/Tomass97/reservastms',
      image: reservas,
      technologies: [reactsvg, vitesvg, tailwindsvg],
      shadowColor: 'shadow-green-600',
      buttonColor: 'bg-green-600',
      titleColor:   'text-green-600'
    },
    {
      title: 'Udemy landing page',
      link: 'https://udemy-tms.netlify.app/',
      githubLink: 'https://github.com/Tomass97/landing-udemy',
      image: udemy,
      technologies: [csssvg, bootstrapsvg, sasssvg],
      shadowColor: 'shadow-purple-500',
      buttonColor: 'bg-purple-500',
      titleColor:   'text-purple-500'
    },
    {
      title: 'Spotify Clon',
      link: 'https://spotify-clon-gamma.vercel.app/',
      githubLink: 'https://github.com/Tomass97/spotify-clon',
      image: spotify,
      technologies: [astrosvg, tailwindsvg, reactsvg, typescriptsvg],
      shadowColor: 'shadow-green-500',
      buttonColor: 'bg-green-500',
      titleColor:   'text-green-500'
    }
  ]);


  return proyectos
};

export default useProyectos;
