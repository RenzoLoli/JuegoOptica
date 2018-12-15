
var x, y;
var d;
var div;
var dificultad;

function setup() {
 	
	createCanvas(501, 501);

  	x = int(random(2,9));
	y = int(random(2,9));

	div = document.getElementById("pos");
	dificultad = prompt("dificultad (0: medio, 1: dificil, 2: tu solo): ");

}

function draw() {

  	background(255); 

	console.log(d);

  	for (var i = 0; i < 10; i++) {
  		
  		for (var j = 0; j < 10; j++) {
  			
  			fill(0);
  			rect(50*j, 50*i, 45, 45);

  			if(i == x && j == y){

  				noStroke();
  				fill(150);
  				ellipse(49.5*j, 49.5*i , 5);
  				d = dist(mouseX, mouseY, 49.5*j, 49.5*i);

  				if(dificultad == 0){

  					pos.innerHTML = int(d);

  				}
  				else if(dificultad == 1) {

  					pos.innerHTML = "no hay prro (weno si la hay pero no te wa decir donde esta 7u7)";

  				}
  				else if(dificultad == 2) {

  					pos.innerHTML = "no hay prro, busca soledad";

  				}

  			}

  		}

  	}

}

function mousePressed() {
  

	if(d <= 5){

		alert("Ganaste Prro");

	}

}
