let canvas;
let gameContainer;
let pointsContainer;
let timerContainer;

let x, y;
let pista;
let dificultad;

let points = 0;

let offset = 1;
let rectCant = 10;
let rectSize = 0;

let circleSize = 6;

let isMousePressed = false;
let state = 0;

let timer = 0;

function setup() {
 	
	canvas = createCanvas(501, 501).canvas;
	canvas.id = "game";

	gameContainer = document.getElementById('game-container');
	gameContainer.insertBefore(canvas, gameContainer.firstChild);

	pointsContainer = document.getElementById('points');
	pointsContainer.innerHTML = points;

	timerContainer = document.getElementById('timer');
	timerContainer.innerHTML = timer;

	rectSize = width / rectCant;

	init();

	pista = document.getElementById("pos");
	dificultad = prompt("dificultad (0: medio, 1: dificil, 2: tu solo): ");

	if(dificultad == 1) {
		pos.innerHTML = "no hay prro (weno si la hay pero no te wa decir donde esta 7u7)";
	}
	else if(dificultad == 2) {
		pos.innerHTML = "no hay prro, busca soledad";
	}
}

function draw() {
	
  	clear();

	if(state == 0){
		let mouseDistance = dist(mouseX, mouseY, x , y);

		if(dificultad == 0) pos.innerHTML = int(mouseDistance);

		for (var i = 0; i < rectCant; i++) {
			for (var j = 0; j < rectCant; j++) {
				drawRect(j, i);
			}
		}

		drawCircle();

		if(isMousePressed && mouseDistance <= circleSize){
			state = 1;
			addPoint();
		}
	}else if(state == 1){
		drawWin();

		if(isMousePressed){
			state = 0;
			init();
		}
	}

	drawTimer();

	isMousePressed = false;
}

function init(){
	x = int(random(0,rectCant-1)) * rectSize;
	y = int(random(0,rectCant-1)) * rectSize;
}

function addPoint(){
	points++;
	pointsContainer.innerHTML = points;
}

function drawCircle(){
	fill(150);
	ellipse(x,y,circleSize);
}

function drawRect(rX, rY){

	let pX = rectSize*rX + offset;
	let pY = rectSize*rY + offset;
	let w  = rectSize - 2 * offset;
	let h  = rectSize - 2 * offset;

	fill(0);
	rect(pX, pY, w, h);
}

function drawWin(){
	fill(0);
	textSize(80);
	textAlign(CENTER,CENTER);
	text("GANASTE!!", width*0.5, height*0.5);
	textSize(30);
	text("\n\n\nclick para jugar denuevo", width*0.5, height*0.5);
}

function drawTimer(){

	timerContainer.innerHTML = (timer).toFixed(1);

	let infLayer = deltaTime/1000;

	timer += (infLayer == Infinity)? 0 : infLayer;
}

function mousePressed() {
	isMousePressed = true;
}