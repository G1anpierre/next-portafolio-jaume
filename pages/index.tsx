import type {NextPage} from 'next'
import Head from 'next/head'
import {Button} from '../components/Button'
import {Header} from '../components/Header'
import {Hero} from '../components/Hero'
import {ContainerWrapper} from '../components/Wrapper'
import {Impressions} from '../components/Impressions'
import {Comments} from '../components/Comments'
import {Projects} from '../components/Projects'
import {Footer} from '../components/Footer'
import UserLeo from '../public/user-leo.svg'
import UserJason from '../public/user-jason.svg'
import UserMarco from '../public/user-marco.svg'
import LaptopIphonePic from '../public/laptop-phone.svg'
import IpadPic from '../public/📱 iPad.svg'
import IphonePic from '../public/📱 IphoneX.svg'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portafolio Jaume</title>
      </Head>
      <ContainerWrapper>
        <Header />
        <main>
          <Hero />
          <Impressions />
          <Projects
            image={LaptopIphonePic}
            title="leonidasesteban.com"
            info="Accede a más de 120 proyectos que te ayudarán a mejorar 
          tus habilidades como desarrollador Front-End."
            altText="laptop-iphone"
            reverse={false}
          />
          <Comments
            image={UserLeo}
            altText="user leo"
            comment="Jaume ha sido de gran ayuda para acelerar ciertos esfuerzos de
              desarrollo. Lo que nos hubiera llevado 6 meses solo les llevo 1,5
                meses."
            commentAuthor="LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM"
          />
          <Projects
            image={IpadPic}
            title="MARVOL"
            info="Es el sitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol."
            altText="Ipad-image"
          />
          <Comments
            image={UserJason}
            altText="user Jason"
            comment="Jaume ha superado mis expectativas desde el diseno hasta el desarrollo"
            commentAuthor="JASON LOPEZ / COFUNDADOR Y CEO MARVOL"
          />
          <Projects
            image={IphonePic}
            title="NETNET"
            info="Películas y series ilimitadas y mucho más.
          Disfruta donde quieras. Cancela cuando quieras."
            altText="iphone-image"
          />
          <Comments
            image={UserMarco}
            altText="user Marco"
            comment="Por primera vez en la historia de nuestra empresa, aparecimos en todas las plataformas en las que trabajamos"
            commentAuthor="MARCO CORTEZ / NETNET"
          />
        </main>

        <Footer />
      </ContainerWrapper>
    </div>
  )
}

export default Home
