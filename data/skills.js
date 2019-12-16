const skills = {
  languages: [
    {
      skill: 'PHP',
      level: 4,
      isRecent: true,
      description: {
        en:
          "I've worked with PHP projects. PHP3, a lot of PHP5 and also PHP7. With it I built websites using the MVC pattern which was implemented in a custom Framework. Implementing new features by using OOP was something I made almost every day with this language.",
        es:
          'He trabajado en proyectos PHP. PHP3, bastante PHP5 y un poco de PHP7. Con él hice sitios webs aplicando el patrón MVC que se implementó en un framework propio. Implementar nuevas Features utilizando OOP ha sido mi día a día con este lenguaje.',
      },
    },
    {
      skill: 'Javascript',
      level: 4,
      isRecent: true,
      description: {
        en:
          "I've worked with Javascript for a while. Since the dark age where it was very bad until the gold days of javascript (ES6). Using bundlers with nodejs, babel and webpack and other tools from npm was the norm during the latest years.",
        es:
          'He trabajado con Javascript por una larga temporada. Desde la época dura hasta la dorada (ES6). Usar bundling con nodejs junto a babel, webpack y otras herramientas de npm ha sido lo normal en los últimos años.',
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
          "I know a lot about SQL/MySQL. I've used it for years. E/R diagrams, Relational model, advanced queries, config optimization, index optimization. PDO and Mysqli for PHP.",
        es:
          'Conozco bastante sobre SQL y Mysql. Lo he usado durante años. Diagramas E/R transcripción relacional, consultas avanzadas. Optimación del servicio. Uso de índices para optimización. En php, drivers mysqli y PDO.',
      },
    },
    {
      skill: 'HTML5',
      level: 4,
      isRecent: true,
      description: {
        en:
          "I started writting HTML when I was 12. HTML is not very hard to use. I've used it for all the web project I made.",
        es:
          'Empecé a escribir HTML cuando tenía 12 años. No es demasiado complicado. Para todos los proyectos web que he hecho, he tenido que utilizarlo.',
      },
    },
    {
      skill: 'CSS3',
      level: 4,
      isRecent: true,
      description: {
        en:
          "My skill with raw CSS is very decent. Years of experience. Fonts, google fonts, layouts with float, tables, flexbox and responsive media queries. My weak point can be animations, I don't use them often in my private projects.",
        es:
          'Mi habilidad con CSS está pulida con años de práctica. Fuentes, google fonts, maquetación con floats, tablas, flexbox, media queries para responsive. Mi punto débil serían las animaciones, no suelo usarlas demasiado en proyectos personales.',
      },
    },
    {
      skill: 'Nodejs',
      level: 3,
      isRecent: true,
      description: {
        en:
          "I've used Nodejs as a backend service only for playing around with express and APIs. As a Frontend tool is the norm nowdays. You must know how to use npm, module bundlers, babel, typescript, and in this field I have a lot of experience.",
        es:
          'Nodejs como servicio backend solo lo he probado un poco, algún api con express. Como herramienta de frontend hoy día es una obligación saber usar npm y usar los module bundlers o babel para mejorar ecmascript y aquí si tengo experiencia.',
      },
    },
    {
      skill: 'C#',
      level: 2,
      isRecent: false,
      description: {
        en:
          "My C# experience comes from when I was developing mobile games. I don't know a lot about dotNet but I'm very interested and learning it.",
        es:
          'Mi experiencia con C# viene de mi época de desarrollador de juegos mobile. No tengo amplios conocimientos en dotNet Framework pero si mucho interés en él.',
      },
    },
    {
      skill: 'Unity',
      level: 2,
      isRecent: false,
      description: {
        en:
          "I made a few small games with Unity engine. They were 2D games optimized for mobile. They used some physics and arcade logic. Is not my field but I don't think I would have any issues making other games.",
        es:
          'Hice algunos juegos pequeños con Unity Engine. Eran juegos 2D optimizados para móviles. Utilicé algo de físicas, algo de lógica arcade. No es mi especialidad pero no tendría muchos problemas en hacer nuevos juegos.',
      },
    },
    {
      skill: 'Python',
      level: 1,
      isRecent: false,
      description: {
        en:
          'I played a lot with python while I was doing academic training and made a lot of algorithms with it. Never used it on any real project tho.',
        es:
          'He jugado bastante con python mientras estaba estudiando programación y he hecho bastantes algoritmos con él. Nunca lo he usado en proyectos reales de todos modos.',
      },
    },
    {
      skill: 'Java',
      level: 1,
      isRecent: false,
      description: {
        en:
          "I know how to use statically strong typed languages because my C# experience. Also with OOP. I've used Java while I was doing academic training. I would like to do more Java in the future.",
        es:
          'Se como utilizar lenguajes de tipado estático y fuerte ya que tengo experiencia en C#. También en OOP. He usado Java mientras me estudiaba FP DAW. Me gustaría hacer cosas con Java en el futuro.',
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
          'I love React. I made a few projects with it, also played with hooks. This website is made entirely with react using Gatsbyjs.',
        es:
          'Me gusta React. He hecho varios proyectos con él, también he jugado con Hooks. Esta página esta creada enteramente con React usando Gatsbyjs.',
      },
    },
    {
      skill: 'React Router',
      level: 1,
      isRecent: true,
      description: {
        en:
          "Because I haven't used React for real professional projects I've only used Router for static routes.",
        es:
          'No he usado React lo suficiente para requerir mucho routing, solo he usado Router para algunas rutas estáticas.',
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
      skill: 'Bootstrap',
      level: 3,
      isRecent: false,
      description: {
        en:
          "I've used it on some projects but I don't like to use it for every project. It is useful but also adds a lot of load to your website.",
        es:
          'Lo he usado en algunos proyectos pero no me gusta abusar. Es útil pero también añade bastante carga a tu web.',
      },
    },
    {
      skill: 'Laravel',
      level: 2,
      isRecent: false,
      description: {
        en:
          "I've worked with other PHP MVC frameworks in the past but not with Laravel. It's not really that different when you take the 80/20 rule into account. Currently learning more about it but I need more practice.",
        es:
          'He trabajado con otros frameworks MVC de PHP pero no con Laravel. No es tan diferente cuando consideras la regla de 80/20. Estoy profundizando más sobre Laravel pero necesito más práctica.',
      },
    },
    {
      skill: 'GatsbyJS',
      level: 2,
      isRecent: true,
      description: {
        en:
          'This website was created entirely with gatsbyjs. I really love this tool. It would be nice to build more stuff with it in the future.',
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
          'Only used it because gatsbyjs required it, and only the client part. A bit confusing at first but not to hard once you get it.',
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
          'I had to configure webpack configs to make some plugins work sometimes. After create react/angular/vue app, not so much.',
        es:
          'Tuve que configurar algunas configs de webpack para hacer funcionar plugins etc. Después de create react/angular/vue app, ya no tanto.',
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
          'Tuve que lidiar bastante con Less solo por que bootstrap era muy bloated.',
      },
    },
    {
      skill: 'RegExp',
      level: 4,
      isRecent: true,
      description: {
        en:
          "I've created a lot of regexps. Definitely not an easy thing to do but I have the experience.",
        es:
          'He creado bastantes expresiones regulares. Definitivamente no es algo fácil de hacer pero tengo la experiencia.',
      },
    },
    {
      skill: 'Composer',
      level: 2,
      isRecent: false,
      description: {
        en: "I've used it for pulling some libraries and also for autoload.",
        es:
          'Lo he usado alguna vez para instalar algunas librerías y por supuesto como autoloader.',
      },
    },
    {
      skill: 'Debian Linux',
      level: 4,
      isRecent: true,
      description: {
        en:
          'This was my main desktop OS for a lot of years. I did a lot of things with it. I have a very good Linux background in general without being a sysadmin expert myself.',
        es:
          'Éste fue mi sistema principal durante muchos años. Hice bastantes cosas guays con él. Tengo bastante buen background con Linux en general sin llegar a considerarme experto en sistemas.',
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
          'This is my main system in my laptop. Not like it matters too much but talks about my Linux background and preferences.',
        es:
          'Es el sistema principal en mi portátil. No es que importe mucho pero habla de mi background y preferencias sobre Linux.',
      },
    },
    {
      skill: 'PHP-FPM',
      level: 4,
      isRecent: false,
      description: {
        en: 'Usually the norm when I had to work with PHP and Nginx.',
        es: 'Normalmente lo normal cuando tuve que trabajar con PHP y Nginx.',
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
          "I've used Docker a lot but never in a enterprise environment. It's a really good tool so I also use it for my personal projects.",
        es:
          'He usado Docker bastante pero nunca en entorno enterprise. Es una buena herramienta asi que la utilizo incluso en mis proyectos personales.',
      },
    },
    {
      skill: 'BASH Scripting',
      level: 3,
      isRecent: false,
      description: {
        en:
          "Bash isn't easy but I made a lot of scripts with it. With Google close nothing is impossible.",
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
          'This is and was my option of choice for web servers. I know more about it than apache httpd.',
        es:
          'Esta era y es mi opción a la hora de instalar web server. Conozco más sobre él que sobre apache httpd.',
      },
    },
    {
      skill: 'Git',
      level: 3,
      isRecent: true,
      description: {
        en:
          'I know enough about git to operate with it without making a mess but I lack a good professional and team background. Always used svn in the past.',
        es:
          'Conozco lo suficiente sobre git para manejarlo sin romper nada pero me falta un background profesional. Siempre he usado SVN (subversion).',
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
          'I only used it once for saving a form while using their free tier.',
        es:
          'Solo lo he usado una vez para grabar un formulario usando el paquete gratuíto.',
      },
    },
  ],
  other: [
    {
      skill: 'REST',
      level: 3,
      isRecent: false,
      description: {
        en: "I know the REST fundamentals and I've used it for APIs",
        es: 'Conozco los fundamentos de REST y lo he usado para crear APIs',
      },
    },
    {
      skill: 'Testing (TDD)',
      level: 2,
      isRecent: false,
      description: {
        en:
          "This is something I am really doing at the moment. TDD is the norm these days. I'm learning more and more about it.",
        es:
          'Es algo que estoy aplicando ahora mismo. TDD se ha vuelto el estándar hoy en día. Estoy aprendiendo más y más sobre ello.',
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
          'I know and understand the principles and I always try to make my classes comply with them.',
        es:
          'Conozco y entiendo los principios y siempre intento que mis clases encajen en éstos.',
      },
    },
    {
      skill: 'OOP Programming',
      level: 4,
      isRecent: false,
      description: {
        en:
          'OOP is very powerful but you can make bad designs with it. I know about composition, inheritance, polymorfism, interfaces, coupling, cohesion and SOLID.',
        es:
          'OOP es muy poderoso pero puedes crear diseños de código que no escalan. Conozco sobre composición, herencia, polimorfismo, interfaces, acoplamiento, cohesión y SOLID.',
      },
    },
    {
      skill: 'UI Design & UX',
      level: 3,
      isRecent: true,
      description: {
        en:
          'I have a decent eye for UX and UI design. I learned about it through my experience.',
        es:
          'Tengo un ojo decente para el UX y diseño de UI. Aprendí con los años de experiencia.',
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
          'El mejor "no IDE" del momento. Lo uso bastante para javascript, por ejemplo para esta web.',
      },
    },
    {
      skill: 'VIM',
      level: 3,
      isRecent: true,
      description: {
        en:
          'My skill with VIM is good enough to be able to code with it. Maybe I lack about the ultimate hardcore stuff.',
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
          'My Visual Studio experience comes from C# when I created Unity games.',
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
          'I made a few mobile 2D games so I know some fundamentals of game development and how to make them.',
        es:
          'Hice algunos juegos 2D por eso conozco los fundamentos de como se hacen.',
      },
    },
    {
      skill: 'Web Dev',
      level: 4,
      isRecent: true,
      description: {
        en:
          'I consider myself a web stack specialist, and its something I made a lot during my career.',
        es:
          'Me considero a mi mismo del especialista del Stack Web. Es algo que hice durante mi carrera.',
      },
    },
    {
      skill: 'SEO',
      level: 4,
      isRecent: false,
      description: {
        en:
          "To be honest I don't like SEO, its a very risky field but I was responsible for technical SEO in a company that required the best possible optimization so I know about a lot of things. Including UX benefits.",
        es:
          'Para ser honestos no me gusta el SEO, es muy arriesgado pero fuí responsable del SEO técnico en una empresa que requería la máxima optimización posible asi que conozco bastante sobre conceptos SEO, incluídos los beneficios del UX.',
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
