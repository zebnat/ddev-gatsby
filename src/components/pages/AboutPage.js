import React from 'react'
import {Link} from 'gatsby'

import Header from '../../components/Header'
import Bio from '../../components/Bio'

import dani1 from '../../../data/images/dani1.jpg'
import dani2 from '../../../data/images/dani2.jpg'
import dani3 from '../../../data/images/dani3.jpg'
import dani4 from '../../../data/images/dani4.jpg'
import dani5 from '../../../data/images/dani5.jpg'
import dani6 from '../../../data/images/dani6.jpg'

import {Helmet} from 'react-helmet'

// photos in correct order of display, we need reverse to avoid unnecesary zIndex styling :)
const photos = [dani1, dani2, dani3, dani6, dani5, dani4].reverse()


// age not needed for now, remove later
//const now = new Date();
//const bornDate = new Date('1985-09-22T15:00:00Z')
//const age = Math.abs(new Date(now - bornDate).getUTCFullYear() - 1970)


const translation = {
	"en" : {
		"bioquote": "Even a boring face can be fun again with a little of css",
		"h1" : "Info about me",
		"h2" : "Who?, How?, When? Hobbies, stories and more",
		"title" : "About me",
		"intro1" : `Hey! How are you? You want to learn more about me? My name is <b>Daniel</b>, Daniel Domínguez Rubio, i'm a guy with a passion for the digital world, i like the developer world, design software, user interfaces and a lot more 'Geek' stuff. I lived in Barcelona all my life, and had different jobs on different fields, but my in last 9 years i worked as a developer.`,
		"lifestyle" : `I always have been linked to the <b>Computer World</b> and surrounded by friends who also been. Life circumstances changed my life and i had to learn everything by myself and become a self-taught developer. Now is my job and my Hobbie at the same time. I am a <b>Fullstack Developer</b> specialized into the WEB field, Javascript, Nodejs, PHP, SQL, etc. I was lucky, and i had the advantage of being in touch with the SEO world, <b>Technical SEO, semantics and proyect strategy</b> for about 7 years.`,
		"howiam" : `¿What kind of person am i?`,
		"howiam_reply" : `Well... i think that i am the classic programmer, although at the moment I don't need glasses. I consider myself <b>introverted</b> and also prefer the "engine room", playing with tools etc, dealing with clients and such like consultant or seller is not my best weapon. I have worked as a team with small team of people, usually 3-4 people, but also had to work alone for some proyects, so i know how to deal with the environment. Im my last company, i was the link between the technical team, SEO, content managers and the CEO, although it was a small company.`,
		"hobbies" : `Computers are everything to me, but i also like the <b>videogames</b> (of course), when i was young i played a lot of online and competition games, but today i prefer slow paced stuff with less addiction, the gaming scene has become a bit ugly. I'm into football, Netflix, and stuff like that. I'd like to think that "like at home nowhere", in the computer world you need to spend time with your computer, <b>learning new skills</b>. Sometimes updating yourself with reading tech books, talks, and stuff like that, other times just building side proyects with the latest shiny toolset. This works moves too fast, you can't miss a thing.`,
		"current_status": `My current situation`,
		"status_reply": `After more than 10 years hardworkıng, i have decided to slow down a little bit and spend my time into getting some official education (since in the past I could not), so time to <b>Study and earn some Academic degree</b>. If you want to learn more about how i ended working as a developer without a degree and any other qualification, just keep reading.`,
		"mini_contactme": <>Before why get into history stuff, are you interested in me? Right now, i will only be available part time, you can <Link exact to="/en/contact/">get in touch</Link> or send some email: <code>zebnat@gmail.com</code> . Also, if you prefer to contact me through <a href="https://www.linkedin.com/in/daniel-developer-seo/" rel="noopener noreferrer" target="_blank">linkedin</a> go for it, even from my <a href="https://twitter.com/zebnat" rel="noopener noreferrer" target="_blank">Twitter</a> if you want to DM me. Just remember i will be avaible part time or for remote work until i finish my Academic degree. Thanks!</>,
		"history_title": `How i turned myself a self-taught developer, story of my life`,
		"history_brief": `You will start reading a not so brief history, but is worth the time if you want to understand who am i.`,
		"child_title": `A 'geeky' childhood`,
		"child_history": `When i was 6 years old, my father bought me an <b>AMSTRAD CPC</b> since he liked all the shiny new tech.`,
		"teen_title": `My teenager World... videogames, Internet, Websites, programming`,
		"teen_1": `During my teenage years, suddenly we got the <b>"Tarifa plana", a flat rate for the Internet</b>, it was bad, it was slow, and only available after 18:00. I played around searching stuff with <b>Altavista</b> search engine and Netscape (i hated ie from the beggining xD), it was to fun to download emulators and roms to play videogames. One day, my curiosity about websites began, i investigated a lot about it. Soon i started to <b>write HTML</b> with the Windows95 notepad, building the myth websites with dark backgrounds, marquee, framesets, GIF and all the trend of that era (without CSS even existing!), we used to host the websites with Geocities, a free hosting with advertising.`,
		"teen_2": `As i practiced more as a webmaster (web developer was called like this, back in the day), <b>something drew my attention, some websites had all sort of cool effects moving all around</b>, no it wasn't GIF, it was something else, images following your mouse and even analog clocks! <b>i then knew that all that was made with Javascript</b>, it was ECMAScript 2, the dirty language made only for a few tweaks and nothing else... and right now we use it for everything! Soon i was playing around with it, and i became a <i>Script Kiddie</i>, copying and pasting JS snippets all around.`,
		"teen_3": <>I still wans't serious about learning programming until <b>i knew about websites who changed their content overtime</b> (Dynamic Websites). I had to know how that was done with HTML, and soon <b>i discovered the CGI</b>, that was some serious -shit- and the language was PHP (or Perl back in the day). Upon investigating more of PHP i understood something, this was on another level, you needed something else to work with this tech, copying and pasting didn't help here, i needed to learn programming. I started installing some popular CMS from that age, <a href="https://es.wikipedia.org/wiki/PHP-Nuke" rel="noopener noreferrer" target="_blank">PHP-NUKE</a> (you know, the Wordpress from that era). I played with it, got in touch with more PHP code, editing stuff, and learning more about programming.</>,
		"teen_4": `I was around 14 or 15, and this was when <b>i started to learn programming from the bottom</b>. I used all the tools available on the Internet, official documentation of languages, downloaded a lot of popular programming books (i was poor), i started to learn the basic stuff and then, the advanced stuff.`
	},
	"es" : {
		"bioquote": "Incluso una cara aburrida puede ser divertida con css",
		"h1" : "Cosas sobre mí",
		"h2" : "Quién, Como, Cuando... Hobbies, gustos, historia y mucho más",
		"title" : "Acerca de mí",
		"intro1" : `¡Hey! ¿Que tal? Veo que quieres saber más sobre mí. Mis padres me llamaron <b>Daniel</b> y heredé el Domínguez Rubio, me apasiona el mundo digital, la programación, diseñar software, interfaces gráficas... y un montón de cosas de frikis. Llevo toda la vida viviendo en Barcelona, he trabajado en distintos lugares, pero en mis 9 últimos años de trabajo he ejercido como programador.`,
		"lifestyle" : `Desde siempre he estado vinculado con la <b>informática</b> y rodeado de amigos que también lo están. Por circunstancias de la vida tuve que luchar y aprender de forma autodidacta hasta convertirme en programador. Ahora es tanto mi Hobbie como mi trabajo. Me desenvuelvo como <b>Desarrollador FullStack</b> especializado en WEB, Javascript, Nodejs, PHP, SQL, etc. He tenido la suerte de mantener una estrecha relación con el <b>SEO Técnico, semántico y manejando la estratégia de proyectos SEO</b> durante 7 años.`,
		"howiam" : `¿Que tipo de persona soy?`,
		"howiam_reply" : `Pues creo que soy el <b>arquetipo clásico</b> de programador de toda la vida, quizás me faltarían unas gafas para encajar al 100%. Me considero una persona <b>introvertida</b> y prefiero trabajar en la sala de máquinas, entretenido con mis herramientas, y no en la vanguardia de cara al cliente ofreciendo un trabajo más de consultor o vendedor. He trabajado en equipo en algunos proyectos, en otros los he llevado yo solo, asi que ya estoy acostumbrado a ambas cosas, me gusta tener mi espacio aunque soy buen comunicador. He sido durante años la persona que hace de enlace entre el equipo Técnico - SEO - Contenidos y la dirección, aunque en una empresa pequeña.`,
		"hobbies" : `Además de la informática, siempre he sido <b>aficionado a los videojuegos</b> (que raro ¿verdad?), de joven le daba a todo lo que fuera competitivo y online, últimamente me gustan las cosas más calmadas y menos adictivas... me gusta ver fútbol, series... tengo otras prioridades. Soy de los que piensan que como en casa, en ningún sitio, además este oficio requiere de pasar algunas horas <b>renovando tus habilidades</b> detrás de la pantalla, bien sea de forma pasiva mediante lectura de libros, documentación o charlas, como de forma activa programando proyectos con nuevas herramientas para probarlas.`,
		"current_status": `Mi situación actual`,
		"status_reply": `Después de estar en el mundo laboral más de 10 años, he decidido <b>realizar una pausa</b> y aprovechar este tiempo para hacer lo que no pude hacer de joven, <b>estudiar y obtener un título oficial de desarrollador</b>. Si quieres saber mi historia de como llegué a ser programador sin formación y mientras sobrevivía en trabajos complicados, no dudes en continuar leyendo.`,
		"mini_contactme": <>Antes de comenzar con la historia, si estás interesado en mi a tiempo parcial puedes utilizar el <Link exact to="/contacto/">formulario de contacto</Link> o mi email: <code>zebnat@gmail.com</code> . También puedes contactarme desde <a href="https://www.linkedin.com/in/daniel-developer-seo/" rel="noopener noreferrer" target="_blank">linkedin</a>, o incluso desde <a href="https://twitter.com/zebnat" rel="noopener noreferrer" target="_blank">Twitter</a> si así lo prefieres (por privado). Únicamente debes saber que mi horario mientras esté estudiando será reducido, por lo que tendríamos que llegar a algún acuerdo de trabajo remoto desde casa o media jornada, según el horario que mantenga.</>,
		"history_title": `¿Como acabé como desarrollador siendo autodidacta? Mi historia`,
		"history_brief": `A continuación vas a leer sobre mi historia, asi que puede ser un poco pesado pero merece la pena si quieres saber más.`,
		"child_title": `Una infancia un poco 'geek'`,
		"child_history": `A los 6 años de edad, mi padre me compró un <b>AMSTRAD CPC</b> ya que a él le gustaba comprar todo tipo de tecnología moderna. Mientras la mayoría de niños salían a la calle a jugar al futbol (en esa época todavía no se llevaba ni la nintendo), yo disfrutaba en casa con el ordenador. Aparte de utilizarlo para jugar, me llamo la atención un libro bastante gordo que traía sobre el lenguaje de programación <b>BASIC</b> (si, los ordenadores de antes te venían con manuales para aprender a programarlos). Un par de años después, ya me dedicaba a copiar el código fuente de los ejemplos del libro para ver lo que ocurría por la pantalla, <b>esos fueron mis inicios en el mundo de la programación</b>.`,
		"teen_title": `La adolescencia... videojuegos, Internet, webs, programación`,
		"teen_1": `En mi época adolescente, llegó como anillo al dedo en España <b>la tarifa plana de internet</b>, con el dichoso <b>modem de 56k</b> con el cual solo podías conectarte a partir de las 18:00. Cada vez que me conectaba, generalmente abría el buscador <b>Altavista</b> con Netscape y me descargaba emuladores y roms para jugar. Entre vicio y vicio, me picó el gusanillo con las páginas web, asi que me puse a investigar sobre ello. En poco tiempo ya estaba <b>escribiendo HTML</b> en el bloc de notas del Windows 95, creando las míticas webs de fondo negro con marquesinas, frames, GIF, y todo el paquete completo de la época (Aún no existia el CSS), las alojábamos en hostings gratuitos tipo Geocities donde te metían publicidad hasta aburrir.`,
		"teen_2": `A medida que practicaba más como webmaster (llamaban así al desarrollador web), <b>llamaron mi atención las páginas web que tenían todo tipo de efectos</b> y cosas moviendose por pantalla, no eran GIF's, era algo extraño, como imágenes persiguiendo a tu ratón o ¡relojes analógicos que se movían! allí es cuando tuve <b>contacto por primera vez con Javascript</b>, nada menos que la versión ECMAScript 2, el terrorífico e intimidante lenguaje de programación que es hoy por hoy ¡el más utilizado en el mundo entero!. No pasó demasiado tiempo hasta convertirme en el típico <i>Script Kiddie</i>, copiando y editando snippets de javascript de otros sitios.`,
		"teen_3": <>Todavía no me había tomado en serio el tema de aprender a programar, hasta que <b>descubrí páginas web que cambiaban su contenido</b> (Páginas dinámicas). Tenía que saber como era posible conseguir que el HTML que hiciera esto, y fué cuando <b>descubrí los CGI</b>, principalmente todo lo que se podía hacer con <b>PHP</b>. Al investigar más sobre PHP me di cuenta que esto era otro nivel, ya no hablabamos de copiar y pegar scripts, esto era serio, y tenía que aprender de alguna manera. Comencé instalando un CMS popular en la época, <a href="https://es.wikipedia.org/wiki/PHP-Nuke" rel="noopener noreferrer" target="_blank">PHP-NUKE</a> (el wordpress de la época). Me fuí buscando la vida para ir editando el código PHP del CMS y poco a poco fuí aprendiendo algo más.</>,
		"teen_4": `Tendría unos 14 o 15 años, y esta fué la época en que <b>me puse seriamente a aprender a programar</b>. Utilizando todo lo que daba de si Internet, desde la documentación oficial de los lenguajes, hasta libros sobre programación en PDF, comencé a estudiar bien las bases de la programación, y luego cosas mas avanzadas.`
	}
}

const AboutPage = (props) => (
	<>
		<Helmet>
			<title>{translation[props.lang].title}</title> 
		</Helmet>

		<Header h1={translation[props.lang].h1} h2={translation[props.lang].h2}/>
		<Bio photos={photos} quote={'“'+translation[props.lang].bioquote+'”'} />
		<p dangerouslySetInnerHTML={{__html: 
      translation[props.lang].intro1}}></p>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].lifestyle}}></p>
		<h3 dangerouslySetInnerHTML={{
			__html:	translation[props.lang].howiam}}></h3>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].howiam_reply}}></p>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].hobbies}}></p>
		<h3 dangerouslySetInnerHTML={{
			__html:	translation[props.lang].current_status}}></h3>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].status_reply}}></p>
		<p>{translation[props.lang].mini_contactme}</p>
		<h3 dangerouslySetInnerHTML={{
			__html:	translation[props.lang].history_title}}></h3>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].history_brief}}></p>
		<h4 dangerouslySetInnerHTML={{
			__html:	translation[props.lang].child_title}}></h4>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].child_history}}></p>
		<h4 dangerouslySetInnerHTML={{
			__html:	translation[props.lang].teen_title}}></h4>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].teen_1}}></p>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].teen_2}}></p>
		<p>{translation[props.lang].teen_3}</p>
		<p dangerouslySetInnerHTML={{
			__html:	translation[props.lang].teen_4}}></p>
		<p>Se acercaba el bachillerato asi que me <b>decidí que estudiaría programación</b>, mi destino sería el Bachillerato Tecnológico, con la idea de hacer un Ciclo Superior de programación. Lo que no sabía por aquel entonces, es que el destino me tenía preparada una jugarreta, que me impediría lograr mi sueño.</p>
		<h4 css={{textTransform: 'uppercase'}}>Las jugarretas del destino</h4>
		<p>¡Ay el destino! cuando tu piensas que tu vida va por aquí... %$!#@!! ¡pues por allí! Estaba finalizando bachillerato, realizando una previa del trabajo de investigación que haríamos el año que viene, programé un blog casero con php sacando buena nota y entonces ¡BAM!. Mi familia, por desgracia, no pasaba la mejor época. Mi madre pilló una depresión y acabó de baja laboral, asi que <b>me tocó ayudar en el negocio familiar</b>, no tuvieron en cuenta que el bachillerato no era un camino de rositas, y los fines de semana me tocaba trabajar, sin apenas tiempo ni ganas de estudiar. Esto <b>me generó problemas en el curso</b> y acabé suspendiendo las 3 asignaturas menos importantes en un Bachillerato tecnológico, pero que igual contaban para pasar de curso, las lenguas.</p>
		<p>En vista de que al año siguiente iba a tener que continuar trabajando en el negocio familiar, <b>decidí matricularme para un Ciclo de grado medio de tarde</b> para compatibilizar horarios... lamentablemente no existían ciclos de informática como ahora, asi que me decanté por la electrónica, que era lo más parecido. Todo iba más o menos bien, se me daba bien la electrónica, tanto que me ofrecieron hacer las prácticas de empresa el primer año. Pero terminando el primer año, mi padre dió la noticia, no quería seguir asi, decidió divorciarse, se marchó a otra provincia, de manera que tuve que dejar de estudiar, trabajar y ayudar a pagar la hipoteca, mi madre aún seguía enferma y con la baja no se podía pagar todo. Se que suena trágico, pero así son las cosas.</p>
		<p>Trabajé como dependiente, de peón en la construcción (cargando sacos de runa mayormente), como carpintero de alumínio y cristalero, en varias fábricas... vamos, los clásicos trabajos de alguien sin estudios, mas o menos durante 6 años. A pesar que <b>fué muy duro, no me rendí</b>, en el tiempo libre que me quedaba, continué practicando cosas sobre programación WEB, aprendí a maquetar con CSS1 y CSS2.1, echábamos la tarde con mi mejor amigo programando interfaces con visual basic 6, incluso me dio por desinstalar windows para aprender Linux, y Debian Lenny fué mi sistema desktop durante 3 o 4 años.</p>
		<p>Mi esfuerzo mereció la pena, a los 24 años tuve la suerte de que <b>me ofrecieron mi primer empleo en el mundo de la programación</b>. No dudé ni un momento en dejar el trabajo donde estaba, una fábrica donde trabajaba dando soporte a un <b>Robot ABB</b>, por un trabajo peor pagado pero que era mi sueño. <a href="https://www.linkedin.com/in/sergio-fernandez-giribets-25805717/">Sergio Fernández</a>, el CEO de Panaworld S.L decidió darme una oportunidad a media jornada en su empresa, necesitaban alguien Junior, para apoyar un poco y con ganas de aprender. La empresa tenía un producto, una página web con tráfico en 8 países diferentes. Era una de las páginas web con más visitas en Italia, con más de 120,000 visitas al día.</p>
		<h4 css={{textTransform: 'uppercase'}}>Como fué trabajar para una empresa como programador autodidacta</h4>
		<p>Al principio en la empresa (y como es normal), me daban un poco <b>la faena que nadie quería hacer</b>, aprovechando que sabía maquetar con las últimas tecnologías de la época (<b>CSS</b>), me tocó hacer esta faena durante unos meses. Creedme, maquetar con soporte para Internet Explorer 6 no era tan fácil como ahora, por aquel entonces (2009) no existía ni Flexbox, ni frameworks como Bootstrap, ni cssgrid ni ná de ná. Te buscabas la vida con CSS puro tirando de <code>float: left;</code><code>display: table</code> y similares, si funcionaba en IE6 ese día te ibas contento a casa.</p>
		<p>En solo dos meses <b>me hicieron contrato indefinido a jornada completa</b>, les demostré a mis compañeros que tenía el mismo nivel que ellos, recien salidos de FP, y les ayudé con algunos proyectos. Mejoré el rendimiento del sistema que utilizaban para generar páginas estáticas con PHP, no estaban utilizando índices en MySQL y tardaban mucho las consultas, algo que yo aprendí con buenos libros de MySQL.</p>
		<p>Tras llevar ya un año en la empresa, me dieron la <b>oportunidad de crear yo solo el proyecto de futuro</b>, era un proyecto de 0, no había riesgo de romper el negocio, al menos, hasta que reemplazara al producto actual. Tenía que ir programando poco a poco lo que sería el sustituto del producto actual de la empresa, reactualizandolo con un diseño más profesional y tecnología web 2.0 (AJAX, Login de Usuarios, Comunidad, etc). Tras terminarlo, reemplazó a las webs antiguas en los países que menos visitas generaban, en solo un año <b>mejoró notablemente el SEO y las estadísticas de uso</b>, finalmente dimos el paso y el proyecto sustituyó las webs de todos los paises, hicimos trabajo de SEO y la empresa aguantó 8 largos años. Este proyecto fué muy interesante, tuve que  diseñar las bases de datos para que fueran escalables, crearlas, programar todo el backend, todo el frontend, y además llevar la estratégia SEO. La página española alcanzó hasta 70 millones de páginas vistas en un mes...</p>
		<p>No entraré en detalles aquí sobre los proyectos que hice, ya que fueron muchos, podeis encontrar esa información en la <Link exact to="/proyectos/">sección proyectos</Link>. Pero a modo de resumen, estuve en PANAWORLD casi 9 años, realizando tareas de maquetación, programación, backend PHP (OOP), frontend Javascript, librerías como jQuery y otras que fueron saliendo, además estaba a cargo de todos los temas SEO, decidí hacerme cargo de la optimización, tanto técnica como semántica asi que descubrí muchas cositas de SEO "whitehat" que aún funcionan hoy en día.</p>
	</>
)
//css={{color: '#0e0e0e', textAlign: 'center', display: 'block', border: '2px solid black', padding: '4px', margin: '2rem auto', maxWidth: 300}}
export default AboutPage
