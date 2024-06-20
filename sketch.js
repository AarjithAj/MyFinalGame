var s;
var f;
var r;
var scl = 60;
var b = 0;
var Gg = 0;
var turned = false;
var speed = 10;
var apple;
var rockIMG;
var food_count = 0;
var rockArray = [];
var trainHead;
var trainTail;
var trainstop1
var trainstop2
var trainstop3
var goodGasImg;
var badGasImg;
var gasMeter = 200;
var randomNumber;
var score = 0;
var life = 3;
var gameState = "start"

function preload() {
    goodGasImg = loadImage("MyFinalGame.assets/goodGas.png");
    badGasImg = loadImage("MyFinalGame.assets/badGas.png")

    trainstop1 = loadImage("MyFinalGame.assets/trainstop1.png")
    trainstop2 = loadImage("MyFinalGame.assets/trainstop2.png")
    trainstop3 = loadImage("MyFinalGame.assets/trainstop3.png")
    
    blockadeImg= loadImage("MyFinalGame.assets/blockade.png");
    trainHead = loadImage("MyFinalGame.assets/trainHead.png")
    trainTail = loadImage("MyFinalGame.assets/trainTail.png")
    
}
function setup() {
     createCanvas(600, 600);
     s = new Snake();
     f = new Food(trainstop1);
     Gg = new GoodGas();
     Bg = new BadGas();
     r = new Rock();
     r1 = new Rock();
     //frameRate(10);
     for(var i = 0; i < food_count; i++) {
          r = new Rock();
          rockArray.push(r);
          
     }

     
}

function draw() {
     background(b);
     f.show();
     r.show();
     r.end();
     r1.show();
     r1.end();
     s.update();
     s.show();
     s.end();
     Gg.show();
     Bg.show();

     textSize(25)
     fill("red")
     text("score:"+ food_count, 500, 20)
     text("life:"+ life, 500, 40)


     if (s.eat(f)) {
          f.eaten();
          food_count += 10;
          console.log(food_count);
     }

     if (s.eat(Gg) || s.eat(Bg)) {
          Gg.eaten();
          Bg.eaten();

          if(s.eat(Gg)){
               gasMeter += 5;
               console.log(gasMeter);
           }
           if (s.eat(Bg)) {
          
               gasMeter =- score/100 + 1;
               console.log(gasMeter);
           }
     }

     

     for(var i = 0; i < rockArray.length; i++) {
          r.show();
          console.log(rockArray.length);
     }
     s.challenge();
     frameRate(speed + s.count / 3);
     turned = false;

     if(gasMeter > 0 && gameState == "start"){
          gasMeter = gasMeter - 0.5;
          console.log(gasMeter)
     }

     if(gasMeter <= 0){
          console.log("Fuel lost")
          gameState = "over"
          text("You Lost All Of Your Fuel!", 300, 150) 
     }

     fill("grey")
     rect(10,10,200,20)

     fill("red")
     rect(10,10,gasMeter,20)
}

function keyPressed() {

     if(gameState == "start"){
          if (keyCode === UP_ARROW && (this.s.yspeed != 1) && (turned === false)) {
               s.dir(0, -1);
               turned = true;
               return;
          }
          if (keyCode === DOWN_ARROW && (this.s.yspeed != -1) && (turned === false)) {
               s.dir(0, 1);
               turned = true;
               return;
          }
          if (keyCode === RIGHT_ARROW && (this.s.xspeed != -1) && (turned === false)) {
               s.dir(1, 0);
               turned = true;
               return;
          }
          if (keyCode === LEFT_ARROW && (this.s.xspeed != 1) && (turned === false)) {
               s.dir(-1, 0);
               turned = true;
          }
          if(keyCode === 32 && s.count >= 5) //space
          {
               s.increase();
               //console.log("this will be how i stop the game");
          // alert("hi");
          }
} 

}