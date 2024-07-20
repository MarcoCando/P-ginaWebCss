async function fetchDataAndFormatDefCurso() {
    const datas = document.getElementById('txtAsignatura').value;

    try {
        const url = `http://172.191.10.174/api/subject_definicion?data=${encodeURIComponent(datas)}`;
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

        const formatted = formatTextDefCurso(result.data);
        document.getElementById("textareaContentDefCurso").value = formatted;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        document.getElementById("textareaContentDefCurso").value = `Error al obtener datos: ${error.message}`;
    } finally {
        adjustTextareaHeightDefCurso();
        document.getElementById("loadingOverlayDefCurso").style.display = "none";
    }
}

function formatTextDefCurso(text) {
    if (!text) {
        throw new Error("Invalid text input for formatting");
    }
    let formatted = text.replace(/\\n/g, "\n");
    if (formatted.includes("\n")) {
        formatted += "\n\n";
    }
    return formatted;
}

async function SpinnerDefCurso() {
    document.getElementById("loadingOverlayDefCurso").style.display = "flex";
    document.getElementById('generarDefCurso').textContent = 'Cargando...';
    document.getElementById('textareaContentDefCurso').value = 'Cargando Contenido ...';
    try {
        await new Promise((resolve) => setTimeout(resolve, 4000));
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    } finally {
        document.getElementById("loadingOverlayDefCurso").style.display = "none";
        document.getElementById('generarDefCurso').textContent = 'Generar';
    }
}

function handleButtonClickDefCurso() {
    SpinnerDefCurso();
    fetchDataAndFormatDefCurso();
}

function adjustTextareaHeightDefCurso() {
    const textarea = document.getElementById("textareaContentDefCurso");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}
