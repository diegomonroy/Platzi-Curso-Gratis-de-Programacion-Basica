var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
// console.log(cauchin, pokacho, tocinauro);

// pokacho.hablar();
pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

// console.log(coleccion);

// Indice
for(var pakin in coleccion) {
	console.log(coleccion[pakin]);
}

// Objeto
for(var pakin of coleccion) {
	console.log(pakin);
	pakin.mostrar();
}