 /*EVALUACION*/
 async function fetchAndDisplayEvaluacion() {
    const url = "http://172.191.10.174/api/activities/evaluacion/";
    const body = {
      parte1:
        "Semana 1:\nTema: Introducción a la inteligencia artificial: conceptos básicos y aplicaciones.\nSubtema 1: Definición y fundamentos de la inteligencia artificial (1HR)\n   Actividad: Análisis de textos teóricos sobre la definición y fundamentos de la inteligencia artificial, seguido de una discusión en clase y ejercicios prácticos relacionados.\nSubtema 2: Aplicaciones de la inteligencia artificial en diferentes sectores (1HR)\n   Actividad: Investigación en grupos sobre las aplicaciones de la inteligencia artificial en diferentes sectores, seguido de una presentación en clase y debate.\nSubtema 3: Impacto de la inteligencia artificial en el marketing (1HR)\n   Actividad: Análisis de casos de estudio sobre el impacto de la inteligencia artificial en el marketing, seguido de ejercicios prácticos de aplicación en situaciones reales.\nSemana 2:\nTema: Aprendizaje automático: algoritmos básicos y técnicas de clasificación.\nSubtema 1: Introducción al aprendizaje automático (1HR)\n   Actividad: Lectura y discusión de textos teóricos sobre el aprendizaje automático, seguido de ejercicios prácticos de implementación de algoritmos básicos.\nSubtema 2: Algoritmos de clasificación en el aprendizaje automático (1HR)\n   Actividad: Talleres prácticos de implementación de algoritmos de clasificación en el aprendizaje automático, utilizando conjuntos de datos reales.\nSubtema 3: Técnicas avanzadas de clasificación (1HR)\n   Actividad: Proyecto en grupos para aplicar técnicas avanzadas de clasificación en un problema específico, seguido de una presentación en clase de los resultados obtenidos.\nSemana 3:\nTema: Procesamiento del lenguaje natural: comprensión y generación de lenguaje humano por parte de las máquinas.\nSubtema 1: Introducción al procesamiento del lenguaje natural (1HR)\n   Actividad: Análisis de textos teóricos sobre el procesamiento del lenguaje natural, seguido de ejercicios prácticos de comprensión de lenguaje natural.\nSubtema 2: Técnicas de comprensión de lenguaje natural (1HR)\n   Actividad: Talleres prácticos de implementación de técnicas de comprensión de lenguaje natural, utilizando herramientas y bibliotecas específicas.\nSubtema 3: Técnicas de generación de lenguaje natural (1HR)\n   Actividad: Proyecto individual para desarrollar una aplicación de generación de lenguaje natural, seguido de una presentación en clase y evaluación de los resultados.\nSemana 4:\nTema: Visión por computadora: reconocimiento de imágenes y detección de objetos.\nSubtema 1: Introducción a la visión por computadora (1HR)\n    Actividad: Clase expositiva interactiva sobre los conceptos básicos de la visión por computadora.\nSubtema 2: Técnicas de reconocimiento de imágenes (1HR)\n    Actividad: Desarrollo de proyectos prácticos de implementación de algoritmos de reconocimiento de imágenes.\nSubtema 3: Detección de objetos en imágenes y videos (1HR)\n    Actividad: Presentación y discusión de los proyectos de detección de objetos en clase.\nSemana 5:\nTema: Robótica: aplicación de la inteligencia artificial en sistemas robóticos autónomos.\nSubtema 1: Introducción a la robótica autónoma (1HR)\n    Actividad: Clase expositiva sobre los conceptos básicos de la robótica autónoma.\nSubtema 2: Algoritmos de planificación de movimiento en robótica (1HR)\n    Actividad: Asignación de proyectos de desarrollo de algoritmos de planificación de movimiento en robótica.\nSubtema 3: Aplicaciones de la inteligencia artificial en la robótica (1HR)\n    Actividad: Orientación y retroalimentación individualizada durante el desarrollo de los proyectos de aplicaciones de inteligencia artificial en la robótica.\nSemana 6:\nTema: Segmentación de mercado y personalización: cómo utilizar la inteligencia artificial para identificar grupos de consumidores y adaptar estrategias de marketing.\nSubtema 1: Importancia de la segmentación de mercado en el marketing (1HR)\n    Actividad: Clase expositiva sobre la importancia de la segmentación de mercado en el marketing.\nSubtema 2: Técnicas de segmentación de mercado basadas en inteligencia artificial (1HR)\n    Actividad: Desarrollo de proyectos prácticos de implementación de técnicas de segmentación de mercado basadas en inteligencia artificial.\nSubtema 3: Personalización de estrategias de marketing utilizando inteligencia artificial (1HR)\n    Actividad: Presentación y discusión de los proyectos de personalización de estrategias de marketing en clase.\n",
      parte2:
        "Semana 7:\nTema: Investigación de mercados: técnicas de inteligencia artificial para analizar y obtener información relevante sobre el mercado.\n    Subtema 1: Importancia de la investigación de mercados en el marketing (1HR)\n        Actividad: Presentación individual sobre la importancia de la investigación de mercados y su relación con el marketing.\n    Subtema 2: Técnicas de análisis de datos en la investigación de mercados (1HR)\n        Actividad: Ejercicio práctico de análisis de datos utilizando herramientas de inteligencia artificial en la investigación de mercados.\n    Subtema 3: Aplicación de inteligencia artificial en la investigación de mercados (1HR)\n        Actividad: Debate en grupo sobre las ventajas y desafíos de aplicar inteligencia artificial en la investigación de mercados.\nSemana 8:\nTema: Optimización de procesos: uso de algoritmos de inteligencia artificial para mejorar la eficiencia y reducir costos en los procesos de marketing.\n    Subtema 1: Conceptos de optimización de procesos en el marketing (1HR)\n        Actividad: Estudio de caso individual sobre la aplicación de conceptos de optimización de procesos en el marketing.\n    Subtema 2: Algoritmos de optimización basados en inteligencia artificial (1HR)\n        Actividad: Práctica de programación utilizando algoritmos de optimización basados en inteligencia artificial en el contexto del marketing.\n    Subtema 3: Casos de éxito de optimización de procesos en el marketing (1HR)\n        Actividad: Presentación en grupo de casos de éxito de optimización de procesos en el marketing utilizando inteligencia artificial.\n",
      parte3:
        "Semana 9:\nTema: Análisis de datos y toma de decisiones: cómo la inteligencia artificial puede ayudar en la interpretación de grandes volúmenes de datos y en la toma de decisiones basadas en ellos.\n    Subtema 1: Importancia del análisis de datos en el marketing (1HR)\n        Actividad: Análisis individual de datos de mercado utilizando herramientas de inteligencia artificial y presentación de hallazgos.\n    Subtema 2: Técnicas de análisis de datos basadas en inteligencia artificial (1HR)\n        Actividad: Taller práctico de análisis de datos utilizando técnicas de inteligencia artificial en el contexto del marketing.\n    Subtema 3: Toma de decisiones basada en análisis de datos con inteligencia artificial (1HR)\n        Actividad: Simulación de toma de decisiones en grupo utilizando análisis de datos con inteligencia artificial en el marketing.\nSemana 10:\nTema: Automatización de tareas y workflows: cómo utilizar la inteligencia artificial para automatizar tareas repetitivas y agilizar los flujos de trabajo en el ámbito del marketing.\n- Subtema 1: Automatización de tareas en el marketing (1HR)\n    Actividad: Utilización de la técnica de aula invertida para que los estudiantes investiguen y apliquen la automatización de tareas en el marketing en actividades prácticas en clase.\n- Subtema 2: Uso de inteligencia artificial en la automatización de flujos de trabajo (1HR)\n    Actividad: Discusión y resolución de dudas en grupos pequeños sobre el uso de inteligencia artificial en la automatización de flujos de trabajo, basado en material teórico previamente asignado.\n- Subtema 3: Beneficios y casos de uso de la automatización en el marketing (1HR)\n    Actividad: Retroalimentación del profesor sobre el trabajo realizado en clase, enfocándose en los beneficios y casos de uso de la automatización en el marketing.\nSemana 11:\nTema: Aplicación de inteligencia artificial en publicidad y creatividad: cómo utilizar la inteligencia artificial para crear anuncios personalizados y generar contenido creativo.\n- Subtema 1: Personalización de anuncios basada en inteligencia artificial (1HR)\n    Actividad: Utilización de la técnica de aula invertida para que los estudiantes investiguen y apliquen la personalización de anuncios basada en inteligencia artificial en actividades prácticas en clase.\n- Subtema 2: Generación de contenido creativo con inteligencia artificial (1HR)\n    Actividad: Discusión y resolución de dudas en grupos pequeños sobre la generación de contenido creativo con inteligencia artificial, basado en material teórico previamente asignado.\n- Subtema 3: Casos de éxito de aplicaciones de inteligencia artificial en publicidad y creatividad (1HR)\n    Actividad: Retroalimentación del profesor sobre el trabajo realizado en clase, enfocándose en los casos de éxito de aplicaciones de inteligencia artificial en publicidad y creatividad.\nSemana 12:\nTema: Implementación y gestión de herramientas de inteligencia artificial: consideraciones para implementar y administrar correctamente herramientas de inteligencia artificial en entornos de marketing.\n- Subtema 1: Consideraciones para la implementación de herramientas de inteligencia artificial (1HR)\n    Actividad: Utilización de la técnica de aula invertida para que los estudiantes investiguen y apliquen las consideraciones para la implementación de herramientas de inteligencia artificial en actividades prácticas en clase.\n- Subtema 2: Gestión y monitoreo de herramientas de inteligencia artificial en el marketing (1HR)\n    Actividad: Discusión y resolución de dudas en grupos pequeños sobre la gestión y monitoreo de herramientas de inteligencia artificial en el marketing, basado en material teórico previamente asignado.\n- Subtema 3: Desafíos y mejores prácticas en la implementación y gestión de herramientas de inteligencia artificial (1HR)\n    Actividad: Retroalimentación del profesor sobre el trabajo realizado en clase, enfocándose en los desafíos y mejores prácticas en la implementación y gestión de herramientas de inteligencia artificial.\n",
      parte4:
        "Semana 13:\nTema: Evaluación y medición de resultados de marketing: cómo utilizar algoritmos de inteligencia artificial para evaluar y medir el impacto de las estrategias de marketing.\nSubtema 1: Importancia de la evaluación y medición de resultados en el marketing (1HR)\n    Actividad: Realización de experimentos prácticos para comprobar y aplicar los conceptos teóricos.\nSubtema 2: Técnicas de evaluación y medición de resultados basadas en inteligencia artificial (1HR)\n    Actividad: Talleres prácticos donde los estudiantes puedan poner en práctica los conocimientos teóricos adquiridos.\nSubtema 3: Análisis de resultados y toma de decisiones basada en inteligencia artificial (1HR)\n    Actividad: Estudio de casos prácticos que permitan la aplicación de los conceptos teóricos a situaciones reales.\nSemana 14:\nTema: Ética en la inteligencia artificial aplicada al marketing: consideraciones éticas y legales en el uso de la inteligencia artificial en el ámbito del marketing.\nSubtema 1: Importancia de la ética en el uso de inteligencia artificial en el marketing (1HR)\n    Actividad: Debates y discusiones sobre temas teóricos y su relevancia en la práctica profesional.\nSubtema 2: Consideraciones éticas y legales en el uso de inteligencia artificial en el marketing (1HR)\n    Actividad: Organización de talleres prácticos donde los estudiantes puedan trabajar en la implementación de algoritmos de inteligencia artificial.\nSubtema 3: Casos de estudio de dilemas éticos en el uso de inteligencia artificial en el marketing (1HR)\n    Actividad: Análisis de casos prácticos de aplicación de inteligencia artificial en diferentes industrias y áreas.\nSemana 15:\nTema: Limitaciones y desafíos de la inteligencia artificial en el marketing: discusión sobre las limitaciones y posibles desafíos que enfrenta la inteligencia artificial en el contexto del marketing.\nSubtema 1: Limitaciones actuales de la inteligencia artificial en el marketing (1HR)\n    Actividad: Estudio de casos prácticos que permitan la aplicación de los conceptos teóricos a situaciones reales.\nSubtema 2: Desafíos futuros de la inteligencia artificial en el marketing (1HR)\n    Actividad: Realización de experimentos prácticos para comprobar y aplicar los conceptos teóricos aprendidos.\nSubtema 3: Mitigación de riesgos y superación de desafíos en el uso de inteligencia artificial en el marketing (1HR)\n    Actividad: Debates y discusiones sobre temas teóricos y su relevancia en la práctica profesional.\n",
    };

    document.getElementById("loadingOverlayEvaluacion").style.display =
      "flex";
    document.getElementById("generarEvaluacion").disabled = true;


    document.getElementById("generarEvaluacion").textContent = "Cargando...";


    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      displayEvaluacion(result);
    } catch (error) {
      document.getElementById("textareaContentEvaluacion").value = `Error: ${error.message}`;
    } finally {
      document.getElementById("loadingOverlayEvaluacion").style.display = "none";
      document.getElementById("generarEvaluacion").disabled = false;
      document.getElementById("generarEvaluacion").textContent = "Generar";
    }
  }

  function displayEvaluacion(data) {
    const container = document.getElementById("tableContentEvaluacion");
    container.innerHTML = "";

    Object.keys(data).forEach(part => {
      const { name, progreso, week } = data[part];

      const table = document.createElement("table");
      table.classList.add("table", "table-striped");

      // Create table header
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      const headers = ["Semana", "Mecanismo de evaluación", "Porcentaje"];

      headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Create table body
      const tbody = document.createElement("tbody");
      const rows = name.split("\n").slice(2).filter(row => row.trim() !== "");

      rows.forEach(row => {
        const tr = document.createElement("tr");
        row.split("|").slice(1, -1).forEach(cellText => {
          const td = document.createElement("td");
          td.textContent = cellText.trim();
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);

      // Append the table to the container
      container.appendChild(table);
    });
  }

  function handleButtonClickEvaluacion() {
    fetchAndDisplayEvaluacion();
  }
  /*FIN EVALUACION*/