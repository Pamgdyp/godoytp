let cantidad=10;
let cual=1;

class Formas {
    constructor(cual,posX,posY) {
                    this.y = posY;
                    this.x = posX;
                    this.esteColor = miPaleta.darColor();
                    this.opacidad = 40;

                for(let i = 0; i < cantidad; i++) {
                tint(red(this.esteColor), green(this.esteColor), blue(this.esteColor), this.opacidad);
                image(imgFormas[cual], this.x, this.y, int(random(50, 80)), int(random(50, 80)));
                this.y = this.y - int(random(20,30));
                this.opacidad = this.opacidad + 30;
                }


    }
  }
