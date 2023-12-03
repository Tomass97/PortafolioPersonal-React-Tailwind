import htmlsvg from '../../public/html.svg'
import csssvg from '../../public/css.svg'
import javascriptsvg from '../../public/javascript.svg'
import reactsvg from '../../public/react.svg'
import tailwindsvg from '../../public/tailwind.svg'
import sasssvg from '../../public/sass.svg'
import mysqlsvg from '../../public/mysql.svg'
import nextsvg from '../../public/next.svg'
import strapisvg from '../../public/strapi.svg'
import astrosvg from '../../public/astro.svg'
import gitsvg from '../../public/git.svg'
import githubsvg from '../../public/github.svg'
import reactAppsvg from '../../public/create-react-app.svg'
import postresqlsvg from '../../public/postgresql.svg'
import vitesvg from '../../public/vite.svg'
import bootstrapsvg from '../../public/bootstrap.svg'
import prismasvg from '../../public/prisma.svg'

export default function useTechnologies() {
  return [
    { src: htmlsvg, alt: 'HTML logo', name: 'HTML' },
    { src: csssvg, alt: 'CSS logo', name: 'CSS' },
    { src: tailwindsvg, alt: 'Tailwind CSS logo', name: 'Tailwind CSS' },
    { src: bootstrapsvg, alt: 'Bootstrap logo', name: 'Bootstrap' },
    { src: javascriptsvg, alt: 'JavaScript logo', name: 'JavaScript' },
    { src: reactsvg, alt: 'React logo', name: 'React' },
    { src: nextsvg, alt: 'Next.js logo', name: 'Next.js' },
    { src: astrosvg, alt: 'Astro logo', name: 'Astro' },
    { src: sasssvg, alt: 'Sass logo', name: 'Sass' },
    { src: strapisvg, alt: 'Strapi logo', name: 'Strapi' },
    { src: gitsvg, alt: 'Git logo', name: 'Git' },
    { src: githubsvg, alt: 'GitHub logo', name: 'GitHub' },
    { src: reactAppsvg, alt: 'Create React App logo', name: 'Create React App' },
    { src: postresqlsvg, alt: 'PostgreSQL logo', name: 'PostgreSQL' },
    { src: vitesvg, alt: 'Vite logo', name: 'Vite' },
    { src: prismasvg, alt: 'Prisma logo', name: 'Prisma' },
  ]
}