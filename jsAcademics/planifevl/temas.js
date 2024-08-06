/* TEMAS */
async function fetchDataAndFormatTemas() {
  /*  const subject = "Fundamentos de Inteligencia Artificial";
    const subjectDescription =
      "La asignatura de Fundamentos de Inteligencia Artificial es un curso teórico-práctico que se centra en los principios básicos de la IA y su aplicación en el campo del marketing. Los estudiantes explorarán una amplia gama de temas, como algoritmos de aprendizaje automático, redes neuronales y procesamiento del lenguaje natural, así como también tecnologías emergentes como la inteligencia artificial explicativa y ética. A través de casos de estudio de la vida real, los estudiantes aprenderán a utilizar herramientas y enfoques contemporáneos para comprender y aplicar la IA en diversas industrias. Los bloques temáticos abarcan desde la introducción de la IA en el marketing hasta la implementación de soluciones de IA en procesos de marketing, optimización de la eficiencia operativa y mejora de la experiencia del cliente. Se busca formar a los estudiantes en habilidades prácticas y conocimientos teóricos para aplicar la IA de manera efectiva en el campo del marketing.";
    const rdas =
      "\n1. Diseñar estrategias de marketing que incorporen herramientas de inteligencia artificial para mejorar la segmentación y personalización de mensajes.\n2. Utilizar técnicas de inteligencia artificial para analizar grandes volúmenes de datos y extraer información relevante para la toma de decisiones de marketing.\n3. Implementar soluciones de inteligencia artificial en los procesos de marketing para optimizar la eficiencia operativa y mejorar la experiencia del cliente.";
*/
  const subject = document.getElementById('txtAsignaturaEvl').value;
  const subjectDescription = document.getElementById('txtDesCursoEvl').value;
  const rdas = document.getElementById('txtRdasEvl').value;

  try {
    const url = `http://172.191.10.174/api/temas?subject=${encodeURIComponent(
      subject
    )}&subject_description=${encodeURIComponent(
      subjectDescription
    )}&rdas=${encodeURIComponent(rdas)}`;
    console.log(`Fetching data from URL: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(`Data received:`, result);

    if (!result.data) {
      throw new Error(`'data' property is undefined in the response data`);
    }

    const formatted = formatTextTemas(result.data);
    document.getElementById("textareaContentTemas").value = formatted;
    document.getElementById("txtTemasEvl").value = formatted; // Update input as well
  } catch (error) {
    console.error("Error al obtener datos:", error);
    document.getElementById("textareaContentTemas").value = `Error al obtener datos: ${error.message}`;
    document.getElementById("txtTemasEvl").value = `Error al obtener datos: ${error.message}`; // Update input as well
  } finally {
    adjustTextareaHeightTemas();
    document.getElementById("loadingOverlayTemas").style.display = "none";
  }
}

function formatTextTemas(text) {
  if (!text) {
    throw new Error("Invalid text input for formatting");
  }
  let formatted = text.replace(/\\n/g, "\n");
  if (formatted.includes("\n")) {
    formatted += "\n\n";
  }
  return formatted;
}

async function SpinnerTemas() {
  document.getElementById("loadingOverlayTemas").style.display = "flex";
  document.getElementById("generarTemas").textContent = "Cargando...";
  document.getElementById("textareaContentTemas").value = "Cargando Contenido ...";
  document.getElementById("txtTemasEvl").value = "Cargando Contenido ..."; // Update input as well
  try {
    await new Promise((resolve) => setTimeout(resolve, 4000));
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  } finally {
    document.getElementById("loadingOverlayTemas").style.display = "none";
    document.getElementById("generarTemas").textContent = "Generar";
  }
}

function handleButtonClickTemas() {
  SpinnerTemas();
  fetchDataAndFormatTemas();
}

function adjustTextareaHeightTemas() {
  const textarea = document.getElementById("textareaContentTemas");
  textarea.style.height = "110px";
  textarea.style.height = `${textarea.scrollHeight}px`;
}
/* FIN DE TEMAS */
