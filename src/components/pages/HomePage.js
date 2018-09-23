import React from 'react'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import { linker, menuNodeFinder } from '../../utils/links'
import translation from '../../../data/translations/homePage'
import CategoryButton from '../CategoryButton'

const HomePage = props => {
  const defaultLan = props.data.site.siteMetadata.defaultLang
  const aboutEl = menuNodeFinder(props.data.allMenu, 'about')
  const aboutLink = linker(defaultLan, aboutEl.lang, aboutEl.route)
  const skillsEl = menuNodeFinder(props.data.allMenu, 'tech')
  const skillsLink = linker(defaultLan, skillsEl.lang, skillsEl.route)

  return (
    <>
      <Helmet>
        <html lang={props.lang} />
        <title>{translation[props.lang].title}</title>
      </Helmet>
      <div
        css={{
          '@media(max-height: 500px)': {
            '@media(max-width: 420px)': {
              paddingTop: '0',
            },
            '@media(min-width: 421px)': {
              paddingTop: '0',
            },
          },
          '@media(min-height: 501px)': {
            '@media(max-width: 420px)': {
              paddingTop: '100px',
            },
            '@media(min-width: 421px)': {
              paddingTop: '25px',
            },
          },
        }}
      >
        <Header
          h1={translation[props.lang].h1}
          h2={translation[props.lang].h2}
          quote={translation[props.lang].quote}
        />
      </div>
      <h3>Un breve resumen</h3>
      <p>
        Soy un programador autodidacta que conoce en profundidad todo lo que
        envuelve la programación web, he utilizado <b>PHP</b> para el servidor,
        programación cliente <b>javascript</b>, maquetación CSS3 responsive,
        base de datos <b>MySql</b>, despliegue de sitios web en servidores
        privados Linux mediante SSH, librerías varias, etc. Ya llevo bastantes
        años en el gremio, soy lo que se conoce como FullStack, puedo crear
        páginas estáticas o dinámicas con requerimientos de base de datos por mi
        mismo, excepto si requieren de un diseñador. Para saber más amplía
        información entrando en la sección correspondiente.
      </p>
      <CategoryButton
        route={aboutLink}
        inside
        gatsbyLink
        name="Conoce más sobre mí"
      />
      <h3>Mis skills</h3>
      <p>
        A parte de las herramientas básicas para crear webs estáticas y
        dinámicas, ultimamente estoy especializandome en programación Frontend
        utilizando herramientas avanzadas como <b>ReactJS</b> y librerías
        derivadas bajo el entorno <b>NodeJS</b> ya que me gusta bastante este
        entorno, es un entorno que está evolucionando mucho y provee de muchas
        herramientas útiles, como por ejemplo crear sitios web 'universal' con
        renderizado (node) desde el servidor, solo utilizando javascript.
        También tenemos herramientas que permiten generar páginas estáticas de
        manera eficiente, combinando el Frontend con el backend, esta web es
        prueba de ello, ya que se ha programado utilizando GatsbyJS, una
        Progressive Web App basándose en React, GraphQl, etc. Para saber con
        detalle el espectro y dominio de habilidades técnicas, amplia la
        información en el siguiente enlace.
      </p>
      <CategoryButton
        route={skillsLink}
        inside
        gatsbyLink
        name="Habilidades Técnicas"
      />
      <h3>Trabajos y proyectos</h3>
      <p>
        He trabajado profesionalmente durante 9 años para la misma empresa,
        Panaworld S.L, una pequeña startup de financiación propia que creó su
        producto sobre el 2004, una red de sitios web sobre juegos de navegador
        con soporte a múltiples idiomas. A lo largo de los años yo y el equipo
        fuimos mejorando todo tipo de aspectos del producto para adquirir la
        mayor presencia SEO y retención de usuarios posible, usabilidad,
        rendimiento, red social, gamificación, diseño, etc. Conoce todo el
        desglose de tareas que he realizado en la sección de proyectos.
      </p>
      <CategoryButton route={'#'} inside gatsbyLink name="Ver los proyectos" />
      <h3>Formación Académica</h3>
      <p>
        Mi formación sobre programación ha sido enteramente autodidacta, estudié
        electrónica, pero por desgracia tuve la necesidad de ponerme a trabajar
        pronto. Si bien tengo intención de sacarme pronto un Ciclo Superior de
        Aplicaciones Web, lo que he aprendido hasta hoy ha sido por cuenta
        propia y tras 9 años programando en el mundo laboral. Echa un vistazo a
        mi currículum en PDF.
      </p>
      <CategoryButton route={'/docs/cv.pdf'} inside name="Currículum PDF" />
    </>
  )
}

export default HomePage
