
var sins = []
var Ball;
var P;


function setup(){
  
  createP("Energieerhaltung");
  createCanvas(360 + 40 + 100, 360);
  background(0);
  
  //Den Winkelmodus auf Grad setzten
  angleMode(DEGREES);

  //Kurve erzeugen
  for(var i = 0;i<360;i++){
     sins.push(sin(i)*150)
  }
  
  Ball = new BallC(); // Ball erzeugen
  print(Ball);
 P = createP("Blau => kinetische Energie, Grün => Potentielle Energie"); 
}


function draw(){
  
  background(0); //das ganze Bild wieder schwarz malen 
  stroke("red");
  
  Ball.show(); // Ball verhalten simulieren und ihn aufmalen
  
  //Kurve malen
  for(var i = 0; i < 360;i++){
      point(i, 180 + sins[i]);
  }
  
 //Abstand zwischen Simulation und Auswertung 
 fill("white");
 rect(360, 0, 40, 360);
 
 //Balkendiagramm malen 
 eKin = map(Ball.eKin, 10, 300, 0, 360);
 ePot = 360 - eKin;
 fill("blue")
 rect(400, 0, 100, eKin);
 fill("green");
 rect(400, eKin, 100, ePot);
  
}


function BallC(){
   //Variablen erzeugen und initialisieren
   this.x = 0;
   this.r = 10;
   this.y = 180 -this.r;
   this.v = 1;
   this.a = 0;
   this.E = 310;
   this.ePot;
   this.eKin;
  
   this.show = function(){
      //Simulieren und Malen
      this.ePot = (330-this.y); // ePot = (m=1)*(g=1)*h(330 - Höhe des Balles auf dem Koordinatensystem)
      this.eKin = this.E - this.ePot; // eKin = E - ePot
      this.v = map(sqrt(this.eKin  + this.eKin), 0, 25, 0, 5); // v  = sqrt(2*eKin)
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


