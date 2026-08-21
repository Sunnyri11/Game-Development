function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // alterna la clase active
}



function mostrarDescripcion(lenguaje) {
    const cuadro = document.getElementById("descripcionLenguaje");

    // Si el cuadro ya tiene el mismo texto se oculta
    if (cuadro.dataset.actual === lenguaje) {
        cuadro.classList.remove("activo");
        cuadro.dataset.actual = "";
        return;
    }

    let texto = "";

    switch (lenguaje) {
        case "csharp":
            texto = "<b>C#</b>: Usado para crear aplicaciones de escritorio, videojuegos con Unity, software empresarial y desarrollo con .NET.";
            break;

        case "javascript":
            texto = "<b>JavaScript</b>: Lenguaje principal del desarrollo web. Permite crear páginas interactivas, animaciones y aplicaciones dinámicas.";
            break;

        case "python":
            texto = "<b>Python</b>: Ideal para inteligencia artificial, análisis de datos, automatización, backend y aprendizaje automático.";
            break;

        case "sql":
            texto = "<b>SQL</b>: Lenguaje para crear, gestionar y consultar bases de datos. Fundamental para manejar información profesionalmente.";
            break;
        case "mysql":
            texto = "<b>MySQL</b>: Sistema para gestionar bases de datos relacionales. Usa filas y columnas organizadas en tablas conectadas entre sí. Funciona con el lenguaje SQL y es de código abierto. Sirve para guardar y buscar datos de forma rápida."
            break;
        case "php":
            texto = "<b>PHP</b>: Lenguaje de programación de código abierto que se ejecuta en el lado del servidor. Se usa para crear páginas web dinámicas, procesar datos de usuarios, conectarse a bases de datos y generar el código HTML que finalmente ve el usuario en el navegador."
            break;
        case "c++":
            texto = "<b>C++</b>: Lenguaje de programación rápido y potente. Funciona como una versión avanzada del lenguaje C y permite controlar los recursos del equipo a bajo nivel. Sirve para crear software eficiente, como sistemas operativos, videojuegos y aplicaciones de escritorio."
            break;
    }

    // Actualizar contenido
    cuadro.innerHTML = texto;
    cuadro.dataset.actual = lenguaje;

    // Mostrar cuadro
    cuadro.classList.add("activo");
}