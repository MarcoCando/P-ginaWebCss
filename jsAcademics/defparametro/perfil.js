/*PERFIL DE EGRESO*/
async function fetchDataAndFormatPerfil() {
    /*const rdaper = "1. Integra técnicas avanzadas de inteligencia artificial para desarrollar estrategias de marketing innovadoras y efectivas. 2. Evalúa la eficacia de las campañas de marketing personalizadas mediante el uso de algoritmos y análisis de datos para optimizar su rendimiento. 3. Diseña y ejecuta estrategias de marketing basadas en inteligencia artificial para optimizar la adquisición y retención de clientes de manera rentable.";
    const enfoque = "MARKETING EN INTELIGENCIA ARTIFICIAL";
    const nameper = "MARKETING CON INTELIGENCIA ARTIFICIAL";*/

    const rdaper = document.getElementById('textareaContent').value;
    const enfoque = document.getElementById('txtPrograma').value;
    const nameper = document.getElementById('txtPrograma').value;

    try {
        const url = `http://172.191.10.174/api/perfil/programa?rda=${rdaper}&enfoque=${enfoque}&name=${nameper}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const formatted = formatTextPerfil(data.name);
        document.getElementById("textareaContentPerfil").value = formatted;
        adjustTextareaHeightPerfil();
        document.getElementById("loadingOverlayPerfil").style.display = "none";
    } catch (error) {
        console.error("Error al obtener datos:", error);
        document.getElementById("textareaContentPerfil").value = `Error al obtener datos: ${error.message}`;
        adjustTextareaHeightPerfil();
        document.getElementById("loadingOverlayPerfil").style.display = "none";
    }
}
function formatTextPerfil(text) {
    let formatted = text.replace(/\\n/g, "\n");
    if (formatted.includes("\n")) {
        formatted += "\n\n";
    }
    return formatted;
}
async function SpinnerPerf() {
    document.getElementById("loadingOverlayPerfil").style.display = "flex";
    document.getElementById('generarPerfil').textContent = 'Cargando...';
    document.getElementById('textareaContentPerfil').value = 'Cargando Contenido ...';
    try {
        await new Promise((resolve) => setTimeout(resolve, 4000));
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    } finally {
        document.getElementById("loadingOverlayPerfil").style.display = "none";
        document.getElementById('generarPerfil').textContent = 'Generar';
    }
}
function handleButtonClickPerfil() {
    SpinnerPerf();
    fetchDataAndFormatPerfil();
}
function adjustTextareaHeightPerfil() {
    const textarea = document.getElementById("textareaContentPerfil");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}
/*FIN DE PERFIL DE EGRESO*/
