 /*TABS*/
 function toggleContenido(num) {
    const contents = document.querySelectorAll('.content[id^="contenido"]');
    contents.forEach((content, index) => {
      if (index === num - 1) {
        content.style.display =
          content.style.display === "none" ? "block" : "none";
      } else {
        content.style.display = "none";
      }
    });
  }

  function toggleContenido2(num) {
    const contents2 = document.querySelectorAll(
      '.content[id^="contenidos"]'
    );
    contents2.forEach((content2, index) => {
      if (index === num - 1) {
        content2.style.display =
          content2.style.display === "none" ? "block" : "none";
      } else {
        content2.style.display = "none";
      }
    });
  }

  // Inicializar todos los contenidos como no visibles
  document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll('.content[id^="contenido"]');
    const contents2 = document.querySelectorAll(
      '.content[id^="contenidos"]'
    );
    contents.forEach((content) => (content.style.display = "none"));
    contents2.forEach((content2) => (content2.style.display = "none"));
  });
  /*FIN TABS*/