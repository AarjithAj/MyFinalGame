class BadGas {
    constructor(){
         this.x = floor(random(floor(width / scl))) * scl;
         this.y = floor(random(floor(height / scl))) * scl;
    
    }
    
    update() {
         this.x = floor(random(floor(width / scl))) * scl;
         this.y = floor(random(floor(height / scl))) * scl;
    }

    eaten () {
     this.update();
     Bg.update();
     Bg = new BadGas();


     
    }

    show () {
         fill(50, 0, 0);
         // rect(this.x, this.y, scl, scl);
         image(badGasImg, this.x, this.y, scl, scl)
    }
}