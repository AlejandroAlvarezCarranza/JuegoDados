/*
class Jugador {

    nombre
    caraDado1
    caraDado2

    Jugador(parNombre){
        this.nombre = parNombre;
    }
}

class JuegoDados{
    numeroJuego

    jugador1 // Jugador();
    jugador2 // Jugador();

    tirarDados(){
        this.jugador1.caraDado1 = ();
        this.jugador1.caraDado2 = ();

        this.jugador2.caraDado1 = ();
        this.jugador2.caraDado2 = ();
    }

    determinaGanador(){
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
           return this.jugador1.nombre
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}
*/

//Código JavaScript

function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
    this.juegosGanados = 0;

    this.getGanador=function(){
        return this.juegosGanados;
    }
    this.getNombre=function(){
        return this.nombre;
    }
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function() {
        this.jugador1.caraDado1 = (Math.floor(Math.random()*7)); //usar random(1,6)
        this.jugador1.caraDado2 = (Math.floor(Math.random()*7)); //usar random(1,6)
        this.jugador2.caraDado1 = (Math.floor(Math.random()*7)); //usar random(1,6)
        this.jugador2.caraDado2 = (Math.floor(Math.random()*7)); //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
                this.jugador1.juegosGanados++;
            return this.jugador1.nombre
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador1.caraDado2 != 7) ) {
                this.jugador2.juegosGanados++;
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}

let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");
let juego1 = new JuegoDados(1, pedro, antonio);
let seguir=true
let contador=0;
let ganador;

do {
    contador++;
    juego1.tirarDados();
    ganador=juego1.determinaGanador();
    console.log("El ganador del juego "+contador+" es:"+ ganador);
    if(pedro.getGanador()==3){
        seguir=false;
        ganador=pedro.getNombre();
    }else if(antonio.getGanador()==3){
        seguir=false;
        ganador=antonio.getNombre();
    }
} while(seguir);

console.log("El Ganador Definitivo es: "+ganador);
console.log("Cantidad de Juegos hechos: "+contador);

//Determinar el primer ganador de 3 juegos y cuantos juegos hubo