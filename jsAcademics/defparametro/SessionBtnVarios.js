//SESSION STORAGES Y BOTONES DE GUARDADO Y LIMPIAR PÁGINA CON EL BOTON DE PERTINENCIA
document.addEventListener('DOMContentLoaded', function () {
    // Recuperar datos del sessionStorage al cargar la página
    document.getElementById('txtEnfoque').value = sessionStorage.getItem('txtEnfoque') || '';
    document.getElementById('txtPrograma').value = sessionStorage.getItem('txtPrograma') || '';
    document.getElementById('txtNumber').value = sessionStorage.getItem('txtNumber') || '';
    document.getElementById('textareaContent').value = sessionStorage.getItem('textareaContent') || '';
    document.getElementById('textareaContentPerfil').value = sessionStorage.getItem('textareaContentPerfil') || '';

    document.getElementById('txtNombreConfig').value = sessionStorage.getItem('txtNombreConfig') || '';
    document.getElementById('txtNumeroSemConfig').value = sessionStorage.getItem('txtNumeroSemConfig') || '';
    document.getElementById('txtModalidadConfig').value = sessionStorage.getItem('txtModalidadConfig') || '';
    document.getElementById('txtRelacionConfig').value = sessionStorage.getItem('txtRelacionConfig') || '';
    document.getElementById('txtNumMaxCrediConfig').value = sessionStorage.getItem('txtNumMaxCrediConfig') || '';
    document.getElementById('txtNumMaxPerioConfig').value = sessionStorage.getItem('txtNumMaxPerioConfig') || '';
    document.getElementById('txtTipoConfig').value = sessionStorage.getItem('txtTipoConfig') || '';
    document.getElementById('drpConfiguraciones').value = sessionStorage.getItem('drpConfiguraciones') || '';

    //document.getElementById('tableContainer').innerHTML = sessionStorage.getItem('tableContainer') || '';
    // document.getElementById('inputsContainer').innerHTML = sessionStorage.getItem('inputsContainer') || '';

    // Guardar datos en sessionStorage al cambiar el valor de los campos
    document.getElementById('txtEnfoque').addEventListener('input', function () {
        sessionStorage.setItem('txtEnfoque', this.value);
    });
    document.getElementById('txtPrograma').addEventListener('input', function () {
        sessionStorage.setItem('txtPrograma', this.value);
    });
    document.getElementById('txtNumber').addEventListener('input', function () {
        sessionStorage.setItem('txtNumber', this.value);
    });
    document.getElementById('textareaContent').addEventListener('input', function () {
        sessionStorage.setItem('textareaContent', this.value);
    });
    document.getElementById('textareaContentPerfil').addEventListener('input', function () {
        sessionStorage.setItem('textareaContentPerfil', this.value);
    });
});

function saveForm1Data() {

    sessionStorage.setItem('txtEnfoque', document.getElementById('txtEnfoque').value);
    sessionStorage.setItem('txtPrograma', document.getElementById('txtPrograma').value);
    sessionStorage.setItem('txtNumber', document.getElementById('txtNumber').value);
    sessionStorage.setItem('textareaContent', document.getElementById('textareaContent').value);
    sessionStorage.setItem('textareaContentPerfil', document.getElementById('textareaContentPerfil').value);

    sessionStorage.setItem('txtNombreConfig', document.getElementById('txtNombreConfig').value);
    sessionStorage.setItem('txtNumeroSemConfig', document.getElementById('txtNumeroSemConfig').value);
    sessionStorage.setItem('txtModalidadConfig', document.getElementById('txtModalidadConfig').value);
    sessionStorage.setItem('txtRelacionConfig', document.getElementById('txtRelacionConfig').value);
    sessionStorage.setItem('txtNumMaxCrediConfig', document.getElementById('txtNumMaxCrediConfig').value);
    sessionStorage.setItem('txtNumMaxPerioConfig', document.getElementById('txtNumMaxPerioConfig').value);
    sessionStorage.setItem('txtTipoConfig', document.getElementById('txtTipoConfig').value);
    sessionStorage.setItem('drpConfiguraciones', document.getElementById('drpConfiguraciones').value);
    // sessionStorage.setItem('tableContainer', document.getElementById('tableContainer').innerHTML);
    //sessionStorage.setItem('inputsContainer', document.getElementById('inputsContainer').innerHTML);

}

const guardarBtn = document.getElementById('btnGuardar');

// Asocia el evento click al botón
guardarBtn.addEventListener('click', function () {
    // Aquí puedes simular un error para demostrar el uso de SweetAlert2
    try {

        Swal.fire({
            title: "Guardado",
            text: 'Página Guardada con Éxito: ',
            icon: "success"
        });
        // Simulación de un error
        //throw new Error("Simulación de error");

        // Aquí iría tu lógica de guardar cambios...
    } catch (error) {
        // Muestra la alerta de error con SweetAlert2
        Swal.fire({
            title: "Error",
            text: 'Error al enviar la configuración: ' + error.message,
            icon: "error"
        });
    }
});

function clearpage() {
    document.getElementById('txtEnfoque').value = '';
    document.getElementById('txtPrograma').value = '';
    document.getElementById('txtNumber').value = '';
    document.getElementById('textareaContent').value = '';
    document.getElementById('textareaContentPerfil').value = '';
    document.getElementById('tableContainer').value = '';

}

document.getElementById('btnEnviarPertinencia').addEventListener('click', function () {
    var programa = document.getElementById('txtPrograma').value;
    var url = 'http://172.191.10.174/download-pertincencia?name=' + encodeURIComponent(programa);
    window.open(url, '_blank');
});
