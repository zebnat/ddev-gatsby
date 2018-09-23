import React from 'react'
import { Link } from 'gatsby'

const translation = {
  en: {
    bioquote: 'Boring face improved with a little of css',
    h1: 'Info about me',
    h2: 'Who am i, why i turned into a developer, hobbies and more',
    title: 'About me',
    intro1: `Hey! How are you? My name is <b>Daniel</b>, Daniel Domínguez Rubio, i'm a guy with a passion for the digital world, i like the to create things, designing software, user interfaces, improving ux for SEO, and a lot more 'geeky' stuff. I lived in <b>Barcelona</b> all my life and had different jobs on different fields, but in my last 9 years i had the pleasure to work as a developer.`,
    lifestyle: `I always have been linked to the <b>Computer World</b> somehow and also surrounded by friends who also been. Life circumstances changed my life and i had to learn everything by myself, becoming a self-taught developer. Now, is my job and my Hobbie at the same time. I consider myself a <b>Fullstack Developer</b> specialized into the WEB field, Javascript, Nodejs, PHP, SQL, etc. I was also lucky and i had the advantage of being in touch with the SEO business, <b>Technical SEO, semantics and proyect strategy</b> for about 7 years.`,
    howiam: `¿What kind of person am i?`,
    howiam_reply: `Well... i think that i am the <b>classic programmer</b>. I consider myself <b>introverted</b> and also prefer the "engine room", playing with tools, fixing stuff, etc. Dealing with clients like a consultant or a seller would do is not my best. I had worked as a team with small team of people, usually 3-4 people, but also had to work alone for some proyects, i know how to deal with the environment. Im my last company, i was the link between the technical team, SEO, content managers and the CEO, it was for a young startup, many things to do!.`,
    hobbies: `Computers are everything to me, but i also like other things like <b>videogames</b> (of course), when i was young i played a lot of online and competition games, but today i prefer slow paced stuff, the gaming scene has become a bit ugly. I enjoy watching football, Netflix, and stuff like that. I'd like to think that "like at home nowhere", in the computer world you need to spend time with your computer learning new skills and playing with the new stuff. Sometimes is worth updating yourself by reading tech books, talks, or just building side proyects with the latest shiny toolset. This field moves too fast, you can't miss a thing.`,
    history_title: `How i turned into a self-taught developer, story of my life`,
    history_brief: `Beware that you will start reading a long history, i tried to be brief but still... is worth the time.`,
    child_title: `A 'geeky' childhood`,
    child_history: `When i was 6 years old, my father bought me an <b>AMSTRAD CPC</b> since he was a freak and liked all the new technology. At least in Spain, the vast mayority of kids in that age watched kid TV shows or played football in their spare time, Nintendo was not even around. I was with the computer all day, used my Amstrad CPC mainly to play games but i also enjoyed reading the BASIC book it brought with him. When i turned 8 or 9 years old i was already writting BASIC code (or copy pasting it), and running it, it was plain simple stuff but it was amazing, i will always remember the classic "guess your number" program.`,
    teen_title: `My teenager World... videogames, Internet, Websites, programming`,
    teen_1: `During my teenage years, suddenly we got the <b>"Tarifa plana", a flat rate for the Internet</b>, it was bad, it was slow, and only available after 18:00 but it was gooood. I played around in my spare time searching for a lot of stuff with <b>Altavista</b>, using Netscape (i hated ie from the beggining xD), it was to fun to download SNES emulators and roms to play videogames. One day, my curiosity about websites began, i investigated a lot about it. Soon i started to <b>write HTML</b> markup language with the notepad, building the old fashioned websites with dark backgrounds, marquee, framesets, GIF and all the trend of that era (without CSS even existing!), we used to host the websites with Geocities, a free hosting with advertising.`,
    teen_2: `As i practiced more as a webmaster (web developer was called like this, back in the day), <b>something drew my attention</b>, some websites had all sort of cool effects moving all around, no it wasn't GIF, it was something else, images following your mouse and even analog clocks! <b>After a while i learned that all of that was made with Javascript</b>, it was ECMAScript 2, the dirty language made only for a few tweaks and nothing else... and right now we use it for everything! Soon i was playing around with it, and i became a <i>Script Kiddie</i>, copying and pasting JS snippets all around.`,
    teen_3: (
      <>
        I still was not taking it seriously, you know, learning programming,
        until <b>i knew about websites that changed their content overtime</b>{' '}
        (Dynamic Websites). I had to know how that was done with HTML, and soon{' '}
        <b>i discovered the CGI</b>, that was so cool and the language was PHP
        (or Perl back in the day). Upon investigating more of PHP i understood
        something, this was on another level, you needed something else to work
        with this tech, copying and pasting didn't help here, i needed to learn
        programming. I started installing some popular CMS from that age,{' '}
        <a
          href="https://es.wikipedia.org/wiki/PHP-Nuke"
          rel="noopener noreferrer"
          target="_blank"
        >
          PHP-NUKE
        </a>{' '}
        (you know, the Wordpress from that era). I played with it, got in touch
        with more PHP code, editing stuff, and learning more about programming.
      </>
    ),
    teen_4: `When i was around 14 or 15, this was when <b>i started to learn programming from the bottom</b>. I used all the tools available on the Internet, official documentation of languages, downloaded a lot of popular programming books (i was poor), i started to learn the basic stuff and then, the advanced stuff.`,
    teen_5: `I was about to start "Bachillerato" (here in spain), the latest 2 years before uni, decided to go for the software development career, so i went straight for the Tech road (full of math and physics, etc). I did not knew back then that my life would take a turn.`,
    hard_road_title: `Difficult roads → Beautiful destinations?`,
    difficulties_1: `At the end of the first "Bachillerato" year, i was doing the research proyect for the second year, i did a sample preview and it got good grades, everything was ok but then <b>suddenly problems had arisen</b>. My family was not at their best, mother got very sick, and i had to work in the family business with my father. Not having enough time to study, i failed at some subjects, none related to science, math, or tech but still, a problem. I started to reconsider my future because i still had to work the weekends for the family business.`,
    difficulties_2: `With this fate i decided to slow down my studies and join a "FP Grado Medio" about electronics. Unfortunately all the software development studies required Bachiller. I was doing good with electronics, it was fun but again at the end of my first year my father said he wanted to divorce, and he flew off. <b>I had to start working fulltime, we needed the money</b>.`,
    difficulties_3: `I was around 18 when i started to work fulltime (besides family business), as a shop assistant, construction worker, aluminium carpentry, metallurgy and ceramic factories... during at least 6 years. <b>It was hard but i never forgot my dream</b>. In my spare time i continued to play and learn all the new tech stuff. I worked on recycling my skills, had fun with my best friend doing visual basic stuff, and also uninstalled windows in order to learn linux. I used Debian Lenny distro for at least 4 years in my Personal Computer, and learned a lot.`,
    difficulties_4: (
      <>
        <b>
          Not giving up was worth the effort, at 24, i had my first programming
          job offer, they asked for a Junior Web Developer
        </b>
        . I never doubt for a moment and ran away from the work place where i
        was, a factory where i earned good money and was fun, configuring ABB
        Robots and some technical stuff there, but my dream was always being a
        programmer.{' '}
        <a
          href="https://www.linkedin.com/in/sergio-fernandez-giribets-25805717/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sergio
        </a>
        , Panaworld SL CEO decided to hire me part time. They needed a junior
        dev to speed up a little bit the software development department. This
        company had their own products, websites with very high traffic serving
        for 8 different countries
      </>
    ),
    working_as_dev_title: `Working for a company as a self-taugh developer`,
    developer_1: `At first, i was told to do the non fun stuff, <b>i started working in frontend</b>, making a professional design real developing the layouts with HTML and CSS, for 2 months or so. It was fun but also a pain, considering IE6 support, no cool tools like today with bootstrap and all the other libraries and frameworks, all you had was rely on your <code>float: left;</code><code>display: table</code> ;).`,
    developer_2: `It only took 2 months to earn a <b>new contract and work fulltime there</b>, i was ready for harder stuff. I improved their internal tools like the custom engine they used to build static websites with PHP, it was slow at first but i made it faster. Reading popular MySQL books really helped to fill the advanced sql gaps the team lacked.`,
    developer_3: `After a year working for Panaworld, i earned the right to start the future project of the company. I learned a lot with this proyect, we also built a custom PHP Framework based on MVC with another co-worker doing pair programming, with the framework built i started the implementation of the backend business logic and the frontend UI and design. The proyect was an improvement, not a static website anymore, just a 2.0 Website with Login, Community, Ajax requests / dynamic content, etc. Soon this proyect was finished and replaced the old product. In less than a year we beat the market, SEO improved a lot, user statistics usage, etc. This proyect was interesting since the high traffic challenged us to scale the database and the website itself, i learned a lot of performance optimization tricks, for the user and for the servers. I was in charge of SEO and macrojuegos.com, the spanish site went crazy reaching 70 million pageviews in a month.`,
    developer_4: (
      <>
        I don't want to make this longer, if you want more details about the
        proyects i worked during these times you can find them in the{' '}
        <Link exact to="/en/proyects/">
          proyects section
        </Link>
        . In summary, i developed a 9 year career within Panaworld headquarters
        doing all sort of stuff related to the web development world, frontend,
        backend, deployment, server, and also learned a lot of SEO.
      </>
    ),
  },
  es: {
    bioquote: 'Mi cara aburre, hagamos que se mueva con css',
    h1: 'Cosas sobre mí',
    h2: 'Quién soy, aficiones, como me hice programador, etc',
    title: 'Acerca de mí',
    intro1: `¡Hey! Mi nombre es Daniel Domínguez Rubio, me apasiona el mundo digital, la programación, diseñar software, interfaces gráficas, el SEO... y un montón de cosas de frikis. Llevo toda la vida viviendo en Barcelona, he trabajado en distintos lugares, pero en mis 9 últimos años de trabajo he ejercido como programador.`,
    lifestyle: `Desde siempre he estado vinculado con la <b>informática</b> y rodeado de amigos que también lo están. Por circunstancias de la vida tuve que luchar y aprender de forma autodidacta hasta convertirme en programador. Ahora es tanto mi Hobbie como mi trabajo. Me desenvuelvo como <b>Desarrollador FullStack</b> especializado en WEB, Javascript, Nodejs, PHP, SQL, etc. He tenido la suerte de mantener una estrecha relación con el SEO Técnico, semántico y manejando la estrategia de proyectos durante 7 años.`,
    howiam: `¿Que tipo de persona soy?`,
    howiam_reply: `Pues creo que soy el <b>arquetipo clásico</b> de programador de toda la vida, nada fuera de lo común. Me considero <b>una persona introvertida</b> y prefiero trabajar en la sala de máquinas con mis herramientas, y no dando la cara al cliente ejerciendo un trabajo más de consultor o vendedor. He trabajado en equipo en algunos proyectos, y otros los he llevado yo solo, así que ya estoy acostumbrado a ambas cosas. He sido durante años la persona que hace de enlace entre el equipo Técnico - SEO - Contenidos y la dirección, para una pequeña startup de entre 8 y 15 empleados ¡había mucho que hacer!.`,
    hobbies: `Además de la informática, siempre he sido <b>aficionado a los videojuegos</b> (que raro ¿verdad?), de joven jugaba a juegos online, lo que fuera competitivo, últimamente me gustan las cosas más calmadas y menos adictivas... ver fútbol, series, leer... tengo otras prioridades. Soy de los que piensan que como en casa, en ningún sitio, además este oficio requiere de pasar algunas horas <b>renovando tus habilidades</b> detrás de la pantalla, bien sea de forma pasiva mediante lectura de libros, documentación o charlas, como de forma activa programando proyectos con nuevas herramientas para probarlas.`,
    history_title: `¿Como acabé como desarrollador siendo autodidacta? Mi historia`,
    history_brief: `A continuación vas a leer sobre mi historia, puede ser un poco pesado pero merece la pena.`,
    child_title: `Una infancia ya un poco friki`,
    child_history: `A los 6 años de edad, mi padre me compró un <b>AMSTRAD CPC</b> ya que a él le gustaba comprar todo tipo de tecnología moderna. Mientras la mayoría de niños salían a la calle a jugar al fútbol o miraban los dibujos (en esa época todavía no se llevaba ni la nintendo), yo disfrutaba en casa con el ordenador. Aparte de utilizarlo para jugar, me llamo la atención un libro bastante gordo que traía sobre el lenguaje de programación <b>BASIC</b> (si, los ordenadores de antes te venían con manuales para aprender a programarlos). Un par de años después, ya me dedicaba a copiar el código fuente de los ejemplos del libro para ver lo que ocurría por la pantalla, <b>esos fueron mis inicios en el mundo de la programación</b>.`,
    teen_title: `La adolescencia... videojuegos, Internet, webs, programación`,
    teen_1: `En mi época adolescente, llegó como anillo al dedo en España <b>la tarifa plana de internet</b>, con el dichoso <b>modem de 56k</b> con el cual solo podías conectarte a partir de las 18:00. Cada vez que me conectaba, generalmente abría el buscador <b>Altavista</b> con Netscape y me descargaba emuladores y roms para jugar. Entre vicio y vicio, me picó el gusanillo con las páginas web, así que me puse a investigar sobre ello. En poco tiempo ya estaba <b>escribiendo HTML</b> en el bloc de notas del Windows 95, creando las míticas webs de fondo negro con marquesinas, frames, GIF, y todo el paquete completo de la época (Aún no existia el CSS), las alojábamos en hostings gratuitos tipo Geocities donde te metían publicidad hasta aburrir.`,
    teen_2: `A medida que practicaba más como webmaster (llamaban así al desarrollador web), <b>llamaron mi atención las páginas web que tenían todo tipo de efectos</b> y cosas moviéndose por pantalla, no eran GIF's, era algo extraño, como imágenes persiguiendo a tu ratón o ¡relojes analógicos que se movían! allí es cuando tuve <b>contacto por primera vez con Javascript</b>, nada menos que la versión ECMAScript 2, el terrorífico e intimidatorio lenguaje de programación que es hoy por hoy el más utilizado en el mundo. No pasó demasiado tiempo hasta convertirme en el típico <i>Script Kiddie</i>, copiando y editando snippets de javascript de otros sitios.`,
    teen_3: (
      <>
        Todavía no me había tomado en serio el tema de aprender a programar,
        hasta que <b>descubrí páginas web que cambiaban su contenido</b>{' '}
        (Páginas dinámicas). Tenía que saber como era posible conseguir que el
        HTML hiciese esto, y fue cuando <b>descubrí los CGI</b>, principalmente
        todo lo que se podía hacer con <b>PHP</b>. Al investigar más sobre PHP
        me di cuenta que esto era otro nivel, ya no hablábamos de copiar y pegar
        scripts, esto era serio, y tenía que aprender de alguna manera. Comencé
        instalando un CMS popular en la época,{' '}
        <a
          href="https://es.wikipedia.org/wiki/PHP-Nuke"
          rel="noopener noreferrer"
          target="_blank"
        >
          PHP-NUKE
        </a>{' '}
        (el wordpress de la época). Me fui buscando la vida para ir editando el
        código PHP del CMS y poco a poco fui aprendiendo algo más.
      </>
    ),
    teen_4: `Tendría unos 14 o 15 años, y esta fue la época en que <b>me puse seriamente a aprender a programar</b>. Utilizando todo lo que daba de si Internet, desde la documentación oficial de los lenguajes, hasta libros sobre programación en PDF, comencé a estudiar bien las bases de la programación, y luego cosas mas avanzadas.`,
    teen_5: `Se acercaba el bachillerato y ya había decidido que <b>quería estudiar programación</b>. Mi destino sería el Bachillerato Tecnológico, con la idea de hacer un Ciclo Superior de programación. Lo que no sabía por aquel entonces, es que el destino me tenía preparada una jugarreta que me impediría lograr mi sueño.`,
    hard_road_title: `Camino con obstáculos → ¿Mejor destino?`,
    difficulties_1: `Finalizando 1º de Bachillerato, acabando una previa del trabajo de investigación (programé un blog casero con php), todo iba bien pero entonces <b>llegaron algunos problemas</b>. Mi familia no pasaba la mejor época. Mi madre cayó bastante enferma, así que <b>me tocó ayudar en el negocio familiar</b>. El bachillerato no es un camino de rositas, y los fines de semana me tocaba trabajar sin apenas tiempo para estudiar, esto me pasó factura. Acabé suspendiendo las 3 asignaturas menos importantes en un Bachillerato tecnológico, las lenguas. Esto unido a la falta de tiempo para estudiar y energía me hizo pensar sobre cambiar mi rumbo.`,
    difficulties_2: `Al año siguiente iba a tener que continuar trabajando en el negocio familiar, así pues <b>decidí matricularme para un Ciclo de grado medio</b>, que permitía ir de tarde, para compatibilizar horarios. Lamentablemente no existían ciclos de informática como ahora, así que me decanté por la electrónica, que era lo más parecido, no estaba mal, aunque tenía pocas salidas laborales. Terminando el año, mis padres se divorciaron. Con mi madre aún enferma, tuve la necesidad de trabajar a tiempo completo y traer dinero a casa y ahí se acabaron los estudios ☹.`,
    difficulties_3: `A los 18 empecé a trabajar (aparte del negocio familiar que fué antes), en la construcción, carpintero de aluminio y cristalería, fábricas de metalurgia y cerámica... así mas o menos durante 6 años. Era duro pero en el tiempo libre que me quedaba seguía trasteando con cosas sobre programación WEB. Me puse las pilas con todo lo actual, echaba algunas tardes con mi mejor amigo programando con visual basic, incluso me pareció buena idea desinstalar windows para aprender Linux, así que Debian Lenny fue mi sistema desktop durante 3 o 4 años.`,
    difficulties_4: (
      <>
        No rendirse mereció la pena, a los 24 años tuve la suerte de
        <b>encontrar mi primer empleo en el mundo de la programación</b>. No
        dudé ni un momento en dejar el trabajo donde estaba, una fábrica donde
        tenía acceso a configurar <b>Robots ABB</b> y otros cacharros, pero no
        podía rechazar la oportunidad de ser programador.
        <a
          href="https://www.linkedin.com/in/sergio-fernandez-giribets-25805717/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sergio
        </a>
        , CEO de Panaworld S.L, decidió darme una oportunidad a media jornada en
        su empresa, necesitaban un Junior para apoyar un poco y con ganas de
        aprender. La empresa tenía su propio producto, una red de páginas web
        con tráfico en 8 países diferentes.
      </>
    ),
    working_as_dev_title: `Como fue trabajar para una empresa sin titulación, siendo programador autodidacta`,
    developer_1: `Al principio en la empresa me tocó un poco hacer las cosas que no suelen ser divertidas (<b>CSS</b>), me tocó maquetar durante unos meses. Creedme, maquetar con soporte para Internet Explorer 6 no era tan fácil como ahora, por aquel entonces (2009) no existía ni Flexbox, ni frameworks como Bootstrap, ni cssgrid ni ná de ná. Te buscabas la vida con CSS puro tirando de <code>float: left;</code><code>display: table</code> y similares, si funcionaba en IE6 ese día te ibas contento a casa.`,
    developer_2: `En solo dos meses <b>me hicieron contrato indefinido a jornada completa</b>, les ayudé con algunos problemas de sus proyectos. Mejoré el rendimiento del sistema propio que se hicieron para generar páginas estáticas con PHP, iban justos sobre MySQL y yo aprendí bastante de buenos libros.`,
    developer_3: `Tras llevar ya un año en la empresa, me dieron la <b>oportunidad de empezar yo solo el proyecto de futuro de la empresa</b>. Aprendí mucho con este proyecto, desarrollé un framework PHP basado en MVC junto con un compañero (Pair programming a tope), y a partir de ahí pude comenzar a implementar todas las features de backend y frontend. Se buscaba lo que llamaban, tecnología web 2.0,  AJAX, Login de Usuarios, Comunidad, dinamismo por javascript, etc. Tras terminarlo, reemplazó a las webs antiguas en los países que menos visitas generaban. En solo un año <b>mejoró notablemente el SEO y las estadísticas de uso</b>, finalmente desplegamos el proyecto que sustituyó las webs de todos los países, hicimos mucho trabajo de SEO. Este proyecto fue muy interesante, diseñar las bases de datos para que fueran escalables, programar todo el backend, todo el frontend, llevar la estrategia SEO... macrojuegos.com (la página española) alcanzó hasta 70 millones de páginas vistas en un mes.`,
    developer_4: (
      <>
        No entraré en más detalles sobre los proyectos que hice, ya que fueron
        muchos, podéis encontrar esa información en la{' '}
        <Link exact to="/proyectos/">
          sección proyectos
        </Link>
        . A modo de resumen, estuve en PANAWORLD casi 9 años, realizando tareas
        de maquetación HTML y CSS, programación, backend con PHP, Frontend
        Javascript y sus librerías, también tuve la oportunidad de aprender
        mucho sobre SEO.
      </>
    ),
  },
}

export default translation
