/*DISEÑO CURRICULAR*/
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
        <button onclick="handleGenerar(${index})" class="btn btn-sm btn-primary">Generar</button>
        <button onclick="handleVer(${index})" class="btn btn-sm btn-secondary">Ver</button>
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
}

function extractNumber(text) {
    const match = text.match(/\{?\d+\}?/);
    return match ? match[0] : "";
}

function extractDescription(text) {
    const description = text.replace(/\{?\d+\}?\.\s*/, "");
    const index = description.indexOf("\\n\\n");
    return index !== -1 ? description.substring(0, index) : description;
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

// Funciones para manejar los clics en los botones "Generar" y "Ver"
function handleGenerar(index) {
    // Aquí puedes añadir la lógica para el botón "Generar" específico de cada fila
    console.log(`Generar para el elemento con índice ${index}`);
}

function handleVer(index) {
    // Aquí puedes añadir la lógica para el botón "Ver" específico de cada fila
    console.log(`Ver para el elemento con índice ${index}`);
}

/*FIN DE DISEÑO CURRICULAR*/
