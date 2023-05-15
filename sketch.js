let imgFormas = [];
let cant=6;
let miPaleta;
let formasInstancia;
let ejecutado = false;

function preload() {
  miPaleta = new Paleta ("data/pdecolores.png");

  for (let i = 1; i < cant; i++) {
    let nombre = "data/formas_00" + i + ".png";
   imgFormas[i] = loadImage(nombre);
  }
}

function setup() {
  createCanvas(350, 650);
  background(50); 

}
function draw() {

   if (!ejecutado) {
	for( let j=0; j<5;j++){
		formas1 =  new Formas(1,int(random(0,350)),int(random(0,650)));
		formas2 =  new Formas(2,int(random(0,350)),int(random(0,650)));
		formas3 =  new Formas(3,int(random(0,350)),int(random(0,650)));
		formas4 =  new Formas(4,int(random(0,350)),int(random(0,650)));
		formas5 =  new Formas(4,int(random(0,350)),int(random(0,650)));
	  }
	  
	  ejecutado = true; // Establecer la variable de control a true para evitar ejecutar el bucle nuevamente
  }


}