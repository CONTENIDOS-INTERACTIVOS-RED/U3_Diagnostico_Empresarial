export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Diagnóstico externo y propuesta de soluciones',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis del entorno competitivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis del macroentorno',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Análisis del microentorno (microambiente)',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Evaluación de factores económicos, socioculturales y tecnológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Económico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Socioculturales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tecnológicos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis de la situación legal y política',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Propuestas de soluciones basadas en el diagnóstico externo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Económicas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Sociopolítico',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tecnológicas',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Legal y política',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Porter, M. (1987) De la ventaja competitiva a la estrategia corporativa. ',
      link:
        'https://hbr.org/1987/05/from-competitive-advantage-to-corporate-strategy',
    },
    {
      referencia:
        'Luna González, A. C. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=7',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=4',
    },
    {
      referencia:
        'Luna González, A. C. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=7',
    },
    {
      referencia:
        'Prieto Herrera, J. E. (2011). <i>Gestión estratégica organizacional: guía práctica para el diagnóstico empresarial (3a ed.)</i>. Ecoe Ediciones. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/69160?page=133',
    },
    {
      referencia:
        'Luna González, A. C. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=7',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=4',
    },
    {
      referencia:
        'Luna González, A. C. (2015). <i>Administración estratégica</i>. Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=7',
    },
    {
      referencia:
        'Blanco González, A. Cruz Suárez, A. & Feito, C. D. C. (2020). <i>Diagnóstico Empresarial. Delta Publicaciones</i>. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/227433?page=16',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad de una organización para ajustarse a cambios en su entorno, respondiendo de manera eficiente a nuevas condiciones del mercado, regulaciones o avances tecnológicos.',
    },
    {
      termino: 'Análisis del entorno',
      significado:
        'Proceso mediante el cual una empresa evalúa factores externos como economía, tecnología, sociedad y regulaciones, con el fin de anticipar riesgos y oportunidades que puedan afectar su desempeño.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Habilidad de una organización para destacarse en su sector, ofreciendo productos o servicios de mayor valor en comparación con sus competidores y adaptándose a las condiciones del mercado.',
    },
    {
      termino: 'Diagnóstico externo',
      significado:
        'Evaluación de elementos ajenos a la empresa, como tendencias económicas, cambios legislativos y avances tecnológicos, que pueden influir en su desarrollo y sostenibilidad.',
    },
    {
      termino: 'Estrategia empresarial',
      significado:
        'Conjunto de acciones planificadas para alcanzar objetivos organizacionales, considerando factores internos y externos que afectan la operación de la empresa.',
    },
    {
      termino: 'Factores socioculturales',
      significado:
        'Elementos relacionados con los valores, costumbres, hábitos de consumo y comportamientos de una sociedad, los cuales pueden impactar la demanda de productos o servicios.',
    },
    {
      termino: 'Innovación tecnológica',
      significado:
        'Implementación de nuevos procesos, herramientas o productos basados en avances científicos y tecnológicos, con el objetivo de mejorar la eficiencia y competitividad de la empresa.',
    },
    {
      termino: 'Marco legal',
      significado:
        'Conjunto de normativas y regulaciones que rigen la operación de una empresa dentro de un determinado país o sector, incluyendo leyes laborales, fiscales, comerciales y ambientales.',
    },
    {
      termino: 'Responsabilidad social empresarial',
      significado:
        'Prácticas adoptadas por las organizaciones para contribuir al bienestar social, económico y ambiental, generando un impacto positivo en la comunidad y fortaleciendo su reputación.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Enfoque empresarial que busca equilibrar el crecimiento económico con el respeto por el medio ambiente y el bienestar social, asegurando el uso eficiente de los recursos a largo plazo.',
    },
  ],
}
