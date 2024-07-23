/* RUBRICAS */
async function fetchDataAndFormatRubricas() {
  const mecanismo = "Laboratorio práctico";
  const porcentaje = "15%";
  const value = "4"; // Asumiendo que este es el valor que necesitas pasar para el parámetro 'mecanismo'

  try {
    const url = `http://172.191.10.174/api/actividades/rubrica?mecanismo=|4|Laboratorio práctico|15%|`;
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

    const tableHtml = generateTableFromData(result.data);
    document.getElementById("tableContentRubricas").innerHTML = tableHtml;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    document.getElementById("tableContentRubricas").innerHTML = `Error al obtener datos: ${error.message}`;
  } finally {
    document.getElementById("loadingOverlayRubricas").style.display = "none";
    document.getElementById("generarRubricas").textContent = "Generar";
  }
}

function generateTableFromData(data) {
  const lines = data.split("\n");
  let tableHtml = '<table class="table table-bordered table-striped"><thead><tr>';

  // Procesar encabezados
  let headers = lines[2]
    .split("|")
    .map((header) => header.trim())
    .filter((header) => header);
  headers.forEach((header) => {
    tableHtml += `<th>${header}</th>`;
  });
  tableHtml += "</tr></thead><tbody>";

  // Procesar filas de datos
  for (let i = 4; i < lines.length; i++) {
    if (lines[i].trim() === "") continue;
    const columns = lines[i]
      .split("|")
      .map((column) => column.trim())
      .filter((column) => column);
    tableHtml += "<tr>";
    columns.forEach((column) => {
      tableHtml += `<td>${column}</td>`;
    });
    tableHtml += "</tr>";
  }
  tableHtml += "</tbody></table>";
  return tableHtml;
}

async function SpinnerRubricas() {
  document.getElementById("loadingOverlayRubricas").style.display = "flex";
  document.getElementById("generarRubricas").textContent = "Cargando...";
  document.getElementById("tableContentRubricas").innerHTML = "Cargando Contenido ...";
  await fetchDataAndFormatRubricas();
}

function handleButtonClickRubricas() {
  SpinnerRubricas();
}
/* FIN RUBRICAS */
