const perfil = [
    {
        "id": "Alumno001",
        "Alumno": "Anabel Collazos López",
        "Ciclo": "IV",
        "Turno": "Noche",
        "Modalidad": "Semipresencial"
    }
]

const $miperfil = $("#miPerfil");
perfil.forEach((perf) => {
    const link = "encuesta.html?idPerfil="+perf.id;
    const template = `
        <li class="collection-item avatar" data-id="${perf.id}">
            <span class="title">${perf.Alumno}</span>
            <p>
                ${perf.Ciclo}        
            </p>
            <p>
                ${perf.Turno}
            </p>
            <p>
                ${perf.Modalidad}
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                <i class="material-icons">grade</i>
                Ir encuesta
            </a>
        </li>
    `;
    $miperfil.append(template);
});


// Redirigir a index.html si el usuario no ha iniciado sesión
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        alert("Por favor, inicia sesión para acceder a esta página.");
        location.href = "index.html";
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.close();
    });
});
