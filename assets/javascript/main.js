function pokemon (nombre, color){
	this.nombre=nombre;
	this.color=color;

	this.nivelDeAmistad=0

	this.vida=100
	this.poderDeAtaque=poderDeAtaque
	this.mostrarPokemon=function(){
		return('Hola, soy '+this.nombre+'y soy de color'+this.color)
	}
	this.aumentarAmistad=function(valor){
		this.nivelDeAmistad=this
	}
}