const skills = {
  "languages": [
    {
      "skill": "PHP",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "With a wealth of experience in PHP projects spanning PHP3 to PHP7, I have a strong background in developing websites using MVC patterns in custom frameworks. My day-to-day responsibilities include implementing new features utilizing OOP techniques.",
        "es": "Con una vasta experiencia en proyectos PHP que abarca desde PHP3 hasta PHP7, cuento con una sólida formación en el desarrollo de sitios web utilizando patrones MVC en frameworks personalizados. Mis responsabilidades diarias incluyen la implementación de nuevas funcionalidades utilizando técnicas de OOP."
      },
      "era": "monolith"
    },
    {
      "skill": "JavaScript",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "With a deep understanding of Javascript, I have honed my skills from its early days to the modern era, embracing ES6 features. I am adept at employing bundlers and tools such as Node.js, Babel, Webpack, and various npm utilities.",
        "es": "Con conocimiento profundo de Javascript, he perfeccionado mis habilidades desde sus inicios hasta la era moderna, adoptando las características de ES6. Soy hábil en el uso de bundlers y herramientas como Node.js, Babel, Webpack y diversas utilidades npm."
      },
      "era": "spa"
    },
    {
      "skill": "TypeScript",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "Having successfully completed several projects with TypeScript, I appreciate the advantages of static typing while recognizing its occasional challenges. Ultimately, the decision to use TypeScript depends on the team and the project requirements.",
        "es": "Habiendo completado con éxito varios proyectos con TypeScript, aprecio las ventajas del tipado estático al mismo tiempo que reconozco sus desafíos ocasionales. En última instancia, la decisión de utilizar TypeScript depende del equipo y los requisitos del proyecto."
      },
      "era": "spa"
    },
    {
      "skill": "MySQL",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "Boasting years of experience in SQL/MySQL, I have developed a strong proficiency in various aspects such as E/R diagrams, relational models, advanced queries, configuration optimization, index optimization, and integration with PHP using PDO and Mysqli.",
        "es": "Con años de experiencia en SQL/MySQL, he desarrollado una sólida competencia en diversos aspectos como diagramas E/R, modelos relacionales, consultas avanzadas, optimización de configuración, optimización de índices e integración con PHP usando PDO y Mysqli."
      },
      "era": "monolith"
    },
    {
      "skill": "PostgreSQL",
      "level": 1,
      "isRecent": true,
      "description": {
        "en": "Though my experience with PostgreSQL is limited to academic projects, I am familiar with SQL and eager to work with it in production.",
        "es": "Aunque mi experiencia con PostgreSQL se limita a proyectos académicos, estoy familiarizado con SQL y deseoso de trabajar con él en producción."
      },
      "era": "platform"
    },
    {
      "skill": "HTML5",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I began writing HTML at 12 years old and have used it in all my web projects. HTML is relatively simple to use.",
        "es": "Empecé a escribir HTML a los 12 años y lo he utilizado en todos mis proyectos web. HTML es relativamente fácil de usar."
      },
      "era": "monolith"
    },
    {
      "skill": "CSS3",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "With years of experience, I have honed my skills in raw CSS. I am proficient in fonts, Google fonts, layouts using floats, tables, flexbox, and responsive media queries. However, my weaker area is animations, as I do not often use them in personal projects.",
        "es": "Con años de experiencia, he perfeccionado mis habilidades en CSS puro. Soy competente en fuentes, Google Fonts, maquetación usando floats, tablas, flexbox y media queries responsivas. Sin embargo, mi área más débil son las animaciones, ya que no las uso a menudo en proyectos personales."
      },
      "era": "monolith"
    },
    {
      "skill": "Node.js",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "Having delved into Node.js, I have utilized it as a backend service with Express and APIs. As an essential frontend tool, I have gained significant experience in npm, module bundlers, Babel, TypeScript, and other related technologies.",
        "es": "Habiendo profundizado en Node.js, lo he utilizado como servicio de backend con Express y APIs. Como herramienta frontend esencial, he adquirido una experiencia significativa en npm, bundlers de módulos, Babel, TypeScript y otras tecnologías relacionadas."
      },
      "era": "spa"
    },
    {
      "skill": "C#",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "My experience with C# comes from developing mobile games. Although my knowledge of the .NET Framework is limited, I am highly interested in learning more about it.",
        "es": "Mi experiencia con C# proviene de mi trabajo en el desarrollo de juegos para móviles. Aunque mi conocimiento del marco .NET es limitado, tengo un gran interés en aprender más al respecto."
      },
      "era": "framework"
    },
    {
      "skill": "Unity",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "I have developed a few small games using the Unity engine. These 2D mobile-optimized games incorporated physics and arcade logic. While it is not my specialty, I am confident in my ability to create additional games.",
        "es": "He desarrollado algunos juegos pequeños utilizando el motor Unity. Estos juegos 2D optimizados para móviles incorporaban físicas y lógica arcade. Aunque no es mi especialidad, confío en mi capacidad para crear juegos adicionales."
      },
      "era": "framework"
    },
    {
      "skill": "Python",
      "level": 1,
      "isRecent": false,
      "description": {
        "en": "I have explored Python extensively during my academic training and implemented numerous algorithms. However, I have yet to use it in any professional projects.",
        "es": "He explorado Python en profundidad durante mi formación académica e implementado numerosos algoritmos. Sin embargo, aún no lo he utilizado en ningún proyecto profesional."
      },
      "era": "framework"
    },
    {
      "skill": "Java",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "Drawing from my background in C# and OOP, I am accustomed to statically strong-typed languages. My academic training provided me with Java experience, and I am eager to continue advancing my skills in this domain.",
        "es": "A partir de mi experiencia en C# y OOP, estoy acostumbrado a los lenguajes de tipado estático y fuerte. Mi formación académica me proporcionó experiencia en Java, y estoy ansioso por seguir mejorando mis habilidades en este ámbito."
      },
      "era": "framework"
    },
    {
      "skill": "AWS",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I have experience creating EC2 instances with elastic IPs to support Java Tomcat applications, as well as using S3 to host static websites. I have also worked with Lambda serverless functions, Cognito for identity management, and API Gateway.",
        "es": "Tengo experiencia en la creación de instancias EC2 con IPs elásticas para aplicaciones Java Tomcat, así como en el uso de S3 para alojar sitios web estáticos. También he trabajado con funciones sin servidor Lambda, Cognito para la gestión de identidades y el servicio de API Gateway."
      },
      "era": "platform"
    },
    {
      "skill": "BASH Scripting",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "I have experience creating BASH scripts for software deployments and system maintenance tasks.",
        "es": "Tengo experiencia en la creación de scripts de BASH para implementaciones de software y tareas de mantenimiento del sistema."
      },
      "era": "platform"
    }
  ],
  "libs": [
    {
      "skill": "Testing Library",
      "level": 2,
      "isRecent": true,
      "description": {
        "en": "Though relatively new to testing, I have diligently honed my skills in accessibility compliance, best practices, and user experience testing, leveraging userEvent companion to enhance my proficiency.",
        "es": "A pesar de ser relativamente nuevo en testing, he trabajado diligentemente en el desarrollo de mis habilidades en pruebas de cumplimiento de accesibilidad, mejores prácticas y experiencia de usuario, utilizando userEvent companion para mejorar mi competencia."
      },
      "era": "spa"
    },
    {
      "skill": "Jest",
      "level": 2,
      "isRecent": true,
      "description": {
        "en": "Jest is a JavaScript testing framework that I have used in multiple projects, both personal and professional. I feel comfortable using Jest to perform unit tests in projects based on React, as well as in other JavaScript projects.",
        "es": "Jest es un marco de pruebas de JavaScript que he utilizado en múltiples proyectos, tanto personales como profesionales. Me siento cómodo utilizando Jest para realizar pruebas unitarias en proyectos basados en React, así como en otros proyectos de JavaScript."
      },
      "era": "spa"
    },
    {
      "skill": "React",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "With a strong affinity for React, I have successfully completed numerous projects using this technology, including exploring hooks. This website is a testament to my proficiency, as it was built entirely with React and GatsbyJS.",
        "es": "Con gran afinidad por React, he completado con éxito numerosos proyectos utilizando esta tecnología, incluyendo la exploración de hooks. Este sitio web es un testimonio de mi competencia, ya que fue construido íntegramente con React y GatsbyJS."
      },
      "era": "spa"
    },
    {
      "skill": "Next.js",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I have migrated entire websites from classic PHP server-side rendering to modern NextJS-powered React applications featuring SSG, SSR, and ISR capabilities.",
        "es": "He migrado sitios web completos desde PHP clásico con renderizado en el lado del servidor hacia aplicaciones modernas de React con NextJS, que cuentan con capacidades como SSG, SSR e ISR."
      },
      "era": "spa"
    },
    {
      "skill": "Tailwind CSS",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I greatly appreciate Tailwind CSS for its seamless compatibility with React, making it my preferred choice over 'CSS IN JS' libraries.",
        "es": "Valoro mucho la biblioteca Tailwind CSS por su compatibilidad perfecta con React, lo que la convierte en mi opción preferida por encima de las bibliotecas de \"CSS IN JS\"."
      },
      "era": "spa"
    },
    {
      "skill": "Material UI",
      "level": 2,
      "isRecent": true,
      "description": {
        "en": "I have experience using Material UI with React for an academic project that also incorporated AWS Lambda and serverless services.",
        "es": "He utilizado Material UI con React en un proyecto académico que también incorporaba AWS Lambda y servicios sin servidor."
      },
      "era": "spa"
    },
    {
      "skill": "React Router",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I have mainly used React Router for static routes and basic routing implementations.",
        "es": "He utilizado React Router principalmente para rutas estáticas y la implementación de enrutamientos básicos."
      },
      "era": "spa"
    },
    {
      "skill": "Express",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "Creating a simple REST API with Express and Node is quite manageable and works well for small services. However, my experience with advanced features is limited, which might lead me to explore other options, like NestJS, for more complex projects.",
        "es": "Crear una API REST simple con Express y Node es bastante manejable y funciona bien para servicios pequeños. Sin embargo, mi experiencia con características avanzadas es limitada, lo que podría llevarme a explorar otras opciones, como NestJS, para proyectos más complejos."
      },
      "era": "spa"
    },
    {
      "skill": "jQuery",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "I have years of experience with jQuery, mainly during a time when JavaScript was less advanced, and jQuery offered numerous advantages.",
        "es": "Tengo años de experiencia con jQuery, principalmente en una época en la que JavaScript era menos avanzado y jQuery ofrecía numerosas ventajas."
      },
      "era": "monolith"
    },
    {
      "skill": "Bootstrap",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "I've used Bootstrap in some projects, but I don't like to use it for every project. It's useful but can also add significant load to a website.",
        "es": "He usado Bootstrap en algunos proyectos, pero no me gusta usarlo en todos. Es útil, pero también puede agregar carga significativa a un sitio web."
      },
      "era": "monolith"
    },
    {
      "skill": "Laravel",
      "level": 2,
      "isRecent": false,
      "description": {
        "en": "Having experience with other PHP MVC frameworks, I'm familiar with the core concepts and can adapt to Laravel. While I'm currently expanding my knowledge in Laravel, further hands-on practice will enhance my proficiency.",
        "es": "Con experiencia en otros frameworks MVC de PHP, estoy familiarizado con los conceptos básicos y puedo adaptarme a Laravel. Aunque actualmente estoy ampliando mis conocimientos en Laravel, más práctica práctica mejorará mi habilidad en el uso del framework."
      },
      "era": "framework"
    },
    {
      "skill": "GatsbyJS",
      "level": 2,
      "isRecent": true,
      "description": {
        "en": "This website was created entirely with GatsbyJS. I love this tool and would like to build more with it in the future.",
        "es": "Este sitio web se creó completamente con GatsbyJS. Me encanta esta herramienta y me gustaría construir más cosas con ella en el futuro."
      },
      "era": "spa"
    },
    {
      "skill": "GraphQL",
      "level": 2,
      "isRecent": true,
      "description": {
        "en": "I only used GraphQL because GatsbyJS required it, and only for the client-side. It was a bit confusing at first but became easier once I understood it.",
        "es": "Solo he usado GraphQL porque GatsbyJS lo requería y solo en la parte del cliente. Fue un poco confuso al principio, pero se volvió más fácil una vez que lo entendí."
      },
      "era": "spa"
    }
  ],
  "tools": [
    {
      "skill": "Webpack",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "I configured Webpack configs to make some plugins work. After using create-react-app, Angular, and Vue, I relied on it less.",
        "es": "Configuré Webpack para que funcionaran algunos plugins. Después de usar create-react-app, Angular y Vue, lo utilicé menos."
      },
      "era": "framework"
    },
    {
      "skill": "LESS",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I worked with LESS extensively because Bootstrap was too bloated.",
        "es": "Trabajé mucho con LESS debido a que Bootstrap estaba demasiado sobrecargado."
      },
      "era": "framework"
    },
    {
      "skill": "RegExp",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "Having crafted numerous regular expressions, I've developed the expertise to tackle complex pattern-matching tasks, demonstrating a strong command of this powerful and versatile tool.",
        "es": "Habiendo creado numerosas expresiones regulares, he desarrollado la experiencia para abordar tareas de patten-matching complejas, demostrando un sólido dominio de esta herramienta potente y versátil."
      },
      "era": "framework"
    },
    {
      "skill": "Composer",
      "level": 2,
      "isRecent": false,
      "description": {
        "en": "I've used Composer to pull libraries and for autoload.",
        "es": "He utilizado Composer para instalar librerías y como autoloader."
      },
      "era": "monolith"
    },
    {
      "skill": "Debian Linux",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "Debian Linux was my main desktop OS for years. I gained a strong Linux background without being a sysadmin expert.",
        "es": "Debian Linux fue mi sistema operativo principal durante muchos años. Adquirí un sólido conocimiento de Linux sin ser un experto en administración de sistemas."
      },
      "era": "platform"
    },
    {
      "skill": "CentOS Linux",
      "level": 2,
      "isRecent": false,
      "description": {
        "en": "I used CentOS when it was the only option for dedicated servers. Later, Debian became the standard.",
        "es": "Utilicé CentOS cuando era la única opción para servidores dedicados. Luego, Debian se convirtió en el estándar."
      },
      "era": "monolith"
    },
    {
      "skill": "Arch Linux",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "Arch Linux is my main system on my laptop, reflecting my Linux background and preferences.",
        "es": "Arch Linux es el sistema principal en mi portátil, lo que refleja mi conocimiento y preferencias en Linux."
      },
      "era": "platform"
    },
    {
      "skill": "PHP-FPM",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "I usually worked with PHP-FPM when using PHP and Nginx.",
        "es": "Usualmente trabajé con PHP-FPM al utilizar PHP y Nginx."
      },
      "era": "monolith"
    },
    {
      "skill": "SSH",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I have experience connecting via SSH and handling SSH keys.",
        "es": "Tengo experiencia en conectarme mediante SSH y manejar claves SSH."
      },
      "era": "platform"
    },
    {
      "skill": "Rsync",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "I used Rsync for backups and deploying static websites.",
        "es": "Utilicé Rsync para realizar copias de seguridad y desplegar sitios web estáticos."
      },
      "era": "framework"
    },
    {
      "skill": "Docker",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I've used Docker extensively for personal projects but not in an enterprise environment.",
        "es": "He utilizado Docker ampliamente en proyectos personales, pero no en entornos empresariales."
      },
      "era": "platform"
    },
    {
      "skill": "Nginx",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "Nginx has been my preferred choice for web servers. I have more knowledge about Nginx than Apache HTTPd.",
        "es": "Nginx ha sido mi opción preferida para servidores web. Tengo más conocimientos sobre Nginx que sobre Apache HTTPd."
      },
      "era": "framework"
    },
    {
      "skill": "Git",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I am comfortable working with branches, commits, merges, and conflict resolution. I have used both local and remote repositories, and collaborated on shared projects using tools like GitHub. I have also conducted code reviews to improve software quality.",
        "es": "Me siento cómodo trabajando con branchs, commits, merges y resolución de conflictos. He utilizado tanto repositorios locales como remotos y he colaborado en proyectos compartidos utilizando herramientas como GitHub. También he realizado revisiones de código para mejorar la calidad del software."
      },
      "era": "platform"
    },
    {
      "skill": "GitHub Actions",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I design and maintain CI/CD workflows in GitHub Actions to improve delivery speed, reliability, and release safety across multiple projects.",
        "es": "Diseño y mantengo flujos CI/CD en GitHub Actions para mejorar velocidad de entrega, fiabilidad y seguridad en los releases de varios proyectos."
      },
      "era": "platform"
    },
    {
      "skill": "Microsoft Azure",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I use Azure services to run production workloads, integrate cloud resources, and align infrastructure decisions with business constraints.",
        "es": "Utilizo servicios de Azure para operar cargas en producción, integrar recursos cloud y alinear decisiones de infraestructura con necesidades de negocio."
      },
      "era": "platform"
    },
    {
      "skill": "Container Orchestration",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I work with container orchestration patterns for scalable deployments, service resilience, and safer production releases.",
        "es": "Trabajo con patrones de orquestación de contenedores para despliegues escalables, resiliencia de servicios y releases más seguros."
      },
      "era": "platform"
    },
    {
      "skill": "Message Bus Platforms",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I integrate message-bus and event-driven communication patterns to decouple services and improve reliability in distributed systems.",
        "es": "Integro plataformas de mensajería y patrones event-driven para desacoplar servicios y mejorar fiabilidad en sistemas distribuidos."
      },
      "era": "platform"
    },
    {
      "skill": "Subversion",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "Subversion was the standard when I worked at Panaworld for 8 years.",
        "es": "Subversion era el estándar cuando trabajé en Panaworld durante 8 años."
      },
      "era": "monolith"
    },
    {
      "skill": "Glamor",
      "level": 2,
      "isRecent": true,
      "description": {
        "en": "Glamor is a useful tool for CSS in JS. I used it on this website.",
        "es": "Glamor es una herramienta útil para CSS en JS. La utilicé en este sitio web."
      },
      "era": "spa"
    },
    {
      "skill": "Firebase",
      "level": 1,
      "isRecent": false,
      "description": {
        "en": "I used Firebase once for saving a form using their free tier.",
        "es": "Usé Firebase una vez para guardar un formulario con su plan gratuito."
      },
      "era": "spa"
    }
  ],
  "other": [
    {
      "skill": "REST",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "I have a solid understanding of fundamental concepts and best practices for designing, implementing, and consuming RESTful APIs. I have expertise in creating routes, resources, and HTTP verbs, as well as authentication and authorization of users in a REST API. I have experience with various data exchange formats and tools, including Axios and Fetch API, and am knowledgeable in error and exception handling for REST APIs.",
        "es": "Tengo una comprensión sólida de los conceptos fundamentales y las mejores prácticas para diseñar, implementar y consumir APIs RESTful. Tengo experiencia en la creación de rutas, recursos y verbos HTTP, así como en la autenticación y autorización de usuarios en una API REST. He trabajado con varios formatos de intercambio de datos y herramientas, incluyendo Axios y Fetch API, y tengo conocimientos en el manejo de errores y excepciones en una API REST."
      },
      "era": "framework"
    },
    {
      "skill": "Technical Leadership",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "As Technical Lead, I align architecture, people, and process, mentoring engineers and guiding execution to deliver measurable business value.",
        "es": "Como Technical Lead, alineo arquitectura, personas y procesos, mentorizando ingenieros y guiando la ejecución para entregar valor de negocio medible."
      },
      "era": "platform"
    },
    {
      "skill": "Software Architecture",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I design end-to-end architectures focused on scalability, resilience, maintainability, and integration across services and domains.",
        "es": "Diseño arquitecturas end-to-end enfocadas en escalabilidad, resiliencia, mantenibilidad e integración entre servicios y dominios."
      },
      "era": "platform"
    },
    {
      "skill": "Domain-Driven Design (DDD)",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I apply DDD patterns to model business domains, establish clear boundaries, and keep software aligned with evolving product language.",
        "es": "Aplico patrones de DDD para modelar dominios de negocio, establecer límites claros y mantener el software alineado con el lenguaje del producto."
      },
      "era": "platform"
    },
    {
      "skill": "Microservices Architecture",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I build and evolve microservice ecosystems with clear contracts, autonomous deployment units, and disciplined integration practices.",
        "es": "Construyo y evoluciono ecosistemas de microservicios con contratos claros, unidades de despliegue autónomas y prácticas de integración disciplinadas."
      },
      "era": "platform"
    },
    {
      "skill": "Observability",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I promote observability with logging, metrics, and tracing to improve incident response, reliability, and delivery confidence.",
        "es": "Impulso observabilidad con logs, métricas y trazas para mejorar respuesta a incidentes, fiabilidad y confianza en la entrega."
      },
      "era": "platform"
    },
    {
      "skill": "CI/CD Strategy",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I define CI/CD strategy and release workflows that balance speed, quality, and operational risk in production environments.",
        "es": "Defino estrategia CI/CD y flujos de release que equilibran velocidad, calidad y riesgo operativo en producción."
      },
      "era": "platform"
    },
    {
      "skill": "Team Mentoring",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "I mentor engineers through competency frameworks, feedback loops, and growth plans to raise team autonomy and execution quality.",
        "es": "Mentorizo ingenieros con marcos de competencias, feedback continuo y planes de crecimiento para elevar autonomía y calidad de ejecución del equipo."
      },
      "era": "platform"
    },
    {
      "skill": "AI Agent Orchestration",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I design and evaluate agent-oriented workflows, defining guardrails and orchestration patterns to make AI execution reliable.",
        "es": "Diseño y evalúo flujos orientados a agentes, definiendo guardrails y patrones de orquestación para hacer fiable la ejecución con IA."
      },
      "era": "platform"
    },
    {
      "skill": "LLM Integration",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I integrate LLM capabilities into product and process pipelines with attention to validation, quality, and operational impact.",
        "es": "Integro capacidades LLM en pipelines de producto y proceso con foco en validación, calidad e impacto operativo."
      },
      "era": "platform"
    },
    {
      "skill": "Test-Driven Development (TDD)",
      "level": 2,
      "isRecent": false,
      "description": {
        "en": "I am comfortable with the fundamental concepts and procedures of this software development approach. Although I don't have extensive experience in implementing TDD, I am motivated and excited to continue exploring this approach to software development. I have some practical experience and have used tools such as Jest to perform unit tests, and feel confident in creating unit tests and writing code that meets test requirements.",
        "es": "Estoy cómodo con los conceptos fundamentales y los procedimientos de este enfoque de desarrollo de software. Aunque no tengo una amplia experiencia en la implementación de TDD, estoy motivado y emocionado de seguir explorando este enfoque para el desarrollo de software. Tengo algo de experiencia práctica y he utilizado herramientas como Jest para realizar pruebas unitarias, y me siento confiado en crear pruebas unitarias y escribir código que cumpla con los requisitos de las pruebas."
      },
      "era": "framework"
    },
    {
      "skill": "Responsive design",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "With extensive experience in crafting responsive websites, I am well-versed in utilizing CSS and media queries to ensure optimal user experiences across various devices and screen sizes.",
        "es": "Con amplia experiencia en la elaboración de sitios web responsive, domino el uso de CSS y media queries para garantizar experiencias de usuario óptimas en diversos dispositivos y tamaños de pantalla."
      },
      "era": "spa"
    },
    {
      "skill": "SOLID principles",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "With practical experience in implementing these principles, I am able to create scalable, maintainable, and flexible software solutions. I am passionate about clean architecture, have read Robert C. Martin's books on the subject, and have a strong knowledge of SOLID principles and their practical application.",
        "es": "Con la práctica en la implementación de estos principios, soy capaz de crear soluciones de software escalables, mantenibles y flexibles. Soy un apasionado de la arquitectura limpia, he leído los libros de Robert C. Martin sobre el tema, y tengo un fuerte conocimiento de los principios SOLID y su aplicación práctica."
      },
      "era": "framework"
    },
    {
      "skill": "OOP Programming",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "I possess a strong grasp of OOP concepts, including composition, inheritance, polymorphism, interfaces, coupling, cohesion, and SOLID principles. This expertise allows me to effectively design and implement maintainable, scalable, and robust software solutions.",
        "es": "Poseo un sólido conocimiento de los conceptos de programación OOP, incluyendo la composición, herencia, polimorfismo, interfaces, acoplamiento, cohesión y principios SOLID. Esta experiencia me permite diseñar e implementar de manera efectiva soluciones de software mantenibles, escalables y robustas."
      },
      "era": "framework"
    },
    {
      "skill": "UI Design & UX",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I have honed my skills in UI and UX design through years of hands-on experience, including my tenure as a product manager, which enables me to create intuitive and visually appealing interfaces.",
        "es": "He perfeccionado mis habilidades en diseño de UI y UX a través de años de experiencia práctica, incluyendo mi tiempo como product manager, lo que me permite crear interfaces intuitivas y visualmente atractivas."
      },
      "era": "spa"
    },
    {
      "skill": "Netbeans",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "I used Netbeans as my IDE for PHP for many years.",
        "es": "Utilicé Netbeans como mi IDE para PHP durante muchos años."
      },
      "era": "monolith"
    },
    {
      "skill": "VS Code",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "VSCode is my go-to \"non-IDE\" for tasks like JavaScript development, including this website.",
        "es": "VSCode es mi \"no IDE\" preferido para tareas como el desarrollo de JavaScript, incluido este sitio web."
      },
      "era": "spa"
    },
    {
      "skill": "VIM",
      "level": 3,
      "isRecent": true,
      "description": {
        "en": "I am proficient in using VIM for coding, although I may not know all the advanced tricks. I find it particularly useful for editing configuration files inside Linux operating systems or Docker containers that have vi/vim installed.",
        "es": "Tengo habilidades suficientes en el uso de VIM para codificación, aunque puede que no conozca todos los trucos avanzados. Lo encuentro particularmente útil para editar archivos de configuración dentro de sistemas operativos Linux o contenedores de Docker que tienen vi/vim instalado."
      },
      "era": "platform"
    },
    {
      "skill": "Visual Studio",
      "level": 2,
      "isRecent": false,
      "description": {
        "en": "I have gained experience in using Visual Studio through working with C# during the development of Unity games, enabling me to utilize the tool for various tasks and challenges.",
        "es": "He adquirido experiencia en el uso de Visual Studio al trabajar con C# durante el desarrollo de juegos en Unity, lo que me permite utilizar la herramienta para diversas tareas y desafíos."
      },
      "era": "framework"
    },
    {
      "skill": "Game Dev",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "With experience in creating multiple 2D mobile games, I have a solid grasp of game development fundamentals and can effectively apply these concepts to various projects.",
        "es": "Con experiencia en la creación de múltiples juegos móviles en 2D, tengo un sólido conocimiento de los fundamentos del desarrollo de juegos y puedo aplicar efectivamente estos conceptos a diversos proyectos."
      },
      "era": "framework"
    },
    {
      "skill": "Web Development",
      "level": 4,
      "isRecent": true,
      "description": {
        "en": "As an accomplished web stack specialist, I possess extensive experience in the field, allowing me to tackle complex web projects and deliver high-quality solutions.",
        "es": "Como especialista destacado en el stack web, poseo una amplia experiencia en el área, lo que me permite abordar proyectos web complejos y entregar soluciones de alta calidad."
      },
      "era": "spa"
    },
    {
      "skill": "SEO",
      "level": 4,
      "isRecent": false,
      "description": {
        "en": "Though I'm not fond of SEO due to its risks, I was responsible for technical SEO in a company that required top optimization, so I have extensive knowledge, including UX benefits.",
        "es": "Aunque no me gusta el SEO debido a sus riesgos, fui responsable del SEO técnico en una empresa que requería la mejor optimización posible, por lo que tengo un amplio conocimiento, incluidos los beneficios del UX."
      },
      "era": "monolith"
    },
    {
      "skill": "Social APIs",
      "level": 3,
      "isRecent": false,
      "description": {
        "en": "I possess a strong foundation in working with social media APIs, including those of Facebook, Twitter, and the now-deprecated Google Plus. I can effectively integrate these APIs into various applications to enhance their social features.",
        "es": "Poseo una sólida base en el trabajo con APIs de redes sociales, incluyendo las de Facebook, Twitter y el ahora obsoleto Google Plus. Puedo integrar eficazmente estas APIs en diversas aplicaciones para mejorar sus funciones sociales."
      },
      "era": "monolith"
    },
    {
      "skill": "Technical Documentation",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I produce clear technical documentation for architecture, operations, and delivery workflows so teams can execute with less ambiguity and faster onboarding.",
        "es": "Elaboro documentacion tecnica clara para arquitectura, operaciones y flujos de entrega, ayudando al equipo a ejecutar con menos ambiguedad y mejor onboarding."
      }
    },
    {
      "skill": "Technical Training",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I design and deliver technical training sessions that raise team capability in architecture, delivery standards, and platform practices.",
        "es": "Diseno e imparto formaciones tecnicas que elevan la capacidad del equipo en arquitectura, estandares de entrega y practicas de plataforma."
      }
    },
    {
      "skill": "Technical People Management",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I manage technical talent through coaching, prioritization, and accountability to keep execution quality high while supporting career growth.",
        "es": "Gestiono talento tecnico mediante coaching, priorizacion y responsabilidad, manteniendo alta calidad de ejecucion y crecimiento profesional."
      }
    },
    {
      "skill": "No-Code Development",
      "level": 2,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I use no-code tools when they accelerate experimentation, internal workflows, or integration tasks without compromising reliability.",
        "es": "Utilizo herramientas no-code cuando aceleran experimentacion, flujos internos o integraciones sin comprometer la fiabilidad."
      }
    },
    {
      "skill": "Solution Architecture",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I design solution architectures that align business constraints, technical strategy, and delivery feasibility across teams.",
        "es": "Diseno arquitecturas de solucion que alinean restricciones de negocio, estrategia tecnica y viabilidad de entrega entre equipos."
      }
    },
    {
      "skill": "Stakeholder Engagement",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I work closely with stakeholders to translate business goals into technical roadmaps, trade-offs, and measurable outcomes.",
        "es": "Trabajo de cerca con stakeholders para convertir objetivos de negocio en roadmaps tecnicos, decisiones de trade-off y resultados medibles."
      }
    },
    {
      "skill": "Cloud Computing",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I apply cloud architecture patterns for scalability, reliability, and cost-aware operations across production environments.",
        "es": "Aplico patrones de arquitectura cloud para escalabilidad, fiabilidad y operaciones eficientes en coste en entornos de produccion."
      }
    },
    {
      "skill": "AI Adoption",
      "level": 3,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I drive practical AI adoption by defining guardrails, validating use cases, and integrating AI into delivery processes with clear KPIs.",
        "es": "Impulso una adopcion practica de IA definiendo guardrails, validando casos de uso e integrando IA en procesos de entrega con KPIs claros."
      }
    },
    {
      "skill": "Scalability Engineering",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I design for scale by improving throughput, resilience, and bottleneck mitigation across distributed systems.",
        "es": "Diseno pensando en escalabilidad, mejorando rendimiento, resiliencia y mitigacion de cuellos de botella en sistemas distribuidos."
      }
    },
    {
      "skill": "DevOps",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I apply DevOps practices that connect development and operations through automation, observability, and safer release pipelines.",
        "es": "Aplico practicas DevOps que conectan desarrollo y operaciones mediante automatizacion, observabilidad y pipelines de despliegue mas seguros."
      }
    },
    {
      "skill": "Azure Entra",
      "level": 3,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I use Azure Entra for identity and access management, including authentication flows and role-based access control.",
        "es": "Utilizo Azure Entra para gestion de identidades y accesos, incluyendo flujos de autenticacion y control de acceso por roles."
      }
    },
    {
      "skill": "Azure App Service",
      "level": 3,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I deploy and operate web services on Azure App Service, focusing on reliability, secure configuration, and operational efficiency.",
        "es": "Despliego y opero servicios web en Azure App Service, con foco en fiabilidad, configuracion segura y eficiencia operativa."
      }
    },
    {
      "skill": "Clean Architecture",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I apply clean architecture principles to separate concerns, reduce coupling, and keep codebases easier to evolve.",
        "es": "Aplico principios de arquitectura limpia para separar responsabilidades, reducir acoplamiento y facilitar la evolucion del codigo."
      }
    },
    {
      "skill": "Microsoft SQL Server",
      "level": 3,
      "isRecent": true,
      "era": "framework",
      "description": {
        "en": "I work with Microsoft SQL Server for relational modeling, query optimization, and integration in enterprise-style applications.",
        "es": "Trabajo con Microsoft SQL Server para modelado relacional, optimizacion de consultas e integracion en aplicaciones de estilo enterprise."
      }
    },
    {
      "skill": "Microservices",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I build high-throughput microservices with clear service boundaries, asynchronous integration patterns, and production-focused reliability.",
        "es": "Construyo microservicios de alto rendimiento con limites claros, integracion asincrona y enfoque en fiabilidad en produccion."
      }
    },
    {
      "skill": "Mentoring",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I mentor engineers through structured feedback, technical coaching, and growth plans that improve team autonomy.",
        "es": "Mentorizo ingenieros mediante feedback estructurado, coaching tecnico y planes de crecimiento que aumentan la autonomia del equipo."
      }
    },
    {
      "skill": "Amazon DynamoDB",
      "level": 2,
      "isRecent": false,
      "era": "platform",
      "description": {
        "en": "I have worked with Amazon DynamoDB in academic projects and understand core concepts for key-value and document data modeling.",
        "es": "He trabajado con Amazon DynamoDB en proyectos academicos y conozco conceptos clave de modelado de datos key-value y documento."
      }
    },
    {
      "skill": "AWS Lambda",
      "level": 3,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I build serverless functions with AWS Lambda as part of event-driven solutions and lightweight API backends.",
        "es": "Construyo funciones serverless con AWS Lambda como parte de soluciones orientadas a eventos y backends API ligeros."
      }
    },
    {
      "skill": "Amazon Cognito",
      "level": 2,
      "isRecent": false,
      "era": "platform",
      "description": {
        "en": "I have integrated Amazon Cognito for user authentication and identity management in cloud-backed applications.",
        "es": "He integrado Amazon Cognito para autenticacion de usuarios y gestion de identidad en aplicaciones sobre cloud."
      }
    },
    {
      "skill": "AWS CLI",
      "level": 3,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I use the AWS CLI for automation, environment management, and operational scripting across cloud workflows.",
        "es": "Utilizo AWS CLI para automatizacion, gestion de entornos y scripting operativo en flujos cloud."
      }
    },
    {
      "skill": "JSON Web Token (JWT)",
      "level": 3,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I implement JWT-based authentication and authorization flows for APIs and distributed services.",
        "es": "Implemento flujos de autenticacion y autorizacion basados en JWT para APIs y servicios distribuidos."
      }
    },
    {
      "skill": "Oracle Database",
      "level": 2,
      "isRecent": false,
      "era": "framework",
      "description": {
        "en": "I have foundational experience with Oracle Database in academic settings, including schema design and SQL querying.",
        "es": "Tengo experiencia base con Oracle Database en contexto academico, incluyendo diseno de esquemas y consultas SQL."
      }
    },
    {
      "skill": "English (C1)",
      "level": 4,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I work in English at a professional C1 level for technical communication, architecture discussions, and stakeholder alignment.",
        "es": "Trabajo en ingles con nivel profesional C1 para comunicacion tecnica, discusiones de arquitectura y alineacion con stakeholders."
      }
    },
    {
      "skill": "Front-End Development",
      "level": 4,
      "isRecent": true,
      "era": "spa",
      "description": {
        "en": "I build production frontend applications with strong focus on usability, performance, accessibility, and maintainable component architecture.",
        "es": "Construyo aplicaciones frontend en produccion con foco en usabilidad, rendimiento, accesibilidad y arquitectura de componentes mantenible."
      }
    },
    {
      "skill": "Software Design Patterns",
      "level": 3,
      "isRecent": true,
      "era": "framework",
      "description": {
        "en": "I apply software design patterns pragmatically to improve readability, extensibility, and implementation consistency.",
        "es": "Aplico patrones de diseno de software de forma pragmatica para mejorar legibilidad, extensibilidad y consistencia de implementacion."
      }
    },
    {
      "skill": "A/B Testing",
      "level": 2,
      "isRecent": false,
      "era": "spa",
      "description": {
        "en": "I have used A/B testing to validate UX hypotheses and measure product impact with data-informed decisions.",
        "es": "He utilizado pruebas A/B para validar hipotesis de UX y medir impacto de producto con decisiones guiadas por datos."
      }
    },
    {
      "skill": "Agile Project Management",
      "level": 3,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I manage technical delivery in agile environments, balancing roadmap commitments, risk management, and team capacity.",
        "es": "Gestiono entregas tecnicas en entornos agiles, equilibrando compromisos de roadmap, gestion de riesgos y capacidad del equipo."
      }
    },
    {
      "skill": "Agile Methodologies",
      "level": 3,
      "isRecent": true,
      "era": "platform",
      "description": {
        "en": "I use agile methodologies to structure planning, incremental delivery, and cross-functional collaboration.",
        "es": "Utilizo metodologias agiles para estructurar planificacion, entrega incremental y colaboracion entre equipos."
      }
    },
    {
      "skill": "Relational Databases",
      "level": 4,
      "isRecent": true,
      "era": "framework",
      "description": {
        "en": "I have strong relational database fundamentals including schema design, normalization, indexing strategy, and query performance.",
        "es": "Tengo base solida en bases de datos relacionales, incluyendo diseno de esquemas, normalizacion, estrategia de indices y rendimiento de consultas."
      }
    }
  ]
}

export default skills
