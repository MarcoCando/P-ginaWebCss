/*METODOLOGIA*/
async function fetchDataAndFormatMetodologia() {
    const rdas =
      "\n1. Diseñar estrategias de marketing que incorporen herramientas de inteligencia artificial para mejorar la segmentación y personalización de mensajes.\n2. Utilizar técnicas de inteligencia artificial para analizar grandes volúmenes de datos y extraer información relevante para la toma de decisiones de marketing.\n3. Implementar soluciones de inteligencia artificial en los procesos de marketing para optimizar la eficiencia operativa y mejorar la experiencia del cliente.";
    const subject = "Fundamentos de Inteligencia Artificial";
    const formacion = "TECNOLOGIA";
    try {
      const url = `http://172.191.10.174/api/metodologia?rdas=${encodeURIComponent(
        rdas
      )}&subject=${encodeURIComponent(
        subject
      )}&formacion=${encodeURIComponent(formacion)}`;
      console.log(`Fetching data from URL: ${url}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(`Data received:`, result);

      if (!result.data) {
        throw new Error(
          `'data' property is undefined in the response data`
        );
      }

      const formatted = formatTextMetodologia(result.data);
      document.getElementById("textareaContentMetodologia").value =
        formatted;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      document.getElementById(
        "textareaContentMetodologia"
      ).value = `Error al obtener datos: ${error.message}`;
    } finally {
      adjustTextareaHeightMetodologia();
      document.getElementById("loadingOverlayMetodologia").style.display =
        "none";
    }
  }

  function formatTextMetodologia(text) {
    if (!text) {
      throw new Error("Invalid text input for formatting");
    }
    let formatted = text.replace(/\\n/g, "\n");
    if (formatted.includes("\n")) {
      formatted += "\n\n";
    }
    return formatted;
  }

  async function SpinnerMetodologia() {
    document.getElementById("loadingOverlayMetodologia").style.display =
      "flex";
    document.getElementById("generarMetodologia").textContent =
      "Cargando...";
    document.getElementById("textareaContentMetodologia").value =
      "Cargando Contenido ...";
    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    } finally {
      document.getElementById("loadingOverlayMetodologia").style.display =
        "none";
      document.getElementById("generarMetodologia").textContent = "Generar";
    }
  }

  function handleButtonClickMetodologia() {
    SpinnerMetodologia();
    fetchDataAndFormatMetodologia();
  }

  function adjustTextareaHeightMetodologia() {
    const textarea = document.getElementById("textareaContentMetodologia");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
  /*FIN METODOLOGIA*/