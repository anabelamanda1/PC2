const $usuario = $("#usuario");
const $password = $("#password");

const usuarios = {
    "Alumno": {
        pass: "Alumno01",
        pagina: "dashboard_Alumno.html"
    },
    "Profesor": {
        pass: "Profesor01",
        pagina: "dashboard_Profe.html"
    }
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    const usuario = usuarios[valueUsuario];
    
    if (usuario) {
        if (valuePassword == usuario.pass) {
            localStorage.setItem("isLoggedIn", true);
            location.href = usuario.pagina;
        } else {
            mostrarError("Contraseña incorrecta");
        }
    } else {
        mostrarError("Usuario incorrecto");
    }
});

function mostrarError(mensaje) {
    Swal.fire({
        title: "ERROR",
        text: mensaje,
        icon: "error"
    });
}
