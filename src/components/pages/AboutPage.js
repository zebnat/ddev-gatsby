import React from 'react'
import {Link} from 'gatsby'

import Layout from '../../components/layout'
import Header from '../../components/Header'
import Bio from '../../components/Bio'

import dani1 from '../../../data/images/dani1.jpg'
import dani2 from '../../../data/images/dani2.jpg'
import dani3 from '../../../data/images/dani3.jpg'
import dani4 from '../../../data/images/dani4.jpg'
import dani5 from '../../../data/images/dani5.jpg'
import dani6 from '../../../data/images/dani6.jpg'
import eresmas from '../../../data/images/tarifa-plana-56k.jpg'
import {Helmet} from 'react-helmet'

// photos in correct order of display, we need reverse to void unnecesary zIndex styling :)
const photos = [dani1, dani2, dani3, dani6, dani5, dani4].reverse()

const now = new Date();
const bornDate = new Date('1985-09-22T15:00:00Z')
const age = Math.abs(new Date(now - bornDate).getUTCFullYear() - 1970)

const hrefLangs = [
	{
		url: "/about-me/",
		lang: 'en'
	},
	{
		url: "/acerca-de-mi/",
		lang: 'es'
	}
]

const translation = {
	"en" : {
		"h1" : "About me",
		"h2" : "What i do, How all started",
		"title" : "About me",
		"intro1" : `¡Hello there! Here you can learn more about me, my name is <b>Daniel Domínguez Rubio</b>, i'm a %age% years old guy, so yeah, i am one of those Millenial in love with the digital world.`
	},
	"es" : {
		"h1" : "Cosas sobre mí",
		"h2" : "A que me dedico, como llegué hasta aquí",
		"title" : "Acerca de mí",
		"intro1" : `¡Hola! Te daré más detalles sobre mí, me llamo <b>Daniel Domínguez Rubio</b>, soy un chico de <b>%age% años</b> de edad, o sea que sí, soy uno de esos Milenial que adoran vivir del mundo digital.`
	}
}

const AboutPage = (props) => (
  <Layout hrefLangs={hrefLangs} currentLang={props.lang}>
		<Helmet>
			<title>{translation[props.lang].title}</title> 
		</Helmet>

		<Header h1={translation[props.lang].h1} h2={translation[props.lang].h2}/>
		<Bio photos={photos} />
		<p dangerouslySetInnerHTML={{__html: 
        translation[props.lang].intro1.replace(["%age%"], [age])}}></p>
		<p>Nací en un día lluvioso del año 1985 justo a las puertas de la entrada de Otoño. Vi la luz del sol por primera vez en una ciudad a las afueras de <b>Barcelona</b>, y desde entonces sigo viviendo por aquí.</p>
		<p>Como buen signo Virgo, me considero un poco <b>perfeccionista</b> y me gusta prestar mucha <b>atención a los detalles</b>, aunque si se puede alcanzar la perfección de forma práctica y sencilla, mucho mejor. Desde siempre se me han dado mucho mejor las cosas que tienen que ver con números, cálculos, resolución de problemas, puzzles, etc, y no tan bien las letras, aunque se hace lo que se puede.</p>
		<h3>Como en mi juventud me hice aficionado a programar, y hasta hoy</h3>
		<p>A continuación vas a leer sobre mi historia, es un poco largo pero merece la pena si quieres saber como tuve contacto con la informática y la programación.</p>
		<p>A los 6 años de edad mi padre me compró <b>AMSTRAD CPC</b>, con la intención de jugar él también a los "marcianitos" xD, aparte de utilizarlo para jugar, me llamo la atención el libro que traía sobre <b>BASIC</b> (si, los ordenadores de antes te venían con manuales para aprender a programarlos). Un par de años después, sobre los 8 años, ya me dedicaba a copiar el código fuente de los ejemplos del libro para ver lo que ocurría por la pantalla, <b>esos fueron mis inicios en el mundo de la programación</b>.</p>
		<p>En mi época adolescente, llegó de la mano <b>la tarifa plana de internet en España</b>, con el dichoso <b>modem de 56k</b> con el cual solo podías conectarte a partir de las 18:00 (sino, tus padres lo flipaban en la factura). Cada vez que me conectaba, aparte de ponerme a buscar de todo con el buscador <b>Altavista</b> y descargarme sobretodo emuladores y roms para viciar, me picó el gusanillo con las páginas web, y en seguida me puse a investigar sobre ello. En poco tiempo ya estaba <b>escribiendo archivos HTML</b> en el bloc de notas del Windows 95, creando las míticas webs de fondo negro con marquesinas, frames, GIF, texto amarillo y todo el paquete completo de la época (no existía CSS), las alojábamos en hostings gratuitos que te metían publicidad en un frame.</p>
		<div css={{textAlign: 'center'}}>
			<a href={eresmas}>
				<div>Anuncio de la tarifa plana eresMas en 1998</div>
				<img src={eresmas} alt="Tarifa plana eresMas de retevisión"/>
			</a>
		</div>
		<p>Navegando felizmente con Netscape, un buen día <b>llamaron mi atención las páginas web que tenían todo tipo de efectos</b> y cosas que se movían y no eran GIF's, como imágenes persiguiendo a tu ratón o ¡relojes analógicos que se movían! allí es cuando tuve <b>contacto por primera vez con Javascript</b>, nada menos que la versión ECMAScript 2, el terrorífico e intimidante lenguaje de programación que es hoy por hoy el más utilizado en el mundo entero, nadie hubiera apostado por él xD. No pasó demasiado tiempo hasta convertirme en el típico <i>Script Kiddie</i>, copiando y editando snippets de javascript de otros sitios.</p>
		<p>Todavía no me había tomado del todo en serio el aprender a programar, hasta que <b>descubrí páginas web que cambiaban su contenido</b> periodicamente o cuando iniciabas sesión (Páginas dinámicas). Tenía que saber como era posible conseguir que el HTML que hiciera esto, y fué cuando <b>descubrí los CGI</b>, principalmente todo lo que se podía hacer con <b>PHP</b>. Al investigar más sobre PHP me di cuenta que esto era otro nivel, ya no hablabamos de copiar y pegar scripts, esto era serio, y tenía que aprender de alguna manera.</p>
		<p>Tendría unos 14 o 15 años, y esta fué la época que <b>me puse seriamente a aprender a programar</b>, utilizando todo lo que daba de si Internet, desde la documentación oficial de PHP, hasta descargar libros sobre programación en PDF, pasando por todo tipo de páginas que te enseñaban las bases de la programación.</p>
		<p>Estaba cursando 4 de ESO, y aquí <b>decidí que estudiaría Programación</b> y mi destino sería el Bachillerato Tecnológico, para acabar en un Ciclo Superior... lo que no sabía por aquel entonces, es que el destino me tenía preparada una jugarreta, que me impediría lograr mi sueño vocacional.</p>
		<p>En primero de bachillerato hice una especie de DEMO del <b>Trabajo de investigación</b>, que te preparaba para el que se debía realizar en el 2do curso, <b>programé un -cutre- blog con PHP y MySQL</b>, a la antigua usanza (nada de MVC ni frameworks como hoy en día), tuve que programar PHP, algo de Javascript y HTML, además de documentación. <b>El profesor valoró el trabajo con un 10</b> (he de decir que era profesor de electrónica y jugaba con ventaja), estaba orgulloso de mi mismo, de lo que había aprendido de forma autodidacta, y sabía que mi futuro pasaba por la programación.</p>
		<h4 css={{textTransform: 'uppercase'}}>Jugarretas del destino</h4>
		<p>Cursaba todavía 1 de Bachillerato, mi familia no pasaba la mejor época, mi madre fué diagnosticada con depresión asi que <b>me tocó ayudar en el negocio familiar</b>, no hubo diálogo ni negociación, no tuvieron en cuenta mis sueños ni mis estudios, simplemente tuve que ayudar trabajando todos los fines de semana, aún recuerdo la noche del viernes tener que levantarme a las 3 de la mañana para ir a trabajar con mi padre. Esto <b>me generó problemas en el curso</b> ya que bachillerato no es un camino de rositas, y acabé suspendiendo las 3 asignaturas de letras, en un Bachillerato tecnológico (y con 3 no pasabas...). En vista de que iba a tener que continuar trabajando con mi padre entre semana también, <b>decidí matricularme para un Ciclo de grado medio de tarde</b>, para compatibilizar horarios, no existían ciclos de informática como ahora, asi que me decanté por la electrónica, que era lo más parecido.</p>
		<p>Todo iba más o menos bien, ya que me resultó muy fácil ese Ciclo Formativo de electrónica, era el más adelantado de mi curso, tanto que me ofrecieron hacer las prácticas de empresa en el primer año. Pero, <b>de nuevo el destino me tenía algo preparado</b>... mi padre, decidió divorciarse, se fué a otra provincia, de manera que mi madre, estando de baja por depresión muy grave, tenía que cuidar de mí y de mi hermana pequeña, además de pagar la hipoteca ella sola.</p>
		<p>Al final, tuve que dejar los estudios y <b>ponerme a trabajar</b>. Desde los 18 (aunque ya trabajaba antes) he trabajado de dependiente, de peón en la construcción, en un taller de alumínio y cristalería, en fábricas... vamos, los clásicos trabajos de alguien sin estudios. A pesar que <b>fué muy duro, no me rendí,</b> en el tiempo libre que tenía, continué practicando cosas sobre programación WEB, aprendí a maquetar con CSS1 y CSS2.1, echábamos la tarde con mi mejor amigo programando interfaces con visual basic 6, incluso me dió por desinstalarme Windows, para aprender Linux, y fué mi sistema durante 3 o 4 años (y que jodio era).</p>
		<p>Finalmente, un buen día <b>me ofrecieron mi primer empleo en el mundo de la programación</b>. No dudé ni un momento en dejar el trabajo donde estaba, una fábrica de cerámica donde acabé trabajando dando soporte a un <b>Robot ABB</b>, al ser el único espabilao que entendía la interfaz del terminal para programarlo, me enseñaron los técnicos a programarlo y era el encargado de hacerlo. <a href="https://www.linkedin.com/in/sergio-fernandez-giribets-25805717/">Sergio Fernández</a>, CEO de Panaworld S.L decidió darme una oportunidad a media jornada en su empresa, creo que no se fiaba mucho al no tener títulos, y por eso comencé a media jornada. La empresa tenía un producto, una página web que tenía su versión en 8 idiomas diferentes. Era una de las páginas web con más visitas cuya versión Italiana tuvo éxito en la época de la burbuja .com con más de 120,000 visitas al dia.</p>
		<h4 css={{textTransform: 'uppercase'}}>Como fué trabajar para una empresa como programador y sin estudios</h4>
		<p>Al principio en la empresa (y como es normal), me daban un poco <b>la faena que nadie quería hacer</b>, aprovechando que sabía maquetar con las últimas tecnologías de la época (<b>CSS</b>), me tocó hacer esta faena durante unos meses. Creedme, maquetar con soporte para Internet Explorer 6 no era "moco de pavo", por aquel entonces (2009) no existía ni Flexbox, ni frameworks como Bootstrap, ni cssgrid ni ná de ná. Te buscabas la vida con CSS puro tirando de <code>float: left;</code><code>display: table</code> y similares, si funcionaba en IE6 ese día te ibas contento a casa.</p>
		<p>En solo dos meses <b>me hicieron contrato indefinido a jornada completa</b>, les demostré a mis compañeros que también sabía PHP, y les ayudé con algunos asuntos de proyectos internos. Mejoré el rendimiento del sistema que utilizaban para generar páginas estáticas con PHP, ya que no estaban utilizando índices en MySQL y tardaban mucho las consultas (al parecer se aprende más con libros que en un FP Superior en España).</p>
		<p>Después de un año en la empresa, me dieron la <b>oportunidad de crear el proyecto de futuro</b>, como era un proyecto de 0 no había riesgo de romper el negocio. Tenía que ir haciendo poco a poco lo que sería el sustituto del producto actual de la empresa, reactualizandolo con un diseño profesional y tecnología web 2.0 (AJAX, Usuarios, etc) me puse manos a la obra hasta que vió la luz, <b>mejoró notablemente el SEO y el uso de la página</b> por parte de los usuarios, y nos acabó dando de comer durante 8 años más. <b>Tuve que  diseñar las bases de datos, crearlas, programar todo el backend y todo el frontend y llevar la estratégia SEO</b>. La página tenía un sistema de usuarios, comunidad interna, podían comentar, etc.</p>
		<p>No quiero tampoco dar todos los detalles aquí sobre los proyectos que hice en la empresa ya que fueron muchos, podeis encontrar esa información en la <Link exact to="/proyectos/">sección proyectos</Link>. Pero resumiendo, estuve en PANAWORLD 9 años, realizando tareas de maquetación, programación, backend, frontend, PHP OOP, Javascript, uso de librerías como jQuery y otras más modernillas tipo React/Angular, además estaba a cargo de todos los temas SEO, me atrajo el tema y decidí hacerme cargo de la optimización, tanto técnica como semántica, desubrí muchas cositas de SEO "whitehat" que aún funcionan hoy en día.</p>
		<p>Si has leído hasta aquí te doy las gracias, has aguantado toda la chapa, pero al menos ahora sabes quien soy realmente.</p>
		<h3>Más cositas: Hobbies, Personalidad, Preferencias</h3>
		<p>Creo que soy el arquetipo clásico del programador de toda la vida, <b>soy introvertido</b>, me gusta más la sala de máquinas que dar la cara frente a clientes o cosas así, aunque eso no significa que cuando hay que planificar las cosas, tengamos comunicación.</p>
		<p>Desde niño he tenido <b>afición por los videojuegos</b> (venga, dime un programador que no la tenga), aunque últimamente no se si es por la edad o por que la industria ha desmejorado mucho, pero solo juego a algunos nicho, con historia, o de sagas consolidadas. Me mantengo al margen de toda esta moda de juegos online gratuitos tipo League of Legends o Fortnite, me parecen una pérdida de tiempo notable.</p>
		<p>Soy más de sofá y peli que de fiesta, esta la dejo para eventos especiales. A veces me da por ver series, tanto las "reales" como de animación manga (Anime), o películas.</p>
		<p>Dedico bastante tiempo al reciclaje, aprender cosas nuevas de lo que se cuece en el mundo de la programación, no exclusivamente al entorno WEB, soy bastante curioso een ese sentido.</p>
		<h3>Donde puedes encontrarme</h3>
		<p>En la actualidad, he decidido retomar los estudios y cursar un Ciclo Superior de Desarrollo de Aplicaciones Web, para no ser siempre el segundo plato en procesos de selección al no tener una titulación oficial. También puede que aprenda algo nuevo, aunque es realmente dificil superar lo que se aprende con 9 años de experiencia real.</p>
		<p>Si tienes interés en ofrecerme un contrato de trabajo en estos momentos deberíamos hablarlo, para hacerlo compatible con mis estudios, a continuación te dejo vias de contacto</p>
		
		<div css={{textAlign: 'center', display: 'block', border: '2px solid black', margin: '2rem auto', maxWidth: '300px','>a': {display: 'block', padding: '10px', width: '100%', color: '#0e0e0e'}}}><Link exact to="/contacto/">Formulario de contacto</Link></div>
		<p>Correo electrónico: zebnat@gmail.com</p>
		<p>Linkedin: <a href="https://www.linkedin.com/in/daniel-developer-seo/">https://www.linkedin.com/in/daniel-developer-seo/</a></p>
		<p>Twitter: <a href="https://twitter.com/zebnat">https://twitter.com/zebnat</a></p>
  </Layout>
)
//css={{color: '#0e0e0e', textAlign: 'center', display: 'block', border: '2px solid black', padding: '4px', margin: '2rem auto', maxWidth: 300}}
export default AboutPage
