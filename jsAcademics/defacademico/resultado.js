async function fetchDataAndFormatResultado() {
    const datas = sessionStorage.getItem('textareaContent');
    const numeros = document.getElementById('txtCreditosDef').value; 
    const semana = document.getElementById('txtNumSemanas').value;
    const subject = document.getElementById('txtAsignatura').value;
    const tipo = document.getElementById('drpTipo').value; // Obtener el valor seleccionado del dropdown
    
    /*"1.Diseñar estrategias de marketing que integren herramientas de inteligencia artificial para mejorar la segmentación de mercado.\n5.Utilizar herramientas de inteligencia artificial para optimizar los procesos de marketing y mejorar la eficiencia operativa.";*/
    
    const params = new URLSearchParams({
        data: datas,
        numero: numeros, 
        semanas: semana,
        subject: subject,
        modalidad: false,
        tipo: tipo,
        area: false,
        proceso: "rdas"
       /* numero: 3,
        semanas: 16,
        subject: "Fundamentos de Inteligencia Artificial",
        modalidad: false,
        tipo: "Periodo Academico",
        area: false,
        proceso: "rdas"*/
    });

    try {
        const url = `http://172.191.10.174/api/sequential?${params.toString()}`;
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

        const formatted = formatTextResultado(result.data);
        document.getElementById("textareaContentResultado").value = formatted;
        populateTable(formatted);
    } catch (error) {
        console.error("Error al obtener datos:", error);
        document.getElementById("textareaContentResultado").value = `Error al obtener datos: ${error.message}`;
    } finally {
        adjustTextareaHeightResultado();
        document.getElementById("loadingOverlayResultado").style.display = "none";
        document.getElementById("loadingOverlayTable").style.display = "none";
    }
}

function formatTextResultado(text) {
    if (!text) {
        throw new Error("Invalid text input for formatting");
    }
    let formatted = text.replace(/\\n/g, "\n");
    if (formatted.includes("\n")) {
        formatted += "\n\n";
    }
    return formatted;
}

function populateTable(text) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Clear existing rows

    const rows = text.split("\n").filter(row => row.trim() !== "");
    rows.forEach(row => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.scope = "row";
        td.textContent = row;
        tr.appendChild(td);
        tableBody.appendChild(tr);
    });
}

async function SpinnerResultado() {
    document.getElementById("loadingOverlayResultado").style.display = "flex";
    document.getElementById("loadingOverlayTable").style.display = "flex";
    document.getElementById('generarResultado').textContent = 'Cargando...';
    document.getElementById('textareaContentResultado').value = 'Cargando Contenido ...';
    try {
        await new Promise((resolve) => setTimeout(resolve, 4000));
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    } finally {
        document.getElementById("loadingOverlayResultado").style.display = "none";
        document.getElementById("loadingOverlayTable").style.display = "none";
        document.getElementById('generarResultado').textContent = 'Generar';
    }
}

function handleButtonClickResultado() {
    SpinnerResultado();
    fetchDataAndFormatResultado();
}

function adjustTextareaHeightResultado() {
    const textarea = document.getElementById("textareaContentResultado");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}
