async function fetchDataAndFormatDesCurso() {
    const data = sessionStorage.getItem('textareaContentResultado');
    const sesiones = document.getElementById('txtCreditosDef').value;
    const semanas = document.getElementById('txtNumSemanas').value;
    const subject = document.getElementById('txtAsignatura').value;
    const tipo = document.getElementById('txtTipoNew').value; // Obtener el valor seleccionado del dropdown
    const definicion = document.getElementById('textareaContentDefCurso').value;
    const modalidad = document.getElementById('txtnewmodalidad').value;

    const params = new URLSearchParams({
        data: data,
        sesiones: sesiones,
        semanas: semanas,
        subject: subject,
        modalidad: modalidad,
        tipo: tipo,
        area: "False",
        definicion: definicion,
        proceso: "desc"
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

        const formatted = formatTextDesCurso(result.data);
        document.getElementById("textareaContentDesCurso").value = formatted;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        document.getElementById("textareaContentDesCurso").value = `Error al obtener datos: ${error.message}`;
    } finally {
        adjustTextareaHeightDesCurso();
        document.getElementById("loadingOverlayDesCurso").style.display = "none";
        document.getElementById('generarDesCurso').textContent = 'Generar';
    }
}

function formatTextDesCurso(text) {
    if (!text) {
        throw new Error("Invalid text input for formatting");
    }
    let formatted = text.replace(/\\n/g, "\n");
    if (formatted.includes("\n")) {
        formatted += "\n\n";
    }
    return formatted;
}

async function SpinnerDesCurso() {
    document.getElementById("loadingOverlayDesCurso").style.display = "flex";
    document.getElementById('generarDesCurso').textContent = 'Cargando...';
    document.getElementById('textareaContentDesCurso').value = 'Cargando Contenido ...';
    await fetchDataAndFormatDesCurso();
}

function handleButtonClickDesCurso() {
    SpinnerDesCurso();
}

function adjustTextareaHeightDesCurso() {
    const textarea = document.getElementById("textareaContentDesCurso");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}
