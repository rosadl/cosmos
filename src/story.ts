import type { Story } from "./types";

export const story: Story = {
  start: "N0",
  nodes: {
    
    N0: {
      id: "N0",
      title: "Despertar en órbita",
      text: "La nave COSMOS I se activa tras un largo viaje a través del espacio. Han pasado más de doce años desde que dejó la Tierra, y ahora se encuentra cerca de una estrella lejana, rodeada de varios planetas desconocidos.\n\nLos sensores comienzan a enviar información básica: tamaños, trayectorias y señales procedentes de esos mundos. Uno de los planetas destaca. Su distancia a la estrella sugiere que podría tener condiciones compatibles con agua líquida.\n\nLa misión ha comenzado. Antes de avanzar, el equipo debe decidir cómo explorar este nuevo sistema estelar.",
      teamTurn: "A",
      image: "/img/N0.png",
      audio: "/audio/N0.mp3",
      choices: [
        {
          label: "Escanear el sistema",
          target: "N1",
          points: 2
        },
        {
          label: "Aproximarse al planeta",
          target: "N2",
          points: -1
        }
      ]
    },

    N1: {
      id: "N1",
      title: "Lo que no se toca",
      text:
        "Desde la distancia, el sistema estelar parece inmóvil.\n" +
        "Pero los instrumentos de la COSMOS I revelan un movimiento constante, casi imperceptible, en cada órbita y cada sombra.\n\n" +
        "Durante horas, los sensores recopilan datos sin intervenir.\n" +
        "La nave se convierte en un observador silencioso, suspendido entre la curiosidad y la prudencia.\n\n" +
        "Los análisis preliminares confirman la presencia de una atmósfera tenue en uno de los planetas.\n" +
        "No es una promesa, pero tampoco una casualidad.\n\n" +
        "A esta distancia, todo es hipótesis.\n" +
        "La misión debe decidir si seguir observando… o buscar algo que quizá no esté ahí.",
      teamTurn: "B",
      image: "/img/N1.png",
      audio: "/audio/N1.mp3",
      choices: [
        {
          label: "Analizar atmósfera",
          target: "N3",
          points: 2
        },
        {
          label: "Buscar señales",
          target: "N4",
          points: -1
        }
      ]
    },

    N2: {
      id: "N2",
      title: "Demasiado cerca",
      text:
        "La COSMOS I abandona su órbita segura y comienza la aproximación.\n" +
        "El planeta deja de ser un conjunto de datos y se convierte en una presencia real, dominante, ocupando cada vez más espacio en los sensores.\n\n" +
        "A mitad de la maniobra, los instrumentos detectan una anomalía.\n" +
        "La atmósfera presenta corrientes intensas en capas superiores, invisibles desde la distancia.\n\n" +
        "Las lecturas oscilan durante varios segundos.\n" +
        "Los sistemas de navegación se ajustan automáticamente, estabilizando la trayectoria con un margen mínimo.\n\n" +
        "La situación no es crítica, pero sí reveladora.\n" +
        "La atmósfera es más activa de lo previsto… y esa actividad podría ser una amenaza, o una gran oportunidad.\n\n" +
        "La decisión debe tomarse ahora, con información incompleta.",
      teamTurn: "B",
      image: "/img/N2.png",
      audio: "/audio/N2.mp3",
      choices: [
        {
          label: "Mantener descenso",
          target: "N5",
          points: 5
        },
        {
          label: "Ajustar trayectoria",
          target: "N6",
          points: -10
        }
      ]
    },


    N3: {
      id: "N3",
      title: "Un patrón claro",
      text:
        "Tras horas de observación, los datos empiezan a encajar.\n" +
        "No todo es ruido ni casualidad.\n\n" +
        "La atmósfera del planeta se mueve siguiendo un ritmo reconocible.\n" +
        "Las corrientes más intensas aparecen siempre en las mismas zonas y desaparecen al cruzar el terminador, allí donde el día se convierte en noche.\n\n" +
        "Eso significa algo importante:\n" +
        "hay regiones mucho más estables de lo que parecía al principio.\n\n" +
        "Desde la distancia, el equipo identifica un corredor natural, una franja del planeta donde la atmósfera se comporta de forma predecible.\n" +
        "No es un lugar seguro… pero sí el mejor punto para acercarse sin sorpresas.\n\n" +
        "Observar más ha servido para algo.\n" +
        "Ahora, al menos, saben por dónde no entrar a ciegas.",
      teamTurn: "A",
      image: "/img/N3.png",
      audio: "/audio/N3.mp3",
      choices: [
        {
          label: "Marcar zona segura",
          target: "N7",
          points: 5
        },
        {
          label: "Iniciar descenso",
          target: "N8",
          points: -5
        }
      ]
    },

    N4: {
      id: "N4",
      title: "Algo responde",
      text:
        "El barrido de radio avanza entre señales conocidas.\n" +
        "El murmullo constante del espacio profundo lo envuelve todo.\n\n" +
        "Uno de los tripulantes explica que ese ruido está en todas partes.\n" +
        "Es el eco térmico del origen del universo, una radiación antigua que llena el espacio desde hace miles de millones de años.\n\n" +
        "No es una señal.\n" +
        "No es un mensaje.\n" +
        "Es el fondo sobre el que existe todo lo demás.\n\n" +
        "Lo sensato sería ignorarlo.\n\n" +
        "Sin embargo, al aislar una frecuencia concreta, algo cambia.\n" +
        "El patrón no desaparece. Se adapta.\n\n" +
        "La señal no se repite de forma mecánica.\n" +
        "Responde a la posición de la nave.\n" +
        "Se intensifica cuando la COSMOS I corrige su rumbo… y se atenúa cuando se aleja.\n\n" +
        "No parece ruido.\n" +
        "Parece una invitación.\n\n" +
        "Si alguien —o algo— habita el planeta, podría estar intentando guiarles.\n" +
        "O atraerles.",
      teamTurn: "A",
      image: "/img/N4.png",
      audio: "/audio/N4.mp3",
      choices: [
        {
          label: "Seguir señal",
          target: "N9",
          points: 2
        },
        {
          label: "Ignorar señal",
          target: "N10",
          points: -1
        }
      ]
    },


    N5: {
      id: "N5",
      title: "Dentro de la tormenta",
      text:
        "La nave atraviesa las capas superiores sin detener la maniobra.\n" +
        "Las corrientes golpean con fuerza, pero los sistemas resisten.\n\n" +
        "Durante unos instantes, todo es ruido y sacudidas.\n" +
        "Después, el caos se abre.\n\n" +
        "Ante la cabina aparece una región inesperadamente calma, suspendida en medio de la tormenta.\n" +
        "Bandas de nubes se curvan alrededor de un vacío luminoso, como si algo hubiera despejado el camino justo a tiempo.\n\n" +
        "La luz no es uniforme.\n" +
        "Se mueve con suavidad, marcando una dirección clara entre las corrientes.\n\n" +
        "La COSMOS I entra en ese espacio sin realizar correcciones evidentes.\n" +
        "Las manos siguen los controles, pero nadie recuerda haber ordenado ese giro exacto.\n\n" +
        "No lo buscaron.\n" +
        "No lo planearon.\n\n" +
        "Y, aun así, la nave avanza como si estuviera siendo llevada.\n\n" +
        "Durante esos segundos, la tormenta deja de ser violencia y se convierte en estructura.\n" +
        "Un orden oculto, bello y frágil, que parece responder a una intención.\n\n" +
        "Ahora, esa luz se adelanta.\n" +
        "Marca un camino más profundo hacia el planeta.\n\n" +
        "La pregunta ya no es qué están viendo.\n" +
        "Es si están dispuestos a seguirlo.",
      teamTurn: "A",
      image: "/img/N5.png",
      audio: "/audio/N5.mp3",
      choices: [
        {
          label: "Seguir la luz",
          target: "N11",
          points: 2
        },
        {
          label: "Resistir control",
          target: "N12",
          points: -2
        }
      ]
    },

    N6: {
      id: "N6",
      title: "Lo que no ocurrió",
      text:
        "La COSMOS I permanece en órbita durante semanas.\n\n" +
        "Desde la distancia, el planeta continúa girando con regularidad.\n" +
        "Las tormentas aparecen y desaparecen.\n" +
        "Los patrones se repiten.\n\n" +
        "Los datos recopilados son incompletos.\n" +
        "Insuficientes para comprender la dinámica real del planeta.\n" +
        "Demasiado superficiales para justificar una continuación de la misión.\n\n" +
        "El tiempo pasa, y los márgenes se reducen.\n" +
        "Las maniobras repetidas, las correcciones constantes y la espera prolongada consumen más combustible del previsto.\n\n" +
        "Cuando los cálculos se actualizan, la conclusión es clara.\n" +
        "No queda margen para intentar una nueva aproximación sin comprometer el regreso.\n\n" +
        "La misión no fracasa por un error técnico.\n" +
        "Fracasa por no haber ido lo suficientemente lejos.\n\n" +
        "La decisión final ya no es científica ni estratégica.\n" +
        "Es física.\n\n" +
        "La nave inicia el viaje de vuelta mientras aún puede hacerlo.\n" +
        "El planeta queda atrás, silencioso e intacto.\n\n" +
        "Nunca sabrán qué había más allá de aquel límite.\n" +
        "Ni si la decisión inicial fue prudencia… o miedo.\n\n" +
        "Solo queda el registro de una oportunidad perdida.",
      teamTurn: "SYSTEM",
      image: "/img/N6.png",
      audio: "/audio/N6.mp3",
      ending: true,
      choices: []
    },

    N7: {
      id: "N7",
      title: "El momento adecuado",
      text:
        "Con los datos reunidos, el planeta deja de ser una incógnita total.\n" +
        "No es un lugar estable, pero tampoco es caótico.\n\n" +
        "La atmósfera sigue un patrón claro.\n" +
        "Alterna ciclos tranquilos con otros mucho más violentos, como si el propio planeta respirara.\n\n" +
        "Durante los periodos estables, las corrientes se alinean y dejan un margen de maniobra razonable.\n" +
        "En los ciclos violentos, todo cambia demasiado rápido como para reaccionar a tiempo.\n\n" +
        "La COSMOS I ajusta su trayectoria teniendo en cuenta ese ritmo.\n" +
        "No se trata de entrar cuanto antes, sino de hacerlo en el momento adecuado.\n\n" +
        "La entrada aún no ha comenzado.\n" +
        "Pero ahora saben algo fundamental: cuándo no hacerlo.",
      teamTurn: "A",
      image: "/img/N7.png",
      audio: "/audio/N7.mp3",
      choices: [
        {
          label: "Aterrizar",
          target: "N15",
          points: 0
        }
      ]
    },

    N8: {
      id: "N8",
      title: "Punto de no retorno",
      text:
        "La entrada comienza como estaba previsto.\n" +
        "Durante unos segundos, la COSMOS I mantiene estabilidad.\n\n" +
        "Entonces, todo cambia.\n\n" +
        "Una corriente descendente golpea la nave desde un ángulo inesperado.\n" +
        "Los sistemas automáticos responden, pero la corrección llega tarde. Demasiado tarde.\n\n" +
        "Un impacto seco sacude la estructura.\n" +
        "Al instante, las alarmas comienzan a sonar por toda la nave, superponiéndose unas a otras.\n\n" +
        "Indicadores en rojo, avisos de integridad y alertas de consumo excesivo llenan el panel.\n" +
        "Uno de los módulos externos pierde integridad y desaparece de los sensores.\n\n" +
        "No era un elemento crítico para la supervivencia inmediata.\n" +
        "Pero sí lo era para la misión.\n\n" +
        "El sistema de análisis atmosférico queda inutilizado.\n" +
        "Parte del combustible reservado para maniobras de precisión se consume en segundos para evitar una pérdida mayor.\n\n" +
        "Las alarmas continúan mientras la nave sigue descendiendo.\n" +
        "No hay tiempo para evaluar daños con calma.\n\n" +
        "Aterrizará.\n" +
        "Pero ya no lo hará con todas sus capacidades intactas.\n\n" +
        "Han llegado al planeta…\n" +
        "pagando un precio que no sabían que existía.",
      teamTurn: "A",
      image: "/img/N8.png",
      audio: "/audio/N8.mp3",
      choices: [
        {
          label: "Continuar descenso",
          target: "N15",
          points: -5
        }
      ]
    },
  N9: {
    id: "N9",
    title: "Algo más cerca",
    text:
      "La señal se mantiene constante mientras la nave avanza.\n" +
      "Ya no es solo un fondo: ocupa cada vez más espacio en los sistemas de escucha.\n\n" +
      "El equipo intenta localizar su origen.\n" +
      "Las triangulaciones no encajan del todo, pero todas apuntan en la misma dirección: hacia el planeta.\n\n" +
      "A medida que la COSMOS I se aproxima, el ruido se intensifica.\n" +
      "No se vuelve más claro. Solo más presente.\n\n" +
      "Algunas correcciones de rumbo parecen producirse antes de ser ordenadas.\n" +
      "O quizá es al revés: las órdenes llegan convencidas de antemano.\n\n" +
      "No hay consenso en la cabina.\n" +
      "Nadie puede afirmar con certeza si están tomando decisiones… o simplemente dejándose llevar.\n\n" +
      "La nave sigue descendiendo.\n" +
      "Y la señal, ahora más fuerte que nunca, parece envolverlo todo.",
    teamTurn: "A",
    image: "/img/N9.png",
    audio: "/audio/N9.mp3",
    choices: [
      {
        label: "Seguir descendiendo",
        target: "N15",
        points: 0
      }
    ]
  },

  N10: {
    id: "N10",
    title: "Órbitas vacías",
    text:
      "La señal queda atrás, absorbida de nuevo por el ruido constante del espacio.\n" +
      "Los instrumentos recuperan valores familiares, previsibles.\n\n" +
      "La COSMOS I inicia una secuencia de aproximación estándar.\n" +
      "Sin un punto claro de entrada, la nave ajusta su trayectoria una y otra vez.\n\n" +
      "Cada órbita ofrece datos similares.\n" +
      "La superficie del planeta cambia lentamente bajo la nave, pero ninguna región destaca lo suficiente como para decidir.\n\n" +
      "El equipo revisa cálculos, descarta opciones, vuelve a empezar.\n" +
      "Nada falla.\n" +
      "Nada avanza.\n\n" +
      "Pasan horas. Luego días.\n" +
      "Solo tras múltiples órbitas, los sensores empiezan a coincidir lo suficiente como para definir una ventana de descenso aceptable.\n\n" +
      "El tiempo perdido deja huella.\n" +
      "Las maniobras repetidas consumen recursos que no estaban pensados para gastarse aquí.\n\n" +
      "Cuando por fin se decide bajar, la nave sigue intacta.\n" +
      "Pero la misión ya no es la misma.\n" +
      "Han llegado tarde… y con menos margen del que esperaban.",
    teamTurn: "B",
    image: "/img/N10.png",
    audio: "/audio/N10.mp3",
    choices: [
      {
        label: "Intentar descenso",
        target: "N15",
        points: 0
      }
    ]
  },

  N11: {
    id: "N11",
    title: "Horizonte",
    text:
      "La luz ocupa ahora toda la cabina.\n" +
      "No ilumina: deforma.\n\n" +
      "Las estrellas del fondo se curvan hacia un punto central, estiradas como si el espacio estuviera siendo comprimido.\n" +
      "Los instrumentos dejan de mostrar coordenadas coherentes.\n\n" +
      "Uno de los tripulantes lo dice en voz baja, casi como una conclusión inevitable:\n" +
      "no es una fuente de energía, es una anomalía gravitatoria extrema.\n\n" +
      "Algo similar a un agujero negro.\n" +
      "Pero incompleto. Inestable.\n\n" +
      "La luz no procede de lo que emite, sino de lo que engulle.\n" +
      "Materia, radiación, incluso información parecen desaparecer en su interior.\n\n" +
      "Entonces ocurre lo inesperado.\n\n" +
      "La gravedad no aumenta.\n" +
      "No hay colapso.\n\n" +
      "En lugar de eso, el espacio frente a la nave se abre.\n" +
      "Dos regiones distantes del universo quedan conectadas por un túnel imposible: un agujero de gusano.\n\n" +
      "La COSMOS I es arrastrada hacia él sin aceleración, sin impacto.\n" +
      "Durante un instante sin tiempo, no hay distancia que recorrer.\n\n" +
      "Y luego, el túnel se cierra.\n\n" +
      "La nave emerge intacta, suspendida a baja altura sobre la superficie del planeta.\n" +
      "No ha habido descenso.\n" +
      "No ha habido travesía atmosférica.\n\n" +
      "Han llegado.\n\n" +
      "La luz ha desaparecido.\n" +
      "Pero la certeza permanece:\n\n" +
      "algo les ha traído aquí.",
    teamTurn: "A",
    image: "/img/N11.png",
    audio: "/audio/N11.mp3",
    choices: [
      {
        label: "Descender",
        target: "N15",
        points: 0
      }
    ]
  },

  N12: {
    id: "N12",
    title: "Fricción",
    text:
      "La nave se aleja de la luz con una corrección brusca.\n" +
      "El resplandor queda atrás, distorsionado por las corrientes atmosféricas.\n\n" +
      "Durante unos segundos, parece que la maniobra ha funcionado.\n" +
      "Luego, el equilibrio se rompe.\n\n" +
      "La COSMOS I entra de lleno en una región de turbulencias extremas.\n" +
      "Las capas superiores del planeta se cierran alrededor de la nave como un sistema en movimiento constante.\n\n" +
      "Las alarmas se activan casi al instante.\n" +
      "Sistemas secundarios se desconectan para evitar daños mayores.\n\n" +
      "Un impacto sacude el casco.\n" +
      "No es grave, pero deja huella.\n\n" +
      "En la cabina, el silencio dura poco.\n" +
      "La tensión se hace evidente.\n\n" +
      "No todos estaban de acuerdo con alejarse de la luz.\n" +
      "Algunos creen que han evitado algo peligroso.\n" +
      "Otros están convencidos de que han rechazado la única salida limpia.\n\n" +
      "Las discusiones se superponen a las alertas.\n" +
      "Por primera vez desde el inicio de la misión, el problema no está fuera de la nave.\n\n" +
      "Tras un descenso forzado, la COSMOS I logra estabilizarse.\n" +
      "Han llegado al planeta.\n\n" +
      "Pero lo hacen con daños visibles…\n" +
      "y con una grieta que no es solo estructural.",
    teamTurn: "A",
    image: "/img/N12.png",
    audio: "/audio/N12.mp3",
    choices: [
      {
        label: "Continuar",
        target: "N15",
        points: 0
      }
    ]
  },







    N20: { id: "N4", title: "Final 1", text: "Final.", teamTurn: "SYSTEM", ending: true, choices: [] },
    N21: { id: "N5", title: "Final 2", text: "Final.", teamTurn: "SYSTEM", ending: true, choices: [] }
  }
};
