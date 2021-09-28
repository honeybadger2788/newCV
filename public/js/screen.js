// en pantallas menores a 768px, remueve la clase que afecta el tamaño de los íconos.

function main(){
    if(screen.width < 768) {
        let iconos = document.querySelectorAll(".fa-2x")
        for (let i = 0; i < iconos.length; i++) {
            iconos[i].classList.remove("fa-2x") 
        }
    }
}