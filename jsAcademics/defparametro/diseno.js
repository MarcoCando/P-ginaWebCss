/* DISEÑO CURRICULAR */
let programData = null;
let loadingDiseño = false;

async function fetchData() {
    try {
        const url = "http://172.191.10.174/api/diseno/programa";
        const rdasContent = document.getElementById('textareaContent').value;
        const creditosString = document.getElementById('txtNumMaxCrediConfig').value;
        const creditos = parseInt(creditosString, 10);
        const body = {
            rdas: rdasContent,
            creditos: creditos
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
    let tableHTML = sessionStorage.getItem('tableContainer');

    if (tableHTML) {
        // Renderizar la tabla desde sessionStorage
        document.getElementById("tableContainer").innerHTML = tableHTML;
    } else if (programData) {
        // Renderizar la tabla desde programData si no hay datos en sessionStorage
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
          <td style="text-align: center;"><input type="text" value="${number}" data-index="${index}" class="input-number"></td>
          <td><input type="text" value="${description}" data-index="${index}" class="input-description"></td>
          <td style="text-align: center;"><input type="number" value="${credits}" data-index="${index}" class="input-credits"></td>
          <td style="text-align: center;">
            <button class="btn btn-sm btn-primary" data-index="${index}" data-description="${description}">Crear</button>
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

        tableHTML = `
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

    // Volver a enlazar los eventos de los botones
    rebindButtonEvents();
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

// Funciones para manejar los clics en los botones "Generar" y "Ver"
function handleGenerar(event) {
    event.preventDefault(); // Prevenir comportamiento de recarga
    const index = event.target.getAttribute('data-index');
    const description = document.querySelector(`.input-description[data-index='${index}']`).value;

    if (description) {
        console.log("Descripción seleccionada para generar:", description);
        // Guardar la tabla editada en sessionStorage
        const tableHTML = document.getElementById('tableContainer').innerHTML;
        sessionStorage.setItem('tableContainer', tableHTML);
        // Guardar la descripción seleccionada en sessionStorage
        sessionStorage.setItem("selectedDescription", description);
        // Redirigir a defparametro.html
        window.location.href = "defparametro.html";
    }
}


function handleVer(event) {
    event.preventDefault(); // Prevenir comportamiento de recarga
    const index = event.target.getAttribute('data-index');
    const description = event.target.getAttribute('data-description');

    if (description) {
        console.log("Descripción seleccionada para ver:", description);
        // Aquí puedes agregar la lógica para manejar la descripción seleccionada
    }
}

// Función para actualizar sessionStorage con los valores actuales de los inputs
function updateSessionStorageWithCurrentValues() {
    // Obtener todos los inputs de la tabla
    const numberInputs = document.querySelectorAll('.input-number');
    const descriptionInputs = document.querySelectorAll('.input-description');
    const creditsInputs = document.querySelectorAll('.input-credits');

    // Asegurarse de que programData sea un array
    programData = programData || { name: [] };

    // Actualizar programData con los valores de los inputs
    numberInputs.forEach(input => {
        const index = input.getAttribute('data-index');
        programData.name[index] = programData.name[index] || {}; // Asegurarse de que el objeto existe
        programData.name[index].number = input.value;
    });

    descriptionInputs.forEach(input => {
        const index = input.getAttribute('data-index');
        programData.name[index] = programData.name[index] || {}; // Asegurarse de que el objeto existe
        programData.name[index].description = input.value;
    });

    creditsInputs.forEach(input => {
        const index = input.getAttribute('data-index');
        programData.name[index] = programData.name[index] || {}; // Asegurarse de que el objeto existe
        programData.name[index].credits = input.value;
    });

    // Guardar la tabla editada en sessionStorage
    sessionStorage.setItem('programData', JSON.stringify(programData));
}

// Restaurar el contenido de la tabla desde sessionStorage al cargar la página
/*window.onload = function () {
    const savedTableHTML = sessionStorage.getItem('tableContainer');
    const savedProgramData = sessionStorage.getItem('programData');

    if (savedTableHTML) {
        document.getElementById('tableContainer').innerHTML = savedTableHTML;
        if (savedProgramData) {
            programData = JSON.parse(savedProgramData);
            // Opcionalmente, puedes re-renderizar la tabla si es necesario
            // renderTable();
        }
        rebindButtonEvents(); // Volver a enlazar los eventos de los botones
    } else {
        handleButtonClickDiseño();
    }
};*/

function rebindButtonEvents() {
    const createButtons = document.querySelectorAll('.btn-primary');
    const viewButtons = document.querySelectorAll('.btn-secondary');
    const inputFields = document.querySelectorAll('.input-number, .input-description, .input-credits');

    createButtons.forEach((button) => {
        button.addEventListener('click', handleGenerar);
    });

    viewButtons.forEach((button) => {
        button.addEventListener('click', handleVer);
    });

    inputFields.forEach((input) => {
        input.addEventListener('change', handleInputChange);
    });
}

function handleInputChange(event) {
    const index = event.target.getAttribute('data-index');
    const value = event.target.value;
    const fieldType = event.target.className;

    if (fieldType.includes('input-number')) {
        programData.name[index] = programData.name[index] || {}; // Asegurarse de que el objeto existe
        programData.name[index].number = value;
    } else if (fieldType.includes('input-description')) {
        programData.name[index] = programData.name[index] || {}; // Asegurarse de que el objeto existe
        programData.name[index].description = value;
    } else if (fieldType.includes('input-credits')) {
        programData.name[index] = programData.name[index] || {}; // Asegurarse de que el objeto existe
        programData.name[index].credits = value;
    }

    // Actualizar y guardar la tabla en sessionStorage
    sessionStorage.setItem('programData', JSON.stringify(programData));
}
window.onload = function () {
    renderTable(); // Renderizar la tabla al cargar la página
};

/* FIN DE DISEÑO CURRICULAR */
