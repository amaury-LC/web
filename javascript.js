var Lscreen=screen.width;


function test(canvasf,imgf,Ccanvas,Cexp){







tailleE = 400;

if(Lscreen < 900){

  tailleE = 300;
  
}

var mouv = -230;

var taille = -80;
var taille2 = 500;

var verif = false;

var bas = false;

console.log(imgf)



function photo1(){

	

	

	


		var canvas = document.getElementById(canvasf);
		var image1 = canvas.getContext("2d");



		var image = document.getElementById(imgf);

		image1.drawImage(image, 0, 0, tailleE, 225,);
		
	



}



// /* globals window */FE075D FE7F07

// var WATER_TOP_COLOR = "#FE7F07";
// var WATER_BOTTOM_COLOR = "#FE075D";
var WATER_TOP_COLOR = "rgba(254, 127, 7, 1)";
var WATER_BOTTOM_COLOR = "rgba(254, 7, 93, 1)";




var htmlCanvas = document.querySelector(Ccanvas);
var ctx = htmlCanvas.getContext('2d');
  // var ship = window.document.querySelector('#ship');
  var container = document.querySelector(Cexp);

  var screenWidth;
  var screenHeight;

  var wave = {};
  var waveLength = 0;
  var wave2 = {};
  var wave3 = {};
  var waves = {};
  var shipComputed;

  var moveWavesId;
  var moveShipId;

  function value(x, width, numberOfWaves) {
  	x = x * numberOfWaves / width * 2 * Math.PI;
  	return Math.sin(x);
  }

  function multiplier(x, width) {
  	var multiplierVar = 90;

  	if (x <= width / 2) {
  		return x * multiplierVar * 2 / width;
  	}
  	return width * multiplierVar / 2 / x;
  }

  function randomIntFromInterval(min, max) {
  	return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function draw() {
  	ctx.clearRect(0, 0, screenWidth, screenHeight);

  	photo1();




  	



  	ctx.beginPath();
  	ctx.moveTo(screenWidth, screenHeight);

  	for (var x = waveLength - 1; x > 0; x--) {
  		ctx.lineTo(x, waves[x])
  	}

  	var gradient = ctx.createLinearGradient(0, 0, 0, screenHeight);
  	gradient.addColorStop(.5, WATER_TOP_COLOR);
  	gradient.addColorStop(1, WATER_BOTTOM_COLOR);

  	document.getElementById(canvasf).addEventListener('mouseover', function (event) {

  		if(bas){

  		 WATER_TOP_COLOR = "rgba(254, 127, 7, 0.5)";
		 WATER_BOTTOM_COLOR = "rgba(254, 7, 93, 0.5)";

		}

  			

  		});

  	ctx.fillStyle = gradient;
  	ctx.lineTo(0, screenHeight);

  	ctx.fill();


  	requestAnimationFrame(draw);
  }

  function initializeWaves() {
  	var randomWaves1 = randomIntFromInterval(4, 5);
  	var randomWaves2 = randomIntFromInterval(2, 3);
  	var randomWaves3 = randomIntFromInterval(6, 7);

  	for (var x = 0; x < screenWidth; x++) {
  		wave[x] = value(x, screenWidth, randomWaves1) * multiplier(x, screenWidth) / 4;
  		wave2[x] = value(x, screenWidth, randomWaves2) * multiplier(x * 3, screenWidth) / 6;
  		wave3[x] = value(x, screenWidth, randomWaves3);
  	}
  	waveLength = Object.keys(wave).length;
  }

  function moveWaves() {
  	
  	if(taille < 500){
  		taille = taille + 5 ;
  		if (!waveLength) {
  			initializeWaves();
  		}

  		for (var x = waveLength - 1; x >= 0; x--) {
  			if (x === 0) {
  				wave2[x] = wave2[waveLength - 1];
  				wave3[x] = wave3[waveLength - 1];
  			} else {
  				wave2[x] = wave2[x - 1];
  				wave3[x] = wave3[x - 1];
  			}

  			waves[x] = wave[x] + wave2[x] + wave3[x] + taille / 2;
  		}

  		
  	}
  	else{

  	

  		document.getElementById(canvasf).addEventListener('mouseover', function (event) {

  			bas = true;


  			verif = true;


  			

  				

  		});

  		document.getElementById(canvasf).addEventListener('mouseout', function (event) {


  			verif = false ;


  			

  				

  		});

  	

  	
  		



  		if(verif && taille2>350){

  			taille2 += -5;
  		}
  		else if(verif != true && taille2 < 500){

  			taille2 += 5;
  			
  		}

  		if (!waveLength) {
  			initializeWaves();
  		}

  		for (var x = waveLength - 1; x >= 0; x--) {
  			if (x === 0) {
  				wave2[x] = wave2[waveLength - 1];
  				wave3[x] = wave3[waveLength - 1];
  			} else {
  				wave2[x] = wave2[x - 1];
  				wave3[x] = wave3[x - 1];
  			}

  			waves[x] = wave[x] + wave2[x] + wave3[x] + taille2 / 2;
  		}


  	}
  }

  function startLoop() {
  	clearInterval(moveWavesId);
  	moveWavesId = setInterval(moveWaves, 8000 / screenWidth);



  }

  function recalculateCanvas() {
  	var containerInfo = container.getBoundingClientRect();
  	screenWidth = containerInfo.width;
  	screenHeight = containerInfo.height;
  	htmlCanvas.width = screenWidth;
  	htmlCanvas.height = screenHeight;

  	wave = {};
  	wave2 = {};
  	wave3 = {};
  	waveLength = 0;
  	waves = {};

  	shipComputed = {
  		top: screenHeight / 2,
  		left: -10,
  		widthScreenWidthPercent: 0.07,
  	};

  	startLoop();
  }

  window.addEventListener('resize', recalculateCanvas);
  window.addEventListener('orientationchange', recalculateCanvas);
  window.removeEventListener("unload", recalculateCanvas);

  recalculateCanvas();
  requestAnimationFrame(draw);



}















//  var mouv = -300;















test("canvas1","photo1",".canvasclass",".experience");
test("canvas2","photo2",".canvas2",".experience");
test("canvas3","photo3",".canvas3",".experience");





