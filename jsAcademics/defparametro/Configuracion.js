//LISTAR CONFIGURACIONES Y COLOCAR LOS DATOS EN INPUTS
// Crear los headers para la solicitud
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "session_id=b62f78c4ee5255ab40060abae738b75b1039047a");

// Definir el cuerpo de la solicitud
const raw = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
        "db": "education_ia",
        "login": "user@hotmail.com",
        "password": "jde.2020"
    }
});

// Configurar las opciones de la solicitud
const requestOptions = {
    method: "POST",  // Cambiado a POST
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

// Realizar la solicitud fetch
fetch("http://40.112.56.227:8080/config/list/", requestOptions)
    .then((response) => response.json())  // Convertir la respuesta a JSON
    .then((data) => {
        // Obtener el resultado que es un string JSON y convertirlo a objeto
        const resultArray = JSON.parse(data.result);

        // Obtener el elemento select
        const selectElement = document.getElementById("drpConfiguraciones");

        // Limpiar las opciones actuales (excepto la predeterminada)
        selectElement.innerHTML = "<option selected>Selecciona una Configuracion</option>";

        // Añadir las nuevas opciones al select
        resultArray.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;     // Asignar el ID como valor de la opción
            option.text = item.name;    // Asignar el nombre como texto visible
            selectElement.appendChild(option);
        });

        // Agregar evento para manejar el cambio de selección
        selectElement.addEventListener("change", (event) => {
            const selectedId = event.target.value; // Obtener el id seleccionado

            // Evitar enviar solicitudes si no se seleccionó una configuración válida
            if (selectedId === "Selecciona una Configuracion") {
                return;
            }

            // URL de la solicitud que toma el ID seleccionado
            const configUrl = `http://40.112.56.227:8080/configuration_initial/get/${selectedId}`;

            // Hacer la solicitud para obtener la configuración inicial
            fetch(configUrl, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    // Obtener y parsear el resultado que es un string JSON
                    const result = JSON.parse(data.result);

                    if (result.status === "success") {
                        const config = result.configuration_initial;

                        // Llenar los campos de entrada con los datos obtenidos
                        document.getElementById("txtNombreConfig").value = config.name;
                        document.getElementById("txtNumeroSemConfig").value = config.semanas;
                        document.getElementById("txtModalidadConfig").value = config.modalidad;
                        document.getElementById("txtRelacionConfig").value = config.relacion;
                        document.getElementById("txtNumMaxCrediConfig").value = config.num_max_credits;
                        document.getElementById("txtNumMaxPerioConfig").value = config.num_max_periods;
                        document.getElementById("txtTipoConfig").value = config.tipo;

                    } else {
                        console.error("Failed to retrieve configuration:", result);
                    }
                })
                .catch((error) => console.error("Error:", error));
        });
    })
    .catch((error) => console.error("Error:", error));
