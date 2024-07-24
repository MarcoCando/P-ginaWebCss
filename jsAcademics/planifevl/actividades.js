/*ACTIVIDADES*/
const weekContents = {};
async function fetchDataAndFormatActividades() {
  const url = "http://172.191.10.174/api/activities";
  const body = {
    "sesiones": document.getElementById('txtCreditosEvl').value,
    "semanas": document.getElementById('txtNumSemanasEvl').value,
    "subject": document.getElementById('txtAsignaturaEvl').value,
    "modalidad": "False",
    "tipo": document.getElementById('txtDrpTypoEvl').value,
    "area": "False",
    "rdas": document.getElementById('txtRdasEvl').value,       
    "metodologia": document.getElementById('textareaContentMetodologia').value,       
    "planificacion": document.getElementById('textareaContentPlanificacion').value,       
    "naturaleza": document.getElementById('txtDrpNaturalezaS').value,       
    "estrategia_aprendizaje": document.getElementById('textareaContentEstrAprend').value,       
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