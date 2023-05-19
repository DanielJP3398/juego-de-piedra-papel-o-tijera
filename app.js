
/* Capturamos los elementos en el DOM */
let botonPiedra = document.querySelector('.piedra');
let botonTijera = document.querySelector('.tijera');
let botonPapel = document.querySelector('.papel');

let manoUsuario = document.querySelector('.mano-usuaria');
let manoComputadora = document.querySelector('.mano-computadora');

let puntajeUsuario = document.querySelector('.puntaje-usuaria p');
let puntajeComputadora = document.querySelector('.puntaje-computadora p');

let labelResultado = document.querySelector('.resultado');

let tablero = document.querySelector('.tablero');

let eleccionUsuario = "";
let eleccionCompu = "";

let contadorUsuario = 0;
let contadorComputadora = 0;

const eleccionComputadora = () => {
    let opcionAlAzar = Math.floor(Math.random() * 3);

    if (opcionAlAzar == 0) {
        manoComputadora.src = "./assets/piedra_computadora.png";
        eleccionCompu = "piedra";
    } else if (opcionAlAzar == 1) {
        manoComputadora.src = "./assets/papel_computadora.png";
        eleccionCompu = "papel";
    } else {
        manoComputadora.src = "./assets/tijera_computadora.png";
        eleccionCompu = "tijera";
    }
};

const resultado = () => {
    if (eleccionUsuario == "piedra") {
        if (eleccionCompu == "piedra") {
            labelResultado.textContent = "Empate";
        } else if (eleccionCompu == "papel") {
            labelResultado.textContent = "Gana computadora";
            contadorComputadora++;
            puntajeComputadora.textContent = contadorComputadora;
        } else if (eleccionCompu == "tijera") {
            labelResultado.textContent = "Gana usuario";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
        }
    } else if (eleccionUsuario == "papel") {
        if (eleccionCompu == "papel") {
            labelResultado.textContent = "Empate";
        } else if (eleccionCompu == "piedra") {
            labelResultado.textContent = "Gana usuario";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
        } else if (eleccionCompu == "tijera") {
            labelResultado.textContent = "Gana computadora";
            contadorComputadora++;
            puntajeComputadora.textContent = contadorComputadora;
        }
    } else if (eleccionUsuario == "tijera") {
        if (eleccionCompu == "tijera") {
            labelResultado.textContent = "Empate";
        } else if (eleccionCompu == "piedra") {
            labelResultado.textContent = "Gana computadora";
            contadorComputadora++;
            puntajeComputadora.textContent = contadorComputadora;
        } else if (eleccionCompu == "papel") {
            labelResultado.textContent = "Gana usuario";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
        }
    }
};

function terminar(){
    if (contadorUsuario === 3 || contadorComputadora === 3) {
        if (contadorUsuario === 3) {
          alert('¡Ganaste!', 'Has ganado el juego.', 'success');
        } else {
          alert('¡Perdiste!', 'La computadora ha ganado el juego.', 'error');
        }
        
        
        // Reiniciao el juego
        contadorUsuario = 0;
        contadorComputadora = 0;
        puntajeUsuario.textContent = contadorUsuario;
        puntajeComputadora.textContent = contadorComputadora;
      }
};

botonPiedra.onclick = () => {
    manoUsuario.src = "./assets/piedra_user.png";
    manoComputadora.src = "./assets/piedra_computadora.png";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "piedra";
        manoUsuario.src = "./assets/piedra_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};

botonPapel.onclick = () => {
    manoUsuario.src = "./assets/papel_user.png";
    manoComputadora.src = "./assets/papel_computadora.png";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "papel";
        manoUsuario.src = "./assets/papel_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};

botonTijera.onclick = () => {
    manoUsuario.src = "./assets/tijera_user.png";
    manoComputadora.src = "./assets/tijera_computadora.png";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "tijera";
        manoUsuario.src = "./assets/tijera_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};


