/*EVALUACION*/
async function fetchAndDisplayEvaluacion() {
  const url = "http://172.191.10.174/api/activities/evaluacion/";
  const body = {
    parte1: document.getElementById('txtActividades1').value,
    parte2: document.getElementById('txtActividades2').value,
    parte3: document.getElementById('txtActividades3').value,
    parte4: document.getElementById('txtActividades4').value,
    porcentajes: document.getElementById('txtPorcentaje').value,
  };

  document.getElementById("loadingOverlayEvaluacion").style.display = "flex";
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

  let concatenatedContent = '';

  Object.keys(data).forEach(part => {
    const { name, progreso, week } = data[part];

    concatenatedContent += `Parte: ${part}\nNombre: ${name}\nProgreso: ${progreso}\nSemana: ${week}\n\n`;

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

  document.getElementById("txtEvaluacionEvl").value = concatenatedContent;
}

function handleButtonClickEvaluacion() {
  fetchAndDisplayEvaluacion();
}
/*FIN EVALUACION*/
