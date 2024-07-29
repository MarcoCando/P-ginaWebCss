/* DISEÑO CURRICULAR */
let programData = null;
let loadingDiseño = false;

async function fetchData() {
    try {
        const url = "http://172.191.10.174/api/diseno/programa";
        const rdasContent = document.getElementById('textareaContent').value;

        const body = {
            rdas: rdasContent
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }

        const data = await response.json();
        programData = data;
        renderTable();
    } catch (error) {
        console.error("Error al obtener datos:", error);
        document.getElementById("tableContainer").innerHTML = "Error al obtener los datos";
    }
}

function renderTable() {
    if (!programData) return;

    let shouldStopRendering = false;
    let totalCredits = 0;

    const rows = programData.name
        .split("\n")
        .filter(Boolean)
        .slice(1, -1)
        .map((item, index) => {
            if (shouldStopRendering) return null;

            if (item === "\\n\\n") {
                shouldStopRendering = true;
                return null;
            }

            const parts = item.split(" - ");
            const number = extractNumber(parts[0]);
            const description = extractDescription(parts[0]);
            const credits = extractCredits(parts[1]);
            if (!isNaN(parseInt(credits))) {
                totalCredits += parseInt(credits);
            }
            return `
    <tr>
      <td style="text-align: center;">${number}</td>
      <td>${description}</td>
      <td style="text-align: center;">${credits}</td>
      <td style="text-align: center;">
        <button onclick="handleGenerar(event, ${index})" class="btn btn-sm btn-primary" data-description="${description}">Crear</button>
        <button onclick="handleVer(event, ${index})" class="btn btn-sm btn-secondary">Ver</button>
      </td>
    </tr>
  `;
        })
        .filter(Boolean)
        .join("");

    const totalRow = `
<tr>
  <td colspan="3" style="text-align: center;">Total Créditos</td>
  <td style="text-align: center;">${totalCredits}</td>
</tr>
`;

    const tableHTML = `
<table class="table table-hover table-bordered" style="font-size: 12px;">
  <thead style="background-color: #cacaca; text-align: center; color: #3d3d3dc9;">
    <tr>
      <th>Number</th>
      <th>Nombre Asignatura</th>
      <th>Créditos</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>${rows}${totalRow}</tbody>
</table>
`;

    document.getElementById("tableContainer").innerHTML = tableHTML;
    initializeButtonEvents();
}

function extractNumber(text) {
    const match = text.match(/\{?\d+\}?/);
    return match ? match[0] : "";
}

function extractDescription(text) {
    const match = text.match(/\.\s*([^-]+)\s*-?/);
    return match ? match[1].trim() : "";
}

function extractCredits(text) {
    const match = text && text.match(/\d+/);
    return match ? match[0] : "";
}

async function SpinnerDiseño() {
    document.getElementById("loadingOverlayDiseño").style.display = "flex";
    try {
        await new Promise((resolve) => setTimeout(resolve, 4000));
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    } finally {
        document.getElementById("loadingOverlayDiseño").style.display = "none";
    }
}

async function handleButtonClickDiseño() {
    if (!loadingDiseño) {
        loadingDiseño = true;
        SpinnerDiseño();
        await fetchData();
        loadingDiseño = false;
    }
}

function initializeButtonEvents() {
    const crearButtons = document.querySelectorAll('button.btn-primary');
    crearButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => handleGenerar(event, index));
    });

    const verButtons = document.querySelectorAll('button.btn-secondary');
    verButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => handleVer(event, index));
    });
}

// Funciones para manejar los clics en los botones "Generar" y "Ver"
function handleGenerar(event, index) {
    event.preventDefault(); // Prevenir comportamiento de recarga

    if (programData && programData.name) {
        const rows = programData.name.split("\n").filter(Boolean).slice(1, -1);
        const selectedRow = rows[index];
        const description = extractDescription(selectedRow);

        if (description) {
            console.log("Descripción seleccionada para generar:", description);
            // Guardar la descripción en sessionStorage
            sessionStorage.setItem("selectedDescription", description);
            // Redirigir a defparametro.html
            window.location.href = "defparametro.html";
        }
    }
}

function handleVer(event, index) {
    event.preventDefault(); // Prevenir comportamiento de recarga

    if (programData && programData.name) {
        const rows = programData.name.split("\n").filter(Boolean).slice(1, -1);
        const selectedRow = rows[index];
        const description = extractDescription(selectedRow);

        if (description) {
            console.log("Descripción seleccionada para ver:", description);
            // Aquí puedes agregar la lógica para manejar la descripción seleccionada
        }
    }
}

// Inicializar eventos de botones al cargar la página
document.addEventListener('DOMContentLoaded', initializeButtonEvents);

/* FIN DE DISEÑO CURRICULAR */
