const sectionSeleccionarAtaque= document.getElementById("seleccion-ataque");
const sectionReiniciar= document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar= document.getElementById("boton-reiniciar");
const contenedorAtaques = document.getElementById("contenedorAtaques");
const sectionSeleccionarMascota= document.getElementById("seleccion-mascota");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanVidasJugador= document.getElementById("vidas-jugador");
const spanVidasEnemigo= document.getElementById("vidas-enemigo");
const sectionSeleccionTitulo = document.getElementById("titulo-text");
const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const imagenJugador = document.getElementById("imagen-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const imagenEnemigo = document.getElementById("imagen-enemigo");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let mokeponesEnemigos = []
let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let botones = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDeMokepones
let inputPrimeape
let inputQuilladin
let inputEspeon
let inputBeautifly
let inputPansage
let inputMudkip
let botonFuego 
let botonAgua
let botonTierra
let rutaImagenEnemigo
let rutaImagenUsuario
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let indexAtaqueEnemigo
let indexAtaqueJugador
let mapaBackground = new Image();
 mapaBackground.src = "./images/mapa.png"

let lienzo = mapa.getContext("2d")
let intervalo
let colision = false;

let iconoElemento
let ataqueElemento
let jugadorId = null
let enemigoId = null

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20;
}

alturaQueBuscamos = anchoDelMapa * 600 / 800;

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null){
        this.nombre = nombre;
        this.foto=foto;
        this.vida = vida;
        this.ataques = []
        this.ancho = 100
        this.alto = 100
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa;
        this.id = id;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let primeape = new Mokepon("Primeape","./images/primeape.png ", 5,"./images/primeape-face.png");
let quilladin = new Mokepon("Quilladin","./images/quilladin.png", 5, "./images/quilladin-face.png");
let espeon = new Mokepon("Espeón","./images/espeon.png", 5, "./images/espeon-face.png");
let beautifly = new Mokepon("Beautifly", "./images/beautifly.png",5,"./images/beautifly-face.png");
let mudkip = new Mokepon("Mudkip", "./images/mudkip.png",5, "./images/mudkip-face.png");
let pansage = new Mokepon("Pansage", "./images/pansage.png",5, "./images/pansage-face.png");



const PRIMEAPE_ATAQUES =[
    {nombre:"💧",id:"boton-agua"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🔥",id:"boton-fuego"},
]
primeape.ataques.push(...PRIMEAPE_ATAQUES)
// primeapeEnemigo.ataques.push(...PRIMEAPE_ATAQUES)

const QUILLADIN_ATAQUES =[
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"💧",id:"boton-agua"}
]
quilladin.ataques.push( ...QUILLADIN_ATAQUES)
// quilladinEnemigo.ataques.push(...QUILLADIN_ATAQUES)


const ESPEON_ATAQUES =[
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"🌱",id:"boton-tierra"},
]
espeon.ataques.push(...ESPEON_ATAQUES)
// espeonEnemigo.ataques.push(...ESPEON_ATAQUES)


const BEAUTIFLY_ATAQUES =[
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"🌱",id:"boton-tierra"},
]
beautifly.ataques.push(...BEAUTIFLY_ATAQUES)
// beautiflyEnemigo.ataques.push(...BEAUTIFLY_ATAQUES)

const MUDKIP_ATAQUES =[
    {nombre:"💧",id:"boton-agua"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🔥",id:"boton-fuego"}
]
mudkip.ataques.push(...MUDKIP_ATAQUES)
// mudkipEnemigo.ataques.push(...MUDKIP_ATAQUES)

const PANSAGE_ATAQUES =[
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"💧",id:"boton-agua"}
]
pansage.ataques.push(...PANSAGE_ATAQUES)
// pansageEnemigo.ataques.push(...PANSAGE_ATAQUES)


mokepones.push(primeape,quilladin,espeon,mudkip,pansage,beautifly)

function iniciarJuego(){

    sectionSeleccionarAtaque.style.display= "none";
    sectionVerMapa.style.display ="none";

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota"  id=${mokepon.nombre} />
        <label class="tarjetas-de-mokepon" for=${mokepon.nombre} >
            <p>${mokepon.nombre}</p>
            <img class="mascota-mokepon" src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    inputPrimeape = document.getElementById("Primeape");
    inputQuilladin = document.getElementById("Quilladin");
    inputEspeon = document.getElementById("Espeón");
    inputBeautifly = document.getElementById("Beautifly");
    inputMudkip = document.getElementById("Mudkip");
    inputPansage = document.getElementById("Pansage");
    })
    sectionReiniciar.style.display= "none";
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://192.168.0.4:8080/unirse")
        .then(function (res) {
            if(res.ok){
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta;
                    })
            }
        })
}

function seleccionarMascotaJugador(){

    sectionSeleccionTitulo.style.display="none";
    sectionSeleccionarMascota.style.display= "none";
    botonMascotaJugador.style.display="none"

    if(inputPrimeape.checked){
        spanMascotaJugador.innerHTML= inputPrimeape.id;
        mascotaJugador = inputPrimeape.id;
        rutaImagenUsuario = ` <img src=${primeape.foto} alt=${primeape.nombre} class="imagen-jugador" > `
        imagenJugador.innerHTML = rutaImagenUsuario;
    } else if(inputQuilladin.checked){
        spanMascotaJugador.innerHTML= inputQuilladin.id;
        mascotaJugador = inputQuilladin.id;
        rutaImagenUsuario = ` <img src=${quilladin.foto} alt=${quilladin.nombre} class="imagen-jugador" >  `
        imagenJugador.innerHTML = rutaImagenUsuario 
    } else if(inputEspeon.checked){
        spanMascotaJugador.innerHTML= inputEspeon.id;
        mascotaJugador = inputEspeon.id;
        rutaImagenUsuario = `  <img src=${espeon.foto}  alt=${espeon.nombre} class="imagen-jugador"  >  `
        imagenJugador.innerHTML = rutaImagenUsuario
    } else if(inputBeautifly.checked){
        spanMascotaJugador.innerHTML= inputBeautifly.id
        mascotaJugador = inputBeautifly.id;
        rutaImagenUsuario = ` <img src=${beautifly.foto} alt=${beautifly.nombre} class="imagen-jugador" >  `
        imagenJugador.innerHTML = rutaImagenUsuario
    }else if(inputPansage.checked){
        spanMascotaJugador.innerHTML= inputPansage.id
        mascotaJugador = inputPansage.id;
        rutaImagenUsuario = ` <img src=${pansage.foto} alt=${pansage.nombre} class="imagen-jugador" >  `
        imagenJugador.innerHTML = rutaImagenUsuario
    }else if(inputMudkip.checked){
        spanMascotaJugador.innerHTML= inputMudkip.id
        mascotaJugador = inputMudkip.id;
        rutaImagenUsuario = ` <img src=${mudkip.foto} alt=${mudkip.nombre} class="imagen-jugador" >  `
        imagenJugador.innerHTML = rutaImagenUsuario
    }
    else{
        alert("Error. Debes seleccionar una mascota") 
        location.reload();
    }

    seleccionarMokepon(mascotaJugador)
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display="flex"
    iniciarMapa()
     
}

function seleccionarMokepon(mascotaJugador){

    fetch(`http://192.168.0.4:8080/mokepon/${jugadorId}`,{
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            mokepon:mascotaJugador
        })
    })
}

function extraerAtaques (mascotaJugador){
    let ataques
    for(let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque" > ${ataque.nombre} </button> `
        contenedorAtaques.innerHTML += ataquesMokepon;
    })
    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonTierra = document.getElementById("boton-tierra");
    botones = document.querySelectorAll(".BAtaque")
}
function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e) => {
         if(e.target.textContent === " 🔥 "){
            ataqueJugador.push("Fuego")
            boton.style.background= " #ffa211"
            boton.disabled = true;
         }else if (e.target.textContent === " 💧 "){
            ataqueJugador.push("Agua")
            boton.style.background= "#a2d1f3"
            boton.disabled = true;
         }else{
            ataqueJugador.push("Tierra")
            boton.style.background= "#75f8a0"
            boton.disabled = true;
         }

         if(ataqueJugador.length === 5){
            enviarAtaques()
         }
        })
    })  
}
function seleccionarMascotaEnemigo(enemigo){
   
    spanMascotaEnemigo.innerHTML= enemigo.nombre
     rutaImagenEnemigo = `<img src=${enemigo.foto} alt=${enemigo.nombre}  class= "imagen-batalla" > `
    imagenEnemigo.innerHTML = rutaImagenEnemigo 
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
    
   
}
function enviarAtaques(){
    fetch(`http://192.168.0.4:8080/mokepon/${jugadorId}/ataques`,{
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://192.168.0.4:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res){
            if(res.ok){
                res.json()
                .then(function ({ataques}){
                    if (ataques.length === 5){
                        ataqueEnemigo = ataques
                        combate()
                    }
                })  
            }
        })
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)
    iconoElemento = ataquesMokeponEnemigo.splice(ataqueAleatorio,1);

    for (let i = 0; i < iconoElemento.length; i++) {
         ataqueElemento = iconoElemento[i].nombre;
        
        if (ataqueElemento == "🔥" ){
            ataqueEnemigo.push("Fuego")
         } else if (ataqueElemento == "💧"){
             ataqueEnemigo.push("Agua")
         } else {
             ataqueEnemigo.push("Tierra")
         }

    }
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes (jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate (){
    clearInterval(intervalo)
    for(let index=0; index < ataqueJugador.length; index++){
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("Empate")
        } else if (ataqueJugador[index] === "Fuego" && ataqueEnemigo[index] === "Tierra"){
           indexAmbosOponentes(index,index)
           crearMensaje("Ganaste")
           victoriasJugador= victoriasJugador + 1
           spanVidasJugador.innerHTML= victoriasJugador;
        } else if (ataqueJugador[index] === "Agua" && ataqueEnemigo[index] === "Fuego"){
          indexAmbosOponentes(index,index)
          crearMensaje("Ganaste")
          victoriasJugador= victoriasJugador + 1
          spanVidasJugador.innerHTML= victoriasJugador;
        } else if (ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Agua"){
          indexAmbosOponentes(index,index)
          crearMensaje("Ganaste")
          victoriasJugador= victoriasJugador + 1
          spanVidasJugador.innerHTML= victoriasJugador;
        } else {
          indexAmbosOponentes(index,index)
          crearMensaje("Ganaste")
          victoriasEnemigo = victoriasEnemigo + 1;
          spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }  
    revisarVictorias()   
}

function revisarVictorias(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate!!")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("Felicitaciones Ganaste :)" )
    } else {
        crearMensajeFinal("Lo siento perdiste :(")
    }
}
function crearMensaje(resultado){
    
    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo;
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal
    botonReiniciar
    sectionReiniciar.style.display= "block";
}

function reiniciarJuego(){
    location.reload();
}
function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min +1) + min);
}

function pintarCanvas(){
    
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);

    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion( mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}

function enviarPosicion(x, y){
    fetch(`http://192.168.0.4:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    }).then(function (res){
        if(res.ok){
            res.json()
            .then(function({enemigos}){
                mokeponesEnemigos = enemigos.map(function(enemigo) {
                    let mokeponEnemigo = null
                    if(enemigo.mokepon != undefined)
                    {
                        const mokeponNombre = enemigo.mokepon.nombre 
                        switch (mokeponNombre)
                        {
                            case "Primeape":
                                mokeponEnemigo = new Mokepon("Primeape","./images/primeape.png ", 5,"./images/primeape-face.png", enemigo.id);
                            break
                            case "Quilladin":
                                mokeponEnemigo = new Mokepon("Quilladin","./images/quilladin.png", 5, "./images/quilladin-face.png",enemigo.id);
                            break
                            case "Espeon":
                                mokeponEnemigo = new Mokepon("Espeón","./images/espeon.png", 5, "./images/espeon-face.png",enemigo.id);
                            break
                            case "Beautifly":
                                mokeponEnemigo = new Mokepon("Beautifly", "./images/beautifly.png",5,"./images/beautifly-face.png",enemigo.id);
                            break
                            case "Mudkip":
                                mokeponEnemigo = new Mokepon("Mudkip", "./images/mudkip.png",5, "./images/mudkip-face.png",enemigo.id);
                            break
                            case "Pansage":
                                mokeponEnemigo = new Mokepon("Pansage", "./images/pansage.png",5, "./images/pansage-face.png",enemigo.id);
                            break
                            default:
                            break
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y

                        
                    }
                        return mokeponEnemigo
                })

//---------------------------------Al tratar de pintar enemigos----------------------------------------
        mokeponesEnemigos.forEach(function (mokepon)
        {
            if(mokepon != undefined){
                mokepon.pintarMokepon()
                revisarColision(mokepon)
            }
        })
      })
    }
  })

}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5;
    pintarCanvas()
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5;
    pintarCanvas()
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5;
    pintarCanvas()
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5;
    pintarCanvas()
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0;
}

function detenerEnBordesDelMapa(){
    // Verificar si las mascotas ya llegaron al borde del mapa
    const arribaMapa = 0;
    const abajoMapa = mapa.height - mascotaJugador.alto;
    const derechaMapa = mapa.width;
    const izquierdaMapa = 0;
  
    const arribaJugador = mascotaJugador.y;
    const derechaJugador = mascotaJugador.x + mascotaJugador.ancho;
    const izquierdaJugador = mascotaJugador.x;
   // const abajoJugador= mascotaJugador.y + mascotaJugador.height;
  
    if (arribaJugador < arribaMapa) {
      mascotaJugador.y = arribaMapa;
    }
    if (arribaJugador > abajoMapa) {
      mascotaJugador.y = abajoMapa;
    }
    if (derechaJugador > derechaMapa) {
      mascotaJugador.x = derechaMapa - mascotaJugador.ancho;
    }
    if (izquierdaJugador < izquierdaMapa) {
      mascotaJugador.x = izquierdaMapa;
    }
  
     //console.log(abajoJugador, mascotaJugador.y);
  }

function sePresionoUnaTecla(event){
    if(colision === false){
        switch (event.key) {
            case "ArrowUp":
                moverArriba()
                break
            case "ArrowDown":
                moverAbajo()
                break
            case "ArrowLeft":
                moverIzquierda()
                break  
            case "ArrowRight":
                moverDerecha()
                break
            default:
                break;
        }
    } 
    detenerMovimiento()
}
function iniciarMapa(){
    
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota(){
    for(let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
          return mokepones[i]
        }
    }
}

function revisarColision(enemigo){

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    if( 
        abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo
      ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("se detecto una colision")

    enemigoId = enemigo.id
    colision = true;
    sectionSeleccionarAtaque.style.display= "flex";
    sectionVerMapa.style.display ="none"
    seleccionarMascotaEnemigo(enemigo)

}
window.addEventListener("load", iniciarJuego);