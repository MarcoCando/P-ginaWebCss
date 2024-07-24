/* PLANIFICACION */
async function fetchDataAndFormatPlanificacion() {
    const data =
    document.getElementById('txtRdasEvl').value;       
    const subject = document.getElementById('txtAsignaturaEvl').value;   
    const semanas = document.getElementById('txtNumSemanasEvl').value;
    const modalidad = false;
    const tipo = document.getElementById('txtDrpTypoEvl').value;
    const numero = document.getElementById('txtCreditosEvl').value;
    const description = document.getElementById('txtDesCursoEvl').value;            
    const rdas = document.getElementById('txtRdasEvl').value;       
    const temas = document.getElementById('textareaContentTemas').value;
       
  
    try {
        const url = `http://172.191.10.174/api/planificacion?data=${encodeURIComponent(
            data
        )}&subject=${encodeURIComponent(
            subject
        )}&semanas=${encodeURIComponent(
            semanas
        )}&modalidad=${encodeURIComponent(
            modalidad
        )}&tipo=${encodeURIComponent(tipo)}&numero=${encodeURIComponent(
            numero
        )}&description=${encodeURIComponent(
            description
        )}&rdas=${encodeURIComponent(rdas)}&temas=${encodeURIComponent(
            temas
        )}`;
        console.log(`Fetching data from URL: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(`Data received:`, result);
  
        if (!result.planificacion) {
            throw new Error(
                `'planificacion' property is undefined in the response data`
            );
        }
  
        const formatted = formatTextPlanificacion(result.planificacion);
        document.getElementById("textareaContentPlanificacion").value = formatted;
        document.getElementById("textareaContentPlanificacionSem").value = formatted;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        const errorMessage = `Error al obtener datos: ${error.message}`;
        document.getElementById("textareaContentPlanificacion").value = errorMessage;
        document.getElementById("textareaContentPlanificacionSem").value = errorMessage;
    } finally {
        adjustTextareaHeightPlanificacion();
        adjustTextareaHeightPlanificacionSem();
        document.getElementById("loadingOverlayPlanificacion").style.display = "none";
        document.getElementById("loadingOverlayPlanificacionSem").style.display = "none";
        document.getElementById("generarPlanificacion").textContent = "Generar";
    }
  }
  
  function formatTextPlanificacion(text) {
    if (!text) {
        throw new Error("Invalid text input for formatting");
    }
    let formatted = text.replace(/\\n/g, "\n");
    if (formatted.includes("\n")) {
        formatted += "\n\n";
    }
    return formatted;
  }
  
  async function SpinnerPlanificacion() {
    document.getElementById("loadingOverlayPlanificacion").style.display = "flex";
    document.getElementById("loadingOverlayPlanificacionSem").style.display = "flex";
    document.getElementById("generarPlanificacion").textContent = "Cargando...";
    document.getElementById("textareaContentPlanificacion").value = "Cargando Contenido ...";
    document.getElementById("textareaContentPlanificacionSem").value = "Cargando Contenido ...";
    // Se puede simular el spinner ejecutando fetchDataAndFormatPlanificacion con un retardo simulado
    await fetchDataAndFormatPlanificacion();
    document.getElementById("loadingOverlayPlanificacion").style.display = "none";
    document.getElementById("loadingOverlayPlanificacionSem").style.display = "none";
    document.getElementById("generarPlanificacion").textContent = "Generar";
  }
  
  function handleButtonClickPlanificacion() {
    SpinnerPlanificacion();
  }
  
  function adjustTextareaHeightPlanificacion() {
    const textarea = document.getElementById("textareaContentPlanificacion");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
  
  function adjustTextareaHeightPlanificacionSem() {
    const textarea = document.getElementById("textareaContentPlanificacionSem");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
  /* FIN PLANIFICACION */
  