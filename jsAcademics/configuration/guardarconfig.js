// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'http://40.112.56.227:8080/configuration_initial/create';
// Función para enviar datos al servidor
async function enviarDatos() {
    // Obtener los valores de los inputs
    const datos = {
        name: document.getElementById('txtname').value,
        num_max_credits: document.getElementById('txtnum_max_credits').value,
        num_max_periods: document.getElementById('txtnum_max_periods').value,
        tipo: document.getElementById('drpTipoConf').value,
        semanas: document.getElementById('txtsemanas').value,
        modalidad: document.getElementById('drpModalidad').value,
        relacion: document.getElementById('txtrelacion').value
    };

    try {
        // Realizar la solicitud POST
        const respuesta = await fetch('http://40.112.56.227:8080/configuration_initial/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(datos),
            redirect: "follow",
        });


        // Manejar la respuesta
        if (respuesta.ok) {
            const resultado = await respuesta.json();
            Swal.fire({
                title: "Enviado",
                text: 'Configuración enviada con éxito',
                icon: "success"
            });

            document.getElementById('txtname').value = '';
            document.getElementById('txtnum_max_credits').value = '';
            document.getElementById('txtnum_max_periods').value = '';
            document.getElementById('drpTipoConf').value = '';
            document.getElementById('txtsemanas').value = '';
            document.getElementById('drpModalidad').value = '';
            document.getElementById('txtrelacion').value = '';


            document.getElementById('resultado').innerText = 'Configuración enviada con éxito: ' + JSON.stringify(resultado);
        } else {
            Swal.fire({
                title: "Error",
                text: 'Error al enviar la configuracións: ' + respuesta.statusText,
                icon: "Error"
            });
            document.getElementById('resultado').innerText = 'Error al enviar la configuracións: ' + respuesta.statusText;
        }
    } catch (error) {
        Swal.fire({
            title: "Enviado",
            text: 'Configuración enviada con éxito',
            icon: "success"
        });
        document.getElementById('resultado').innerText = 'Error al enviar la configuración: ' + error.message;

    }
}     