
var theta = 0;


function setup() {
  createCanvas(1200, 600);
}

function draw() {
  background(247,233,136);
  stroke(136,190,247,255);



    // object links oben lange balken
//   for (var j = 0; j < TWO_PI; j += 0.3) {
//       push();
//       translate(0, 10);
//       rotate(theta-j);
//       noFill();
//       rect(0, 0, 500, 80 );
      
//       pop();
//     }

//       //innere zacken links oben
// for (var j = 0; j < TWO_PI; j += 0.3) {
//       push();
//       translate(150, 70); 
//       rotate(theta-j);
//       noFill();
//       rect(0, 0, 80, 80 );
     
//       pop();
//     }
    
    // routierende linie um kreis aussen
     for (var j = 0; j < TWO_PI; j += 0.03) {
      push();
      translate(600, 300); 
      rotate(theta*j);
      noFill();
      line(370, 200, 1600, 10 ); // mit der ersten zahl zahlen den mittelradius verändern
     
      pop();
    }


 
    // routierende linie um kreis aussen gegen uhrzeigersinn
      for (var j = 0; j < TWO_PI; j += 0.03) {
      push();
      translate(600, 300); 
      rotate(-theta*j);
      noFill();
      line(370, 200, 1600, 10 ); // mit der ersten zahl zahlen den mittelradius verändern
     
      pop();
    }

    // mittelkreis!!
    for (var j = 0; j < TWO_PI; j += 0.2) {
      
      push();
      translate(600, 300); 
      rotate(-theta-j);
      noFill();
      rect(0, 0, 80, 80 );
      
      pop();

    }


        // routierende vierecke um kreis mitte
     for (var j = 0; j < TWO_PI; j += 0.3) {
      push();
      translate(600, 300); 
      rotate(theta*j);
      noFill();
      rect(130, 30, 40, 40 );
      pop();
    }


        // routierende linie um kreis mitte
     for (var j = 0; j < TWO_PI; j += 0.3) {
      push();
      translate(600, 300); 
      rotate(theta*j);
      noFill();
      line(200, 100, 100, 100 ); // mit den ersten beiden zahlen den mittelradius verändern
      pop();
    }



        // routierende linie um kreis mitte
     for (var j = 0; j < TWO_PI; j += 0.3) {
      push();
      translate(600, 300); 
      rotate(theta*j);
      noFill();
      line(mouseX, mouseY, 100, 100 ); // mit den ersten beiden zahlen den mittelradius verändern
      pop();
    }




       // routierende linie um kreis mitte
     for (var j = 0; j < TWO_PI; j += 0.3) {
      push();
      translate(600, 300); 
      rotate(theta*j);
      noFill();
      //rect(0, 0, 3, 3 ); // mit den ersten beiden zahlen den mittelradius verändern
     pop();
    }

      // Kreise mitte
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta*j);
      noFill();
      ellipse(180, 100, 10, 10 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }
   

    // Kreise aussen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(theta*j);
      noFill();
      ellipse(390, 100, 20, 20 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }

 // Kreise aussen
    for (var j = 0; j < TWO_PI; j += 0.1) {
      push();
      translate(600, 300); 
      rotate(-theta*j);
      noFill();
      ellipse(360, 100, 10, 10 ); // mit den ersten beiden zahlen den mittelradius verändern
     
      pop();
    }


  // mittel kreis linie
  translate(width/2, height/2);
  noFill();
  ellipse(0, 0, 64, 64);




  //object routiert um mittleres object
  push();
  rotate(theta+1);
  translate(300, 0); // 1.zahl ist der abstand zum mittelpunkt
  noFill(50, 200, 255);
  line(20, 20, 10, 100);



  pop();

 





  // Loop from 0 to 360 degrees (2*PI radians)
  for (var i = 0; i < TWO_PI; i += 0.2) { 

    // Push, rotate and draw a line!
    // The transformation state is saved at the beginning of each cycle through the for loop and restored at the end. 
    // Try commenting out these lines to see the difference!
    push(); 
    rotate(theta + i);
    line(50, 50, 0, 50);



    // Loop from 0 to 360 degrees (2*PI radians)
    for (var j = 0; j < TWO_PI; j += 0.5) {
      push();
      translate(150, 250); // macht mittel kreis größer oder kleiner
      rotate(-theta-j);
      line(50, 50, 30, 20);
      pop();
    }

    pop();
  }

  theta += 0.003; // Rotationsgeschwindigkeit

   
}


function keyTyped(){
// or we can use a keyTyped function. Try it out if you type the key s
// it will save an image for you
  if(key == "s"){
    console.log("s");
    saveCanvas("img","png");
  }
}
