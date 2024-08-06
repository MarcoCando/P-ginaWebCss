//LISTAR CONFIGURACIONES - Y COLOCARLAS EN TABLAS CON EL BOTON VER
function obtenerDatos() {
    const parametro = document.getElementById('txtidconfig').value;
    const url = `http://40.112.56.227:8080/configuration_initial/get/${parametro}`;
    const body = {
        "jsonrpc": "2.0",
        "params": {
            "db": "education_ia",
            "login": "user@hotmail.com",
            "password": "jde.2020"
        }
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                const resultData = JSON.parse(data.result).configuration_initial;
                llenarTabla([resultData]);
            } else {
                console.error('Error en la respuesta:', data);
            }
        })
        .catch(error => console.error('Error:', error));
}

function llenarTabla(datos) {
    const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    datos.forEach(item => {
        const fila = tabla.insertRow();
        fila.insertCell().innerText = item.id;
        fila.insertCell().innerText = item.name;
        fila.insertCell().innerText = item.num_max_credits;
        fila.insertCell().innerText = item.num_max_periods;
        fila.insertCell().innerText = item.tipo;
        fila.insertCell().innerText = item.semanas;
        fila.insertCell().innerText = item.modalidad;
        fila.insertCell().innerText = item.relacion;
    });
}

// Configurar los encabezados
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// Cuerpo de la solicitud
const raw = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
        "db": "education_ia",
        "login": "user@hotmail.com",
        "password": "jde.2020"
    }
});

// Opciones de la solicitud
const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

// Función para crear la tabla
function createTable(data) {
    // Crear la tabla con tus estilos personalizados
    let table = '<table class="table table-hover table-bordered" style="font-size: 12px;">';
    table += '<thead style="background-color: #cacaca; text-align: center; color: #3d3d3dc9;"><tr><th>ID</th><th>Name</th><th>Action</th></tr></thead><tbody>';

    // Añadir filas a la tabla
    data.forEach(item => {
        table += `<tr><td>${item.id}</td><td>${item.name}</td><td><button class="btn view-btn btn-info" data-id="${item.id}">Ver</button></td></tr>`;
    });

    table += '</tbody></table>';
    return table;
}

// Realizar la solicitud
fetch("http://40.112.56.227:8080/config/list/", requestOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parsear la respuesta como JSON
    })
    .then((result) => {
        console.log(result);

        // Asegurarse de que el resultado sea un objeto con la clave 'result'
        if (result && result.result) {
            // Parsear la cadena JSON contenida en 'result.result'
            const data = JSON.parse(result.result);

            // Crear y colocar la tabla en el DOM
            const tableHTML = createTable(data);
            document.getElementById('resultTable').innerHTML = tableHTML;

            // Añadir event listeners a los botones "Ver"
            document.querySelectorAll('.view-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const id = event.target.getAttribute('data-id');
                    obtenerDatos(id);
                });
            });
        } else {
            console.error('Error: Invalid response format');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        const errorMessage = document.createElement('p');
        errorMessage.innerText = "Error: " + error.message;
        document.getElementById('resultTable').appendChild(errorMessage);
    });

function obtenerDatos(parametro) {
    const url = `http://40.112.56.227:8080/configuration_initial/get/${parametro}`;
    const body = {
        "jsonrpc": "2.0",
        "params": {
            "db": "education_ia",
            "login": "user@hotmail.com",
            "password": "jde.2020"
        }
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                const resultData = JSON.parse(data.result).configuration_initial;
                llenarTabla([resultData]);
            } else {
                console.error('Error en la respuesta:', data);
            }
        })
        .catch(error => console.error('Error:', error));
}

function llenarTabla(datos) {
    const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    datos.forEach(item => {
        const fila = tabla.insertRow();
        fila.insertCell().innerText = item.id;
        fila.insertCell().innerText = item.name;
        fila.insertCell().innerText = item.num_max_credits;
        fila.insertCell().innerText = item.num_max_periods;
        fila.insertCell().innerText = item.tipo;
        fila.insertCell().innerText = item.semanas;
        fila.insertCell().innerText = item.modalidad;
        fila.insertCell().innerText = item.relacion;
    });
}