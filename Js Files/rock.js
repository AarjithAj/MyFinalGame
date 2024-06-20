class Rock {
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
    }
    end() {
         for(var i = 0; i < s.tail.length; i++)
         {
              var d = dist(this.x, this.y, s.tail[i].x, s.tail[i].y);
              if(life > 0){
               if(d < 1)
                    {
                         textSize(40)
                         fill("red");
                         text("You Lost A Life!", 300, 300) 
                         s.xspeed = 0;
                         s.yspeed = 0;
                         life -= 1
                    }

              }
              else{
               gameState = "over"
               textSize(50)
               text("You Lost All Lives!", 300, 300) 
              }
              
         }
         
    }
    show () {
         fill(50, 0, 0);
         // rect(this.x, this.y, scl, scl);
         image(blockadeImg, this.x, this.y, scl, scl)
    }
    
}