const cursos = [
    {
        "id": "C001",
        "nombre": "Desarrollo Web",
        "duracion": "3 horas",
        "ciclo": "IV",
        "descripcion": [
            {
                "Turno": "Mañana - PC202",
                "Modalidad": "Virtual",
                "Hora": "7:00 am - 10:00 am",
            },
            {
                "Turno": "Tarde - PC202",
                "Modalidad": "Presencial",
                "Hora": "2:00 pm - 5:00 pm",
            },
            {
                "Turno": "Noche - PC202",
                "Modalidad": "Presencial - Virtual",
                "Hora": "7:00 pm - 10:00 pm",
            }
        ]
    },
    {
        "id": "C002",
        "nombre": "Ingeniería de Software II",
        "duracion": "4 horas",
        "ciclo": "V",
        "descripcion": [
            {
                "Turno": "Mañana - PB203",
                "Modalidad": "Virtual",
                "Hora": "7:00 am - 10:00 am",
            },
            {
                "Turno": "Tarde - PB203",
                "Modalidad": "Presencial",
                "Hora": "2:00 pm - 5:00 pm",
            },
            {
                "Turno": "Noche  - PB203",
                "Modalidad": "Presencial - Virtual",
                "Hora": "7:00 pm - 10:00 pm",
            }
        ]
    },
    {
        "id": "C003",
        "nombre": "Arquitectura de Datos",
        "duracion": "3 horas",
        "ciclo": "VI",
        "descripcion": [
            {
                "Turno": "Tarde - PA208",
                "Modalidad": "Presencial",
                "Hora": "2:00 pm - 5:00 pm",
            },
            {
                "Turno": "Noche - PA208",
                "Modalidad": "Presencial - Virtual",
                "Hora": "7:00 pm - 10:00 pm",
            }
        ]
    },
];

const $misCursos = $("#misCursos");
cursos.forEach((curso) => {
    const link = "cursos.html?idCurso="+curso.id;
    const template = `
        <li class="collection-item avatar" data-id="${curso.id}">
            <span class="title">${curso.nombre}</span>
            <p>
                ${curso.duracion}        
            </p>
            <p class="ciclo">
                ${curso.ciclo}
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                <i class="material-icons">grade</i>
                Detalle
            </a>
        </li>
    `;
    $misCursos.append(template);
});

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idCurso = params.get("idCurso");
let misDCursos = [];
if (idCurso) {
    cursos.forEach((curso) => {
        if (curso.id == idCurso) {
            const mytitle = curso.nombre;
            $("#myTitle").html(mytitle);
            misDCursos = curso.descripcion;           
        }
    });
    if (misDCursos.length > 0) {
        misDCursos.forEach((descripcion)=> {
            const template = `
                <li class="collection-item">
                    <p class="turno">Turno: ${descripcion.Turno}</p>
                    <p class="modalidad">${descripcion.Modalidad}</p>
                    <p class="hora">${descripcion.Hora}</p>
                </li>
            `;
            $("#myCursos").append(template);
        });
    }
}

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
