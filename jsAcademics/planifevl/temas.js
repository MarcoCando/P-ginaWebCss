/*TEMAS*/
async function fetchDataAndFormatTemas() {
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
        throw new Error(
          `'data' property is undefined in the response data`
        );
      }

      const formatted = formatTextTemas(result.data);
      document.getElementById("textareaContentTemas").value = formatted;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      document.getElementById(
        "textareaContentTemas"
      ).value = `Error al obtener datos: ${error.message}`;
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
    document.getElementById("textareaContentTemas").value =
      "Cargando Contenido ...";
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
  /*FIN DE TEMAS*/