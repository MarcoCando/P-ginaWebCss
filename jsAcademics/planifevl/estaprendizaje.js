      /*ESTRATEGIAS DE APRENDIZAJE*/
      async function fetchDataAndFormatEstrAprend() {
        const naturaleza = "Teórico-Práctico";
        const subject = "Fundamentos de Inteligencia Artificial";

        try {
          const url = `http://172.191.10.174/api/estrategias_aprendizaje?naturaleza=${encodeURIComponent(
            naturaleza
          )}&subject=${encodeURIComponent(subject)}`;
          console.log(`Fetching data from URL: ${url}`);
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          console.log(`Data received:`, result);

          if (!result.data) {
            throw new Error(
              `'data' property is undefined in the response data`
            );
          }

          const formatted = formatTextEstrAprend(result.data);
          document.getElementById("textareaContentEstrAprend").value =
            formatted;
        } catch (error) {
          console.error("Error al obtener datos:", error);
          document.getElementById(
            "textareaContentEstrAprend"
          ).value = `Error al obtener datos: ${error.message}`;
        } finally {
          adjustTextareaHeightEstrAprend();
          document.getElementById("loadingOverlayEstrAprend").style.display =
            "none";
        }
      }

      function formatTextEstrAprend(text) {
        if (!text) {
          throw new Error("Invalid text input for formatting");
        }
        let formatted = text.replace(/\\n/g, "\n");
        if (formatted.includes("\n")) {
          formatted += "\n\n";
        }
        return formatted;
      }

      async function SpinnerEstrAprend() {
        document.getElementById("loadingOverlayEstrAprend").style.display =
          "flex";
        document.getElementById("generarEstrAprend").textContent =
          "Cargando...";
        document.getElementById("textareaContentEstrAprend").value =
          "Cargando Contenido ...";
        try {
          await new Promise((resolve) => setTimeout(resolve, 4000));
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        } finally {
          document.getElementById("loadingOverlayEstrAprend").style.display =
            "none";
          document.getElementById("generarEstrAprend").textContent = "Generar";
        }
      }

      function handleButtonClickEstrAprend() {
        SpinnerEstrAprend();
        fetchDataAndFormatEstrAprend();
      }

      function adjustTextareaHeightEstrAprend() {
        const textarea = document.getElementById("textareaContentEstrAprend");
        textarea.style.height = "110px";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
      /*FIN ESTRATEGIAS DE APRENDIZAJE*/