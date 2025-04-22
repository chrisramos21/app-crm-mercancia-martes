import Swal from "sweetalert2";
export function alertaRedireccion(redireccion, mensaje, ruta){
    let timerInterval;
    Swal.fire({
        title: mensaje,
        html: "Será redireccionado en <b></b> milisegundos.",
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            redireccion(ruta)
        }
    })  
}

export function alertaError(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}
export function generarToken(){
    let token = "token_" + Math.random().toString(36).substring(2) + "-" + Math.random().toString(36).substring(2);
    return token;
}