class Food {
    constructor(imageName){
         this.x = floor(random(floor(width / scl))) * scl;
         this.y = floor(random(floor(height / scl))) * scl;
         this.imageName = imageName
    
    }
    
    update() {
         this.x = floor(random(floor(width / scl))) * scl;
         this.y = floor(random(floor(height / scl))) * scl;

         randomNumber = Math.round(random(1,3))
         
         console.log(randomNumber)
    }

    eaten () {
         this.update();
         r.update();
         r = new Rock();
    }

    show () {
         fill(50, 0, 0);
         // rect(this.x, this.y, scl, scl);
         image(this.imageName, this.x, this.y, scl, scl  )

         /*if(randomNumber == 1){
          image(trainstop1, this.x, this.y, scl, scl)
         }

         if(randomNumber == 2){
          image(trainstop2, this.x, this.y, scl, scl)
         }
         
         if(randomNumber == 3){
          image(trainstop3, this.x, this.y, scl, scl)
         }*/
         
    }
}