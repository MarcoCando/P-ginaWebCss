/*ACTIVIDADES*/
const weekContents = {};
async function fetchDataAndFormatActividades() {
  const url = "http://172.191.10.174/api/activities";
  const body = {
    "sesiones": "3",
    "semanas": "16",
    "subject": "Fundamentos de Inteligencia Artificial",
    "modalidad": "False",
    "tipo": "Periodo Academico",
    "area": "False",
    "rdas": "\n1. Diseñar estrategias de marketing que incorporen herramientas de inteligencia artificial para mejorar la segmentación y personalización de mensajes.\n2. Utilizar técnicas de inteligencia artificial para analizar grandes volúmenes de datos y extraer información relevante para la toma de decisiones de marketing.\n3. Implementar soluciones de inteligencia artificial en los procesos de marketing para optimizar la eficiencia operativa y mejorar la experiencia del cliente.",
    "metodologia": "'La metodología de enseñanza-aprendizaje para la asignatura Fundamentos de Inteligencia Artificial se basa en un enfoque centrado en el estudiante, donde el educador tiene como objetivo facilitar el proceso de aprendizaje de los estudiantes a través de un conjunto de estrategias, técnicas, procedimientos y acciones planificadas y sistemáticas. Para lograr esto, se propone una metodología basada en los ejes de formación de TECNOLOGIA.\n\nEn primer lugar, se fomentará la participación activa de los estudiantes en el proceso de aprendizaje, mediante la realización de actividades prácticas que les permitan aplicar y poner en práctica los conceptos teóricos aprendidos. Además, se promoverá el trabajo en equipo y la colaboración entre los estudiantes, para fomentar el aprendizaje colectivo y el intercambio de conocimientos.\n\nPor otro lado, se utilizarán diversas herramientas tecnológicas, como la inteligencia artificial, para enriquecer el proceso de enseñanza-aprendizaje. Esto incluye el uso de plataformas virtuales de aprendizaje, herramientas de análisis de datos y simulaciones, entre otros recursos. Siguiendo esta línea de pensamiento, se buscará que los estudiantes adquieran habilidades en el manejo de estas tecnologías, así como en la interpretación y utilización de los resultados obtenidos.\n\nEn conclusión, la metodología propuesta para la asignatura Fundamentos de Inteligencia Artificial tiene como objetivo principal permitir a los estudiantes alcanzar los resultados de aprendizaje específicos, a través de un enfoque centrado en el estudiante, la participación activa, el trabajo en equipo y el uso de herramientas tecnológicas. Esto demuestra que el uso de la inteligencia artificial y otras tecnologías en el ámbito de la educación puede mejorar significativamente el proceso de enseñanza-aprendizaje, optimizando la experiencia del estudiante y preparándolos para enfrentar los desafíos del mundo laboral actual.",
    "planificacion": "Semana: 1\n            Tema: Introducción a la inteligencia artificial: conceptos básicos y aplicaciones.\n                Subtema 1: Definición y fundamentos de la inteligencia artificial (1HR)\n                Subtema 2: Aplicaciones de la inteligencia artificial en diferentes sectores (1HR)\n                Subtema 3: Impacto de la inteligencia artificial en el marketing (1HR)\n            \nSemana: 2\n            Tema: Aprendizaje automático: algoritmos básicos y técnicas de clasificación.\n                Subtema 1: Introducción al aprendizaje automático (1HR)\n                Subtema 2: Algoritmos de clasificación en el aprendizaje automático (1HR)\n                Subtema 3: Técnicas avanzadas de clasificación (1HR)\n\nSemana: 3\n            Tema: Procesamiento del lenguaje natural: comprensión y generación de lenguaje humano por parte de las máquinas.\n                Subtema 1: Introducción al procesamiento del lenguaje natural (1HR)\n                Subtema 2: Técnicas de comprensión de lenguaje natural (1HR)\n                Subtema 3: Técnicas de generación de lenguaje natural (1HR)\n\nSemana: 4\n            Tema: Visión por computadora: reconocimiento de imágenes y detección de objetos.\n                Subtema 1: Introducción a la visión por computadora (1HR)\n                Subtema 2: Técnicas de reconocimiento de imágenes (1HR)\n                Subtema 3: Detección de objetos en imágenes y videos (1HR)\n\nSemana: 5\n            Tema: Robótica: aplicación de la inteligencia artificial en sistemas robóticos autónomos.\n                Subtema 1: Introducción a la robótica autónoma (1HR)\n                Subtema 2: Algoritmos de planificación de movimiento en robótica (1HR)\n                Subtema 3: Aplicaciones de la inteligencia artificial en la robótica (1HR)\n\nSemana: 6\n            Tema: Segmentación de mercado y personalización: cómo utilizar la inteligencia artificial para identificar grupos de consumidores y adaptar estrategias de marketing.\n                Subtema 1: Importancia de la segmentación de mercado en el marketing (1HR)\n                Subtema 2: Técnicas de segmentación de mercado basadas en inteligencia artificial (1HR)\n                Subtema 3: Personalización de estrategias de marketing utilizando inteligencia artificial (1HR)\n\nSemana: 7\n            Tema: Investigación de mercados: técnicas de inteligencia artificial para analizar y obtener información relevante sobre el mercado.\n                Subtema 1: Importancia de la investigación de mercados en el marketing (1HR)\n                Subtema 2: Técnicas de análisis de datos en la investigación de mercados (1HR)\n                Subtema 3: Aplicación de inteligencia artificial en la investigación de mercados (1HR)\n\nSemana: 8\n            Tema: Optimización de procesos: uso de algoritmos de inteligencia artificial para mejorar la eficiencia y reducir costos en los procesos de marketing.\n                Subtema 1: Conceptos de optimización de procesos en el marketing (1HR)\n                Subtema 2: Algoritmos de optimización basados en inteligencia artificial (1HR)\n                Subtema 3: Casos de éxito de optimización de procesos en el marketing (1HR)\n\nSemana: 9\n            Tema: Análisis de datos y toma de decisiones: cómo la inteligencia artificial puede ayudar en la interpretación de grandes volúmenes de datos y en la toma de decisiones basadas en ellos.\n                Subtema 1: Importancia del análisis de datos en el marketing (1HR)\n                Subtema 2: Técnicas de análisis de datos basadas en inteligencia artificial (1HR)\n                Subtema 3: Toma de decisiones basada en análisis de datos con inteligencia artificial (1HR)\n\nSemana: 10\n            Tema: Automatización de tareas y workflows: cómo utilizar la inteligencia artificial para automatizar tareas repetitivas y agilizar los flujos de trabajo en el ámbito del marketing.\n                Subtema 1: Automatización de tareas en el marketing (1HR)\n                Subtema 2: Uso de inteligencia artificial en la automatización de flujos de trabajo (1HR)\n                Subtema 3: Beneficios y casos de uso de la automatización en el marketing (1HR)\n\nSemana: 11\n            Tema: Aplicación de inteligencia artificial en publicidad y creatividad: cómo utilizar la inteligencia artificial para crear anuncios personalizados y generar contenido creativo.\n                Subtema 1: Personalización de anuncios basada en inteligencia artificial (1HR)\n                Subtema 2: Generación de contenido creativo con inteligencia artificial (1HR)\n                Subtema 3: Casos de éxito de aplicaciones de inteligencia artificial en publicidad y creatividad (1HR)\n\nSemana: 12\n            Tema: Implementación y gestión de herramientas de inteligencia artificial: consideraciones para implementar y administrar correctamente herramientas de inteligencia artificial en entornos de marketing.\n                Subtema 1: Consideraciones para la implementación de herramientas de inteligencia artificial (1HR)\n                Subtema 2: Gestión y monitoreo de herramientas de inteligencia artificial en el marketing (1HR)\n                Subtema 3: Desafíos y mejores prácticas en la implementación y gestión de herramientas de inteligencia artificial (1HR)\n\nSemana: 13\n            Tema: Evaluación y medición de resultados de marketing: cómo utilizar algoritmos de inteligencia artificial para evaluar y medir el impacto de las estrategias de marketing.\n                Subtema 1: Importancia de la evaluación y medición de resultados en el marketing (1HR)\n                Subtema 2: Técnicas de evaluación y medición de resultados basadas en inteligencia artificial (1HR)\n                Subtema 3: Análisis de resultados y toma de decisiones basada en inteligencia artificial (1HR)\n\nSemana: 14\n            Tema: Ética en la inteligencia artificial aplicada al marketing: consideraciones éticas y legales en el uso de la inteligencia artificial en el ámbito del marketing.\n                Subtema 1: Importancia de la ética en el uso de inteligencia artificial en el marketing (1HR)\n                Subtema 2: Consideraciones éticas y legales en el uso de inteligencia artificial en el marketing (1HR)\n                Subtema 3: Casos de estudio de dilemas éticos en el uso de inteligencia artificial en el marketing (1HR)\n\nSemana: 15\n            Tema: Limitaciones y desafíos de la inteligencia artificial en el marketing: discusión sobre las limitaciones y posibles desafíos que enfrenta la inteligencia artificial en el contexto del marketing.\n                Subtema 1: Limitaciones actuales de la inteligencia artificial en el marketing (1HR)\n                Subtema 2: Desafíos futuros de la inteligencia artificial en el marketing (1HR)\n                Subtema 3: Mitigación de riesgos y superación de desafíos en el uso de inteligencia artificial en el marketing (1HR)\n\nSemana: 16\n            Tema: Futuras tendencias en la aplicación de la inteligencia artificial en el marketing: exploración de las posibles direcciones futuras de la inteligencia artificial en el ámbito del marketing.\n                Subtema 1: Tendencias emergentes de inteligencia artificial en el marketing (1HR)\n                Subtema 2: Impacto potencial de la inteligencia artificial en el marketing en el futuro (1HR)\n                Subtema 3: Oportunidades y desafíos en la adopción de nuevas tendencias de inteligencia artificial en el marketing (1HR)",
    "naturaleza": "Teórico-Práctico",
    "estrategia_aprendizaje": "Estrategia de aprendizaje para Fundamentos de Inteligencia Artificial:\n\n1. Análisis de textos teóricos y aplicación práctica de los conceptos:\n   - Lectura y comprensión de los textos teóricos asignados.\n   - Discusión en clase sobre los conceptos clave.\n   - Realización de ejercicios prácticos relacionados con los conceptos teóricos.\n\n2. Desarrollo de proyectos prácticos que requieran la aplicación de los conocimientos teóricos:\n   - Asignación de proyectos que involucren la implementación de algoritmos de inteligencia artificial.\n   - Orientación y retroalimentación individualizada durante el desarrollo de los proyectos.\n   - Presentación y discusión de los proyectos en clase.\n\n3. Aprendizaje cooperativo mediante la resolución de problemas prácticos en grupos:\n   - Formación de grupos de estudiantes para resolver problemas prácticos relacionados con la inteligencia artificial.\n   - Asignación de tareas específicas a cada miembro del grupo.\n   - Discusión y presentación de las soluciones en clase.\n\n4. Utilización de la técnica de aula invertida:\n   - Asignación de material teórico para que los estudiantes investiguen y apliquen los conceptos en actividades prácticas en clase.\n   - Discusión y resolución de dudas en grupos pequeños.\n   - Retroalimentación del profesor sobre el trabajo realizado en clase.\n\n5. Realización de experimentos prácticos para comprobar y aplicar los conceptos teóricos:\n   - Diseño de experimentos que demuestren los conceptos teóricos aprendidos.\n   - Implementación y ejecución de los experimentos en entornos de inteligencia artificial.\n   - Análisis y discusión de los resultados obtenidos.\n\n6. Talleres prácticos donde los estudiantes puedan poner en práctica los conocimientos teóricos adquiridos:\n   - Organización de talleres prácticos donde los estudiantes puedan trabajar en la implementación de algoritmos de inteligencia artificial.\n   - Asistencia y orientación individualizada durante los talleres.\n   - Presentación y discusión de los resultados en clase.\n\n7. Estudio de casos prácticos que permitan la aplicación de los conceptos teóricos a situaciones reales:\n   - Análisis de casos prácticos de aplicación de inteligencia artificial en diferentes industrias y áreas.\n   - Discusión y reflexión sobre cómo se aplican los conceptos teóricos a situaciones reales.\n   - Elaboración de informes o presentaciones sobre los casos estudiados.\n\n8. Debates y discusiones sobre temas teóricos y su relevancia en la práctica profesional:\n   - Organización de debates en clase sobre temas teóricos controvertidos o de actualidad en el campo de la inteligencia artificial.\n   - Fomento de la participación activa de los estudiantes en las discusiones.\n   - Reflexión sobre la relevancia de los temas discutidos en la práctica profesional.\n"
  };

  const textarea = document.getElementById("textareaContentActividades");
  const loadingOverlay = document.getElementById("loadingOverlayActividades");
  const generarButton = document.getElementById("generarActividades");

  loadingOverlay.style.display = "flex";
  generarButton.disabled = true;


  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
      redirect: "follow",
    });

    const data = await response.json();
    const content = data.data; // Asumiendo que el JSON tiene una propiedad "data" con el contenido

    formatContent(content);
    adjustTextareaHeightActividades();
  } catch (error) {
    textarea.value = "Error al generar la planificación: " + error.message;
    adjustTextareaHeightActividades();
  } finally {
    loadingOverlay.style.display = "none";
    generarButton.disabled = false;
    document.getElementById("generarActividades").textContent = "Generar";
  }
}

function SpinnerActividades() {
  document.getElementById("loadingOverlayActividades").style.display = "flex";
  document.getElementById("generarActividades").textContent = "Cargando...";
  document.getElementById("textareaContentActividades").value = "Cargando Contenido ...";
  adjustTextareaHeightActividades();
}

function handleButtonClickActividades() {
  SpinnerActividades();
  fetchDataAndFormatActividades();
}

function adjustTextareaHeightActividades() {
  const textarea = document.getElementById("textareaContentActividades");
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function formatContent(content) {
  const weeks = content.split("\n\n");
  let formattedText = "";

  const semanasContainer = document.getElementById("semanasContainer");
  semanasContainer.innerHTML = ""; // Limpiar contenedor

  weeks.forEach((week, index) => {
    if (week.startsWith("Semana")) {
      const parts = week.split("\n- ");
      const header = parts.shift();
      let weekText = `${header}\n`;
      parts.forEach(part => {
        const lines = part.split("\n");
        lines.forEach(line => {
          if (line.startsWith("Tema:")) {
            weekText += `  ${line}\n`;
          } else if (line.startsWith("Subtema:")) {
            weekText += `    ${line}\n`;
          } else if (line.startsWith("Actividad:")) {
            weekText += `      ${line}\n`;
          }
        });
      });
      // Crear y añadir un nuevo textarea por cada semana
      const newTextarea = document.createElement("textarea");
      const textareaId = `textareaContentSemana${index + 1}`;
      newTextarea.id = textareaId;
      newTextarea.cols = 110;
      newTextarea.rows = 10;
      newTextarea.style.overflow = "hidden";
      newTextarea.readOnly = true;
      newTextarea.value = weekText.trim();
      semanasContainer.appendChild(newTextarea);
      adjustTextareaHeight(newTextarea);
      // Guardar contenido en la variable correspondiente
      weekContents[textareaId] = newTextarea.value;
    }
    formattedText += week + "\n\n";
  });
  const textarea = document.getElementById("textareaContentActividades");
  textarea.value = formattedText.trim();
}
function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}
// Función para obtener el contenido de una semana específica
function getWeekContent(weekNumber) {
  const textareaId = `textareaContentSemana${weekNumber}`;
  return weekContents[textareaId];
}
/*FIN ACTIVIDADES*/