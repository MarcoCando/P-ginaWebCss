/*RESULTADOS DE APRENDIZAJE*/
async function fetchDataAndFormatRDA() {
    const rda = document.getElementById('txtEnfoque').value;
    const creditos = document.getElementById('txtNumber').value;
    const name = document.getElementById('txtPrograma').value;

    /*const rda = "comunicacion";
    const creditos = 3;
    const name = "MARKETING CON INTELIGENCIA ARTIFICIAL";*/

    try {
        const url = `http://172.191.10.174/api/rda/programa?rda=${encodeURIComponent(rda)}&creditos=${encodeURIComponent(creditos)}&name=${encodeURIComponent(name)}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const formatted = formatTextRDA(data.name);
        document.getElementById("textareaContent").value = formatted;
        adjustTextareaHeight();
        document.getElementById("loadingOverlay").style.display = "none";

        sessionStorage.setItem('textareaContent', formatted);


    } catch (error) {
        console.error("Error al obtener datos:", error);
        document.getElementById("textareaContent").value = `Error al obtener datos: ${error.message}`;
        adjustTextareaHeight();
        document.getElementById("loadingOverlay").style.display = "none";
    }
}
function adjustTextareaHeight() {
    const textarea = document.getElementById("textareaContent");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}
function formatTextRDA(text) {
    let formatted = text.replace(/\\n/g, "\n");
    if (formatted.includes("\n")) {
        formatted += "\n";
    }
    return formatted;
}
async function SpinnerRDA() {
    document.getElementById("loadingOverlay").style.display = "flex";
    document.getElementById('generar').textContent = 'Cargando...';
    document.getElementById('textareaContent').value = 'Cargando Contenido ...';

    try {
        await new Promise((resolve) => setTimeout(resolve, 1200));
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    } finally {
        document.getElementById("loadingOverlay").style.display = "none";

        document.getElementById("textareaContent").style.display = "flex";
        document.getElementById('generar').textContent = 'Generar';

    }
}
function handleButtonClick() {
    SpinnerRDA();
    fetchDataAndFormatRDA();
}
/*FIN DE RESULTADO DE APRENDIZAJE*/
