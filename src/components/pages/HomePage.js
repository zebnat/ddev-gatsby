import React from 'react'
import Header from '../../components/Header'
import {Helmet} from 'react-helmet'
import Social from '../Social'
import {Link} from 'gatsby'
import {linker, menuNodeFinder} from '../../utils/links'
import { link } from 'glamor';


const translation = {
	"en" : {
		"h1" : "Fullstack Developer from Barcelona",
		"h2" : "Developer fully capable for the web needs, included SEO",
		"title" : "Fullstack developer & SEO (Barcelona) - Daniel Domínguez",
		"quote" : `Passionate about websites since i was a kid and grown up working for the Internet environment`
	},
	"es" : {
		"h1" : "Fullstack Developer en Barcelona",
		"h2" : "Desarrollador que domina todos los aspectos de la web, incluído SEO",
		"title" : "Programador Fullstack y SEO (Barcelona) - Daniel Domínguez",
		"quote" : `Apasionado de las webs desde niño, he crecido profesionalmente trabajando para el mundo de Internet`
	}
}

const CategoryButton = (props) => {
	const linkInside = {
		marginLeft: 15
	}

	const styling = {
		fontFamily: 'Oswald, Helvetica, sans-serif',
		fontSize: '110%',
		color: '#1064d0',
		border: '1px solid #1064d0',
		padding: '5px 10px',
		display: 'inline-block',
		borderRadius: '3px',
		margin: '15px 0',
		cursor: 'pointer',
		':hover' : {
			textDecoration: 'none',
			background: '#2d7bde',
			color: '#fff'
		},
		':before' : {
			content: '►',
			marginRight: 5
		}
	}
	return (
	<div css={props.inside ? linkInside : null}>
		{props.gatsbyLink == true ? <Link css={styling} to={props.route}>{props.name}</Link> : <a css={styling} target="_blank" href={props.route}>{props.name}</a>}
	</div>
	)
};

const HomePage = (props) => {
	const defaultLan = props.data.site.siteMetadata.defaultLang;
	const aboutEl = menuNodeFinder(props.data.allMenu, 'about');
	const aboutLink = linker(defaultLan, aboutEl.lang, aboutEl.route);
	const skillsEl = menuNodeFinder(props.data.allMenu, 'tech');
	const skillsLink = linker(defaultLan, skillsEl.lang, skillsEl.route);
	
	return (
	<>
		<Helmet>
			<html lang={props.lang} />
			<title>{translation[props.lang].title}</title>
		</Helmet>
		<div css={{
							'@media(max-height: 500px)': {
								'@media(max-width: 420px)': {
									paddingTop: '0px'
								},
								'@media(min-width: 421px)': {
									paddingTop: '0px'
								}
							},
							'@media(min-height: 501px)': {
								'@media(max-width: 420px)': {
									paddingTop: '100px'
								},
								'@media(min-width: 421px)': {
									paddingTop: '25px'
								}
							}
							}}>
			<Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} quote={translation[props.lang].quote}/>
		</div>
		<h3>Un breve resumen</h3>
		<p>Soy un programador autodidacta que conoce en profundidad todo lo que envuelve la programación web, he utilizado <b>PHP</b> para el servidor, programación cliente <b>javascript</b>, maquetación CSS responsive, base de datos <b>MySql</b>, despliegue de sitios web en servidores privados Linux mediante SSH, etc. Ya llevo bastantes años en el gremio, soy lo que se conoce como FullStack, puedo hacer páginas estáticas o dinámicas por mi mismo. Si quieres saber cosas personales y más detalles sobre mí amplía información.</p>
		<CategoryButton route={aboutLink} inside gatsbyLink name="Conoce más sobre mí" />
		<h3>Mis skills</h3>
		<p>A parte de las herramientas básicas para crear webs estáticas y dinámicas, ultimamente estoy especializandome en programación Frontend utilizando herramientas avanzadas como <b>ReactJS</b> y librerías derivadas bajo el entorno <b>NodeJS</b> ya que me gusta bastante este entorno. Esta misma web es prueba de ello, ya que se ha programado utilizando GatsbyJS, que permite hacer páginas estáticas que se convierten en Progressive Web App basándose en React. Si quieres conocer con más exactitud el espectro y dominio de habilidades técnicas, debido a que son muchas, no dudes en ampliar la información en el siguiente enlace.</p>
		<CategoryButton route={skillsLink} inside gatsbyLink name="Habilidades Técnicas" />
		<h3>Trabajos y proyectos</h3>
		<p>He trabajado profesionalmente durante casi 9 años para la misma empresa Panaworld S.L, una startup de financiación propia que creó un buen producto en la burbuja .com, una red de sitios web sobre juegos de navegador con soporte a múltiples idiomas. A lo largo de los 9 años yo y el equipo fuimos mejorando todo tipo de aspectos del producto para adquirir la mayor presencia SEO y usuarios únicos posibles, usabilidad, rendimiento, features sociales, diseño, etc. Si quieres conocer con detalle todos algunos de los trabajos que realicé no dudes entra en la sección correspondiente.</p>
		<CategoryButton route={'#'} inside gatsbyLink name="Ver los proyectos" />
		<h3>Formación Académica</h3>
		<p>Mi formación sobre programación ha sido enteramente autodidacta, estudié electrónica un año pero por desgracia tuve la necesidad de ponerme a trabajar pronto. Si bien estoy en estos momentos en proceso de obtención de un Ciclo Superior de Aplicaciones Web, lo que he aprendido ha sido por cuenta propia y trabajando 9 años en una empresa. Para un vistazo rápido, lo mejor será que eches un vistazo a mi currículum en PDF.</p>
		<CategoryButton route={'/docs/cv.pdf'} inside name="Currículum PDF" />
		<h3>Contactar</h3>
		<div css={{border: '1px solid black', padding: '8px', margin: '8px 0', borderRadius: '3px'}}><b>!!! Atención:</b> Mi disponibilidad para trabajar en estos momentos es parcial de tarde, estoy cursando unos estudios por la mañana. Gracias.</div>
		<Social />
	</>
)}

export default HomePage