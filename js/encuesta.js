const encuestas = [
    {
        "id": 1,
        "pregunta": "Ingresa puntualmente"
    },
    {
        "id": 2,
        "pregunta": "Aplica métodos de enseñanza"
    },
    {
        "id": 3,
        "pregunta": "Recurre al material de aula"
    },
    {
        "id": 4,
        "pregunta": "Permite participar"
    },
    {
        "id": 5,
        "pregunta": "Interrupcion en clase"
    },
    {
        "id": 6,
        "pregunta": "Respeta a cada estudiante"
    },
    {
        "id": 7,
        "pregunta": "Mide el tiempo de clase"
    },
    {
        "id": 8,
        "pregunta": "Incentipa la participación"
    },
    {
        "id": 9,
        "pregunta": "Mide el avance del estudiante"
    },
    {
        "id": 10,
        "pregunta": "Deja actividades de repaso"
    }
];


function setEncuestas(){
    const tablaElement = document.getElementById("tabla");
    let contenido = "";
    encuestas.forEach(function(encuesta) { 
        const template = `
            <div class="encuestas">
                <div class="dataencuesta">
                    <p>${encuesta.pregunta}</p>
                </div>
                <div class="actions" data-id="${encuesta.id}">
                    <div class="action 5">5</div>  
                    <div class="action 4">4</div>  
                    <div class="action 3">3</div>  
                    <div class="action 2">2</div>  
                    <div class="action 1">1</div>  
                </div>
            </div>
        `;
        contenido = contenido + template;
    });
    tabla.innerHTML = contenido;

    const actions = document.querySelectorAll('.action');
    actions.forEach(action => {
        action.addEventListener('click', function() {
            
            this.style.backgroundColor = 'lightgreen';
        });
    });
}

setEncuestas();