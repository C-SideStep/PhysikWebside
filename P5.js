var sins = []
var Ball;
var P;
function setup(){
  createP("Energieerhaltung");
  createCanvas(360 + 40 + 100, 360);
  background(0);
  angleMode(DEGREES);
  print(sin(45))
  for(var i = 0;i<360;i++){
     sins.push(sin(i)*150)
  }
  Ball = new BallO();
  print(Ball);
 P = createP("Blau => kinetische Energie, Grün => Potentielle Energie");
}
function draw(){
  background(0);
  stroke("red");
  Ball.show();
  for(var i = 0; i < 360;i++){
      point(i, 180 + sins[i]);
  }
 fill("white");
 rect(360, 0, 40, 360);
 eKin = map(Ball.eKin, 10, 300, 0, 360);
 ePot = 360 - eKin;
 fill("blue")
 rect(400, 0, 100, eKin);
 fill("green");
 rect(400, eKin, 100, ePot);
}
function BallO(){
   this.x = 0;
   this.r = 10;
   this.y = 180 -this.r;
   this.v = 1;
   this.a = 0;
   this.E = 310;
   this.ePot;
   this.eKin;
   this.show = function(){
      this.ePot = (330-this.y);
      this.eKin = this.E - this.ePot;
      this.v = map(sqrt(this.eKin  + this.eKin), 0, 25, 0, 5);
      if(this.x + this.v >= sins.length){
         this.x = 0;
      }
      else{

      this.x += this.v;
      }
      this.x = round(this.x);
      this.y = 180 + sins[this.x]
      fill("red");
      ellipse(this.x, this.y, this.r, this.r);
   }	
}