const skills = {
  languages: [
    {
      skill: 'PHP',
      level: 4,
      isRecent: true,
      description: {
        en:
          'Worked with PHP3, PHP5 and also PHP7 for many years. Used OOP to the point of building a small framework with it. Used composition, inheritance, traits, and created a few websites with it. Used mysqli and pdo for mysql. Worked with PHP by applying mostly the MVC architecture, creating view templates, creating controller logic, creating models, managing clean urls (routes)... this was something I did almost every day to build websites or public api. I never tried TDD with PHP.',
        es:
          "Trabajé con PHP3, PHP5 y PHP7 por varios años. Usé OOP hasta el punto de crear un pequeño framework con él. Usé composición, herencia, traits y creé varios sitios web con él. Usé mysql y pdo para tratar con mysql. Trabajé con PHP aplicando principalmente el patrón MVC, creando templates de vistas, creando lógica de controlador, modelos, manejando urls limpias (rutas)... esto fué lo que hacía más o menos diariamente para crear sitios web o api's. Nunca probé TDD con PHP.",
      },
    },
    {
      skill: 'Javascript ES5',
      level: 4,
      isRecent: true,
      description: {
        en:
          'Used JS ES5 for many years because it was the standard for the web until nodejs allowed us to write with a better version of JS by using babel transpiling.',
        es:
          'Usé JS ES5 por varios años ya que era el standard que tenía la web en esa epoca, hasta que apareció nodejs y nos permitió trabajar con versiones mejores de JS usando el transpilador de babel.',
      },
    },
    {
      skill: 'Javascript ES6+',
      level: 3,
      isRecent: true,
      description: {
        en:
          'Thanks to nodejs and babel I started using ES6 a few years earlier than the browsers release. Promises, map, reduce and filter was something I used a lot.',
        es:
          'Gracias a nodejs y babel empecé a usar ES6 años antes de que fuera estable en los navegadores. Promise, map, reduce y filter era algo que empecé a usar a diarío.',
      },
    },
    {
      skill: 'Typescript',
      level: 2,
      isRecent: true,
      description: {
        en:
          "I made a few projects using typescript. Having static type can be useful but can be also a pain when you import some libraries that don't have the proper typings.",
        es:
          'He hecho algunos proyectos con typescript. Tener tipado estático es útil pero también puede ser un engorro cuando importas librerías que no tienen los typings preparados.',
      },
    },
    {
      skill: 'MySQL',
      level: 4,
      isRecent: true,
      description: {
        en:
          'I know a lot about mysql. Used it for years. From creating basic to create advanced queries. Proper relational database design, atomic with no duplication. Proper use of indices for optimal performance. Even configuring INNODB to improve the ram usage and therefore the performance. Used it mainly through PHP drivers mysqli or pdo.',
        es:
          'Conozco bastante sobre mysql. Lo he usado por bastantes años. Desde crear consultas básicas hasta crear consultas muy avanzadas. Diseño relacional adecuado, atómico y sin duplicación. Usar los indices adecuadamente para el mejor rendimiento. Configurar INNODB para aprovechar la ram del servidor. Lo he usado principalmente desde drivers PHP, mysqli y PDO.',
      },
    },
    {
      skill: 'HTML5',
      level: 4,
      isRecent: true,
      description: {
        en:
          'I started writting HTML when I was 12. HTML is not very hard once you understand the nesting of nodes. My level is quite high, maybe not fully update on the latest accesibility things, but almost there.',
        es:
          'Empecé a escribir HTML cuando tenía 12 años. Html no es muy difícil una vez entiendes los conceptos de nodo, padres e hijos. Mi nivel es bastante algo, quizás no actualizado al máximo con las últimas novedades de accesibilidad pero casi.',
      },
    },
    {
      skill: 'CSS3',
      level: 4,
      isRecent: true,
      description: {
        en:
          "My skill with raw CSS is very decent. A lot of experience playing with it. Fonts, google fonts, layouts with float, tables, flexbox and responsive media queries. My weak point can be animations, not because I don't know how to do them but because I don't use them often. CSS is not very hard by the way.",
        es:
          'Mi habilidad con puro CSS es bastante decente. Bastante experiencia jugando con él. Fuentes, google fonts, maquetación con floats, tablas, flexbox, media queries para responsive. Mi punto débil serían las animaciones, no por que no sepa hacerlas sino que no suelo usarlas demasiado. CSS no es demasiado dificil la verdad.',
      },
    },
    {
      skill: 'Nodejs',
      level: 3,
      isRecent: true,
      description: {
        en:
          "Nodejs! At first I was in denial but the capabilities of nodejs and the community made it great. I played a bit with express but never used it as a backend service. I can't say the same for frontend because nowdays is the norm. All the tools, bundling, etc are running with node and npm these days and everyone should use it.",
        es:
          'Nodejs! Al principio no me gustaba pero las posibilidades de nodejs y la comunidad lo hizo muy útil. He jugado un poco con express pero nunca lo he usado como backend seriamente. No puedo decir lo mismo para el frontend, a dia de hoy usarlo es lo normal. Todas las herramientas que ofrece, el bundling, etc funcionan sobre node y npm y todo el mundo debería utilizarlo.',
      },
    },
    {
      skill: 'C#',
      level: 2,
      isRecent: false,
      description: {
        en:
          "I used C# mainly to make games with Unity Engine. So I don't have any experience with dotnet but I know how to deal with the language and the standard libraries. C# and JAVA are languages that I would love to play with building websites with them.",
        es:
          'He usado C# principalmente para hacer juegos con Unity Engine. No tengo experiencia con dotnet pero se como lidiar con el lenguage en si mismo y sus librerías estandar. Tanto C# como Java son lenguajes que me gustaría usar en entornos web.',
      },
    },
    {
      skill: 'Unity',
      level: 3,
      isRecent: false,
      description: {
        en:
          "I made a few small games with Unity engine. They were 2D games optimized for mobile. Used a few physicks and some arcade logic. Is not my speciality but I don't thing I would have any issues making more games.",
        es:
          'Hice algunos juegos pequeños con Unity Engine. Eran juegos 2D optimizados para móviles. Utilicé algo de físicas, algo de lógica arcade. No es mi especialidad pero dude que tuviera muchos problemas para hacer nuevos juegos.',
      },
    },
    {
      skill: 'Python',
      level: 1,
      isRecent: false,
      description: {
        en:
          'I played a lot with the python syntax when I was studying programming and made a lot of algorithms with it. Never used it in any real project for the moment.',
        es:
          'He jugado bastante con la sintaxis de python cuando estaba estudiando programación y hice bastantes algoritmos con él. Nunca lo he usado en proyectos reales por el momento.',
      },
    },
    {
      skill: 'Java',
      level: 1,
      isRecent: false,
      description: {
        en:
          "I used it when I was studying. Basic syntax and standard libraries. I have high OOP from my PHP days so I don't have any issue writting JAVA programs, just lacking in experience with real projects at the moment. I would love to do more in the future. Java is very similar to C# which I used it more.",
        es:
          'Lo he usado cuando estudiaba. Sintaxis básica y librerias estandard. Tengo un nivel de OOP alto de mi época con PHP. No tengo ninguna dificultad en picar programas con java, solo me falta experiencia en proyectos reales con este lenguaje. Me gustaría poder usarlo en el futuro. Java es muy similar a C# que si utilicé más.',
      },
    },
  ],
  libs: [
    {
      skill: 'ReactJS',
      level: 3,
      isRecent: true,
      description: {
        en:
          "I love React. I made a few projects with it, also played with hooks. I've used it mainly in sideprojects. This website it self is made entirely with react thanks to gatsbyjs.",
        es:
          'Me gusta React. He hecho varios proyectos con él, también he jugado con Hooks. Lo he usado mas que nada en proyectos personales. Esta página esta creada enteramente con React gracias a gatsbyjs.',
      },
    },
    {
      skill: 'React Router',
      level: 1,
      isRecent: true,
      description: {
        en:
          "Because I haven't used React for real professional projects I only used Router for a few static routes for my sideprojects. It doesn't look complicated but I lack the experience to prove it.",
        es:
          'Puesto que no he usado React en proyectos reales, solo he usado Router para algunas rutas estáticas en mis proyectos personales. No es que me parezca complicado pero me falta experiencia con la herramienta.',
      },
    },
    {
      skill: 'Express',
      level: 1,
      isRecent: false,
      description: {
        en:
          "Is not really hard to create a simple REST api with express and node but honestly I lack the experience. I don't know about advances features that maybe you need in a real project. Played with the basics of it.",
        es:
          'No es muy difícil crear una api REST simple con express y node pero honestamente no tengo la suficiente experiencia con la herramienta. Desconozco características avanzadas que pudiera tneer y se pudieran requerir en proyectos reales. He jugado con lo básico.',
      },
    },
    {
      skill: 'jQuery',
      level: 4,
      isRecent: false,
      description: {
        en:
          "I've used it for years from that era where JS was a lot worse and jQuery provided a lot of benefits.",
        es:
          'Lo usé durante años desde esa época donde JS era mucho peor que hoy y jQuery era muy útil.',
      },
    },
    {
      skill: 'Bootstrap3',
      level: 3,
      isRecent: false,
      description: {
        en:
          "I've used it on some projects but not that much. It is really useful but also adds a lot of load to your website.",
        es:
          'Lo he usado en algunoso proyectos pero no demasiado. Es realmente útil pero también añade bastante carga a tu web.',
      },
    },
    {
      skill: 'Laravel',
      level: 2,
      isRecent: false,
      description: {
        en:
          "I've worked with other PHP MVC frameworks in the past but not with Laravel. Is not really that different when you take the 80/20 rule. Currently learning more about it but need more practice.",
        es:
          'He trabajado con otros frameworks MVC de PHP en el pasado pero no con Laravel. No es tan diferente cuando consideras la regla de pareto 80/20. En estos momentos estoy aprendiendo más sobre Laravel pero falta practicar.',
      },
    },
    {
      skill: 'GatsbyJS',
      level: 2,
      isRecent: true,
      description: {
        en:
          'This website is made entirely with gatsbyjs. I really love this tool. It would be nice to build more stuff with it in the future.',
        es:
          'Este sitio web se hizo enteramente con gatsbyjs. Me encanta esta herramienta. Sería genial crear más cosas con ella en el futuro.',
      },
    },
    {
      skill: 'GraphQL',
      level: 2,
      isRecent: true,
      description: {
        en:
          'Only used it because gatsbyjs required it, and the client part. A bit confusing at first but it sticked fast.',
        es:
          'Solo lo he usado por que gatsby lo requería, y solo la parte cliente. Un poco confuso al inicio pero se aprendió rápido.',
      },
    },
    {
      skill: 'Webpack',
      level: 2,
      isRecent: false,
      description: {
        en:
          'I had to hack a few lines in webpack configs to make some plugins work etc. Very useful tool but the config may be challenging, nothing to fear tho thanks to the Internet.',
        es:
          'Tuve que hackear algunas lineas en configs de webpack para hacer funcionar plugins etc. Muy útil pero la configuración puede ser difícil. De todas formas nada que temer teniendo Internet.',
      },
    },
  ],
  tools: [
    {
      skill: 'LESS',
      level: 3,
      isRecent: true,
      description: {
        en:
          'I had to deal with less a lot just because bootstrap was too bloated.',
        es:
          'Tuve que lidiar bastante con Less solo por que bootstrap era muy bloated',
      },
    },
    {
      skill: 'RegExp',
      level: 4,
      isRecent: true,
      description: {
        en: "I've created a lot of regexps. Is not an easy thing but I got it.",
        es:
          'He creado bastantes expresiones regulares. No es fácil pero lo domino.',
      },
    },
    {
      skill: 'Composer',
      level: 2,
      isRecent: false,
      description: {
        en: "I've used it for pulling some libraries and also as autoloader.",
        es:
          'Lo he usado alguna vez para instalara algunas librerías y por supuesto como autoloader.',
      },
    },
    {
      skill: 'Debian Linux',
      level: 4,
      isRecent: true,
      description: {
        en:
          'This was my main desktop OS for a lot of years. I did a lot of things with it, even playing games with wine... I have a very good Linux background in general without being a sysadmin myself.',
        es:
          'Este fue mi sistema operativo durante años. Hice muchas cosas con él, incluso jugar juegos con wine... Tengo bastante dominio sobre Linux en general para no ser un administrador de sistemas.',
      },
    },
    {
      skill: 'CentOS Linux',
      level: 2,
      isRecent: false,
      description: {
        en:
          "I've used it a few times when this was our only option for a dedicated server. After that, debian was the norm.",
        es:
          'Lo he usado algunas veces cuando era la única opción para servidores dedicados. Después de eso, debian era lo normal.',
      },
    },
    {
      skill: 'Arch Linux',
      level: 3,
      isRecent: false,
      description: {
        en:
          'Not like it matters too much but talks about my Linux background. This is my main system in my laptop.',
        es:
          'No es que importe mucho pero habla de mi background con Linux. Es mi sistema principal en mi portátil.',
      },
    },
    {
      skill: 'PHP-FPM',
      level: 4,
      isRecent: false,
      description: {
        en: 'Usually the norm when installing PHP and Nginx.',
        es: 'Normalmente lo normal cuando instalaba PHP y Nginx.',
      },
    },
    {
      skill: 'SSH',
      level: 4,
      isRecent: true,
      description: {
        en:
          'Connecting with SSH here and there and handling SSH keys is something I know.',
        es:
          'Conectar por SSH aquí y allí y tratar con claves SSH es algo que domino.',
      },
    },
    {
      skill: 'Rsync',
      level: 3,
      isRecent: false,
      description: {
        en: 'Used this tool for backups and deploying some static websites.',
        es:
          'Usé esta herramienta para backups y desplegar sitios web estáticos.',
      },
    },
    {
      skill: 'Docker',
      level: 3,
      isRecent: true,
      description: {
        en:
          "I've used Docker a lot but never in a professional fashion. Its a really good tool so I use it for my personal projects also.",
        es:
          'He usado Docker bastante pero nunca en entorno profesional. Es una buena herramienta asi que la utilizo incluso en mis proyectos perssonales.',
      },
    },
    {
      skill: 'BASH Scripting',
      level: 3,
      isRecent: false,
      description: {
        en:
          "Bash isn't easy but I made a lot of scripts with it with Google close.",
        es:
          'Bash no es fácil pero ya he creado muchos scripts con Google cerca.',
      },
    },
    {
      skill: 'Nginx',
      level: 3,
      isRecent: true,
      description: {
        en:
          'I know Nginx to the point I never used Apache httpd. This is always my option of choice for web servers.',
        es:
          'Conozco Nginx hasta el punto que nunca utilicé Apache. Era mi opción principal para servidores web.',
      },
    },
    {
      skill: 'Git',
      level: 3,
      isRecent: true,
      description: {
        en:
          'I know enough about git to operate with it without making a mess but I lack a good professional background, always used svn.',
        es:
          'Conozco lo suficiente sobre git para manejarlo sin romper nada pero me falta un background profesional, siempre he usado subversion.',
      },
    },
    {
      skill: 'Subversion',
      level: 4,
      isRecent: false,
      description: {
        en: 'This was the norm when I worked for Panaworld for 8 years.',
        es:
          'Esto era lo que usábamos cuando trabajé en Panaworld durante 8 años.',
      },
    },
    {
      skill: 'Glamor',
      level: 2,
      isRecent: true,
      description: {
        en: 'Good tool for CSS in JS. Used it on this website.',
        es: 'Buena herramienta para CSS en JS. La usé en esta web.',
      },
    },
    {
      skill: 'Firebase',
      level: 1,
      isRecent: false,
      description: {
        en:
          'I only used it once for saving a form while using their free mode.',
        es:
          'Solo lo he usado  una vez para grabar un formulario usando el paquete gratuíto.',
      },
    },
  ],
  other: [
    {
      skill: 'REST',
      level: 3,
      isRecent: false,
      description: {
        en: 'I know the REST fundamentals and used it for APIs',
        es: 'Conozco los fundamentos de REST y lo he usado para crear APIs',
      },
    },
    {
      skill: 'Testing (TDD)',
      level: 1,
      isRecent: false,
      description: {
        en:
          "This is something I am really doing at the moment. TDD becomed the norm for the last few years and I'm learning more and more about it.",
        es:
          'Es algo que estoy usando ahora mismo. TDD se ha vuelto el estándar en los últimos años y estoy aprendiendo más y más sobre éste.',
      },
    },
    {
      skill: 'Responsive design',
      level: 4,
      isRecent: false,
      description: {
        en:
          "Nothing to fear about. I've made enough responsive sites by using CSS alone with media queries.",
        es:
          'Nada que temer. He creado suficientes sitios web usando CSS y media query.',
      },
    },
    {
      skill: 'SOLID principles',
      level: 3,
      isRecent: false,
      description: {
        en:
          'I know the fundamentals and I always try to make my classes fit in those principles.',
        es:
          'Conozco los principios y siempre intento que mis clases encajen en éstos.',
      },
    },
    {
      skill: 'OOP Programming',
      level: 4,
      isRecent: false,
      description: {
        en:
          'I have no difficulties using OOP. I know about composition, inheritance, polymorfism and interfaces. Also about SOLID.',
        es:
          'No tengo dificultades en usar OOP. Se sobre composición, herencia, polimorfismo y interfaces. También sobre SOLID.',
      },
    },
    {
      skill: 'UI Design & UX',
      level: 3,
      isRecent: true,
      description: {
        en:
          "I have a good eye for UX and UI design but isn't something a developer should focus way too much. I know about it through my experience.",
        es:
          'Tengo buen ojo para el UX y diseño UI pero no es algo que un programador deba saber tanto. La experiencia me ha hecho saber sobre estos conceptos.',
      },
    },
    {
      skill: 'Netbeans',
      level: 4,
      isRecent: false,
      description: {
        en: 'I used this IDE for PHP, for many years.',
        es: 'Usé este IDE para PHP durante años.',
      },
    },
    {
      skill: 'VSCODE',
      level: 3,
      isRecent: true,
      description: {
        en:
          'The best "non IDE" at the moment. I use it a lot for javascript, for example for this website.',
        es:
          'El mejor "no IDE" en este momento. Lo uso bastante para javascript, por ejemplo para esta web.',
      },
    },
    {
      skill: 'VIM',
      level: 3,
      isRecent: true,
      description: {
        en:
          'My skill with VIM is good enough to be able to code with it. Maybe I lack about hardcore stuff.',
        es:
          'Mi habilidad con VIM es lo suficientemente buena para programar con él. Quizás fallo en cuanto a truquitos muy avanzados.',
      },
    },
    {
      skill: 'Visual Studio',
      level: 2,
      isRecent: false,
      description: {
        en:
          'My Visual Studio experience comes from C# when I made Unity games.',
        es:
          'Mi experiencia con Visual Studio viene de C# cuando hice Juegos con Unity.',
      },
    },
    {
      skill: 'Game Dev',
      level: 3,
      isRecent: false,
      description: {
        en:
          'I made a few mobile 2D games so I know some fundamentals and how to made them.',
        es:
          'Hice algunos juegos 2D por eso conozco los fundamentos de como se hacen.',
      },
    },
    {
      skill: 'Web Dev',
      level: 4,
      isRecent: true,
      description: {
        en: 'Web development is something I made a lot during my career.',
        es: 'Desarrollo Web es algo que hice bastante durante mi carrera.',
      },
    },
    {
      skill: 'SEO',
      level: 4,
      isRecent: false,
      description: {
        en:
          'I was responsible for technical SEO in a company that required the best optimizacion possible so I know about a lot of topics, including UX benefits.',
        es:
          'Fuí responsable del SEO técnico en una empresa que requería la máxima optimización posible asi que conozco bastante sobre conceptos SEO, incluído los beneficios del UX.',
      },
    },
    {
      skill: 'Social Api',
      level: 3,
      isRecent: false,
      description: {
        en:
          'I worked with facebook, twitter and the old google plus apis for a while.',
        es:
          'He tenido que lidiar con apis de facebook, twitter y el muerto google plus.',
      },
    },
  ],
}

export default skills
