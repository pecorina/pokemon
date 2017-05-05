//alert("Atrapalos yaa!");

function Pokemon (nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = nivelDeAmistad;

	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return('Hola, soy '+this.nombre +'y soy de color'+ this.color);
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

//const Pikachu = new Pokemon ('Pikachu','Amarillo',100) 
//const Charmander = new Pokemon ('Charmander','Rojo',20)
//const Patata = new Pokemon ('Patata', 'cafe',70)
//const Miauraur = new Pokemon ('Miauraur', 'blanco',50)

function pelea(){
	var button1 = document.getElementById("boton1").value;
	var button2 = document.getElementById("boton2").value;
    
    var pokemon1 = new Pokemon('Patata', 'Cafe', 70);
    var pokemon2 = new Pokemon('Miauraur', 'blanco', 50);

    var resultado = document.getElementById("imprimir");
    var mostrar = (pokemon1.nombre + "atacó a " + pokemon2.nombre);
    resultado.innerHTML= mostrar;
}

//document.write(pelea();)
//var pokemon1 = document.getElementById(pokemon1)
//var pokemon2 = document.getElementById(pokemon2)


//Pikachu.atacar(Charmander)

//console.log(Charmander.nombre + " " + Charmander.color + " " + Charmander.vida)

//document.write(Pikachu.nombre + " " + Pikachu.color + " " + Pikachu.vida+ "  /  ") 

//document.write(Charmander.nombre + " " + Charmander.color + " " + Charmander.vida)

