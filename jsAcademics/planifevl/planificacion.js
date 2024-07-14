      /*PLANIFICACION*/
      async function fetchDataAndFormatPlanificacion() {
        const data =
          "\n1. Diseñar estrategias de marketing que incorporen herramientas de inteligencia artificial para mejorar la segmentación y personalización de mensajes.\n2. Utilizar técnicas de inteligencia artificial para analizar grandes volúmenes de datos y extraer información relevante para la toma de decisiones de marketing.\n3. Implementar soluciones de inteligencia artificial en los procesos de marketing para optimizar la eficiencia operativa y mejorar la experiencia del cliente.";
        const subject = "Fundamentos de Inteligencia Artificial";
        const semanas = 16;
        const modalidad = false;
        const tipo = "Periodo Academico";
        const numero = 3;
        const description =
          "La asignatura de Fundamentos de Inteligencia Artificial es un curso teórico-práctico que se centra en los principios básicos de la IA y su aplicación en el campo del marketing. Los estudiantes explorarán una amplia gama de temas, como algoritmos de aprendizaje automático, redes neuronales y procesamiento del lenguaje natural, así como también tecnologías emergentes como la inteligencia artificial explicativa y ética. A través de casos de estudio de la vida real, los estudiantes aprenderán a utilizar herramientas y enfoques contemporáneos para comprender y aplicar la IA en diversas industrias. Los bloques temáticos abarcan desde la introducción de la IA en el marketing hasta la implementación de soluciones de IA en procesos de marketing, optimización de la eficiencia operativa y mejora de la experiencia del cliente. Se busca formar a los estudiantes en habilidades prácticas y conocimientos teóricos para aplicar la IA de manera efectiva en el campo del marketing.";
        const rdas =
          "\n1. Diseñar estrategias de marketing que incorporen herramientas de inteligencia artificial para mejorar la segmentación y personalización de mensajes.\n2. Utilizar técnicas de inteligencia artificial para analizar grandes volúmenes de datos y extraer información relevante para la toma de decisiones de marketing.\n3. Implementar soluciones de inteligencia artificial en los procesos de marketing para optimizar la eficiencia operativa y mejorar la experiencia del cliente.";
        const temas =
          "1. Introducción a la inteligencia artificial y su aplicación en el marketing.\n2. Fundamentos de algoritmos de aprendizaje automático.\n3. Principios básicos de las redes neuronales.\n4. Introducción al procesamiento del lenguaje natural (PLN) en marketing.\n5. Herramientas y plataformas de IA para análisis de datos en marketing.\n6. Métodos de segmentación de clientes utilizando IA.\n7. Personalización de mensajes de marketing con IA.\n8. Análisis predictivo en marketing.\n9. Aplicación de chatbots en la experiencia del cliente.\n10. Recomendadores inteligentes en el comercio electrónico.\n11. Optimización de campañas publicitarias con IA.\n12. Uso de IA para la detección de tendencias de mercado.\n13. Impacto de la inteligencia artificial en el comportamiento del consumidor.\n14. Inteligencia artificial explicativa en el contexto del marketing.\n15. Ética y privacidad de datos en el marketing digital con IA.\n16. Estrategias para la implementación de la IA en los procesos de marketing.";

        try {
          const url = `http://172.191.10.174/api/planificacion?data=${encodeURIComponent(
            data
          )}&subject=${encodeURIComponent(
            subject
          )}&semanas=${encodeURIComponent(
            semanas
          )}&modalidad=${encodeURIComponent(
            modalidad
          )}&tipo=${encodeURIComponent(tipo)}&numero=${encodeURIComponent(
            numero
          )}&description=${encodeURIComponent(
            description
          )}&rdas=${encodeURIComponent(rdas)}&temas=${encodeURIComponent(
            temas
          )}`;
          console.log(`Fetching data from URL: ${url}`);
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          console.log(`Data received:`, result);

          if (!result.planificacion) {
            throw new Error(
              `'planificacion' property is undefined in the response data`
            );
          }

          const formatted = formatTextPlanificacion(result.planificacion);
          document.getElementById("textareaContentPlanificacion").value =
            formatted;
        } catch (error) {
          console.error("Error al obtener datos:", error);
          document.getElementById(
            "textareaContentPlanificacion"
          ).value = `Error al obtener datos: ${error.message}`;
        } finally {
          adjustTextareaHeightPlanificacion();
          document.getElementById("loadingOverlayPlanificacion").style.display =
            "none";
        }
      }

      function formatTextPlanificacion(text) {
        if (!text) {
          throw new Error("Invalid text input for formatting");
        }
        let formatted = text.replace(/\\n/g, "\n");
        if (formatted.includes("\n")) {
          formatted += "\n\n";
        }
        return formatted;
      }

      async function SpinnerPlanificacion() {
        document.getElementById("loadingOverlayPlanificacion").style.display =
          "flex";
        document.getElementById("generarPlanificacion").textContent =
          "Cargando...";
        document.getElementById("textareaContentPlanificacion").value =
          "Cargando Contenido ...";
        try {
          await new Promise((resolve) => setTimeout(resolve, 4000));
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        } finally {
          document.getElementById("loadingOverlayPlanificacion").style.display =
            "none";
          document.getElementById("generarPlanificacion").textContent =
            "Generar";
        }
      }

      function handleButtonClickPlanificacion() {
        SpinnerPlanificacion();
        fetchDataAndFormatPlanificacion();
      }

      function adjustTextareaHeightPlanificacion() {
        const textarea = document.getElementById(
          "textareaContentPlanificacion"
        );
        textarea.style.height = "110px";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
      /*FIN PLANIFICACION*/