async function fetchDataAndFormatDesCurso() {
    const data = `
1. Diseñar estrategias de marketing que incorporen herramientas de inteligencia artificial para mejorar la segmentación y personalización de mensajes.
2. Utilizar técnicas de inteligencia artificial para analizar grandes volúmenes de datos y extraer información relevante para la toma de decisiones de marketing.
3. Implementar soluciones de inteligencia artificial en los procesos de marketing para optimizar la eficiencia operativa y mejorar la experiencia del cliente.`;

    const params = new URLSearchParams({
        data: data,
        sesiones: 3,
        semanas: 16,
        subject: "Fundamentos de Inteligencia Artificial",
        modalidad: "False",
        tipo: "Periodo Academico",
        area: "False",
        definicion: "Fundamentos de Inteligencia Artificial es una asignatura que explora los principios básicos de la IA, incluyendo algoritmos de aprendizaje automático, redes neuronales y procesamiento del lenguaje natural. También se examinan tecnologías emergentes como la inteligencia artificial explicativa y ética. Se enfoca en aplicaciones prácticas e incluye casos de estudio de la vida real. Se promueve el uso de herramientas y enfoques contemporáneos para enseñar y comprender la IA en diversas industrias.",
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
    try {
        await new Promise((resolve) => setTimeout(resolve, 4000));
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    } finally {
        document.getElementById("loadingOverlayDesCurso").style.display = "none";
        document.getElementById('generarDesCurso').textContent = 'Generar';
    }
}

function handleButtonClickDesCurso() {
    SpinnerDesCurso();
    fetchDataAndFormatDesCurso();
}

function adjustTextareaHeightDesCurso() {
    const textarea = document.getElementById("textareaContentDesCurso");
    textarea.style.height = "110px";
    textarea.style.height = `${textarea.scrollHeight}px`;
}
