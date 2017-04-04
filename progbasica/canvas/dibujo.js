var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#FAA";

// while ( l < lineas ) {
// 	yi = 10 * l;
// 	xf = 10 * (l + 1);
// 	dibujarLinea(colorcito, 0, yi, xf, 300);
// 	console.log("Linea " + l);
// 	l++;
// }

for ( l = 0; l < lineas; l++ ) {
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(colorcito, 0, yi, xf, 300);
}

dibujarLinea(colorcito, 1, 1, 0, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

// dibujarLinea("pink", 10, 300, 220, 10);
// dibujarLinea("yellow", 300, 10, 10, 220);