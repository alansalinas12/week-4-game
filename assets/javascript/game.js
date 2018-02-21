$(document).ready(function() {
	

	var targetPoints = 0;
	var winCount = 0;
	var loseCount = 0;
	var redGem = 0;
	var blueGem = 0;
	var yellowGem = 0;
	var greenGem = 0;
	var currentPoints = 0;


	initializeGame();

	function initializeGame() {
	
	$("#target-points, #current-points, #red-gem, #blue-gem, #yellow-gem, #green-gem").empty();

		function getTargetPoints (min, max) {
		  min = Math.ceil(19);
		  max = Math.floor(120);
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}


		function getGemPoints (min, max) {
		  min = Math.ceil(1);
		  max = Math.floor(12);
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		targetPoints = getTargetPoints();
		redGem = getGemPoints();
		blueGem = getGemPoints();
		yellowGem =  getGemPoints();
		greenGem =  getGemPoints();
		currentPoints = 0;

	$("#target-points").text("Target points: " + targetPoints);
	$("#current-points").text("Current points: " + currentPoints);
	$("#lose-count").text("Loses: " + loseCount);
	$("#win-count").text("Wins: " + winCount);
	$("#red-gem").attr('value', redGem);
	$("#blue-gem").attr('value', blueGem);
	$("#yellow-gem").attr('value', yellowGem);
	$("#green-gem").attr('value', greenGem);

	}

	function gameWon() {
		winCount++;
		initializeGame();
	}

	function gameLost() {
		loseCount++;
		initializeGame();
	}	



	$(".gemcontainer").on("click", ".gem", function() {
		$("#target-points").text("Target points: " + targetPoints);
		
		if (currentPoints < targetPoints) {

			currentPoints += parseInt($(this).attr('value'));
			$("#current-points").text("Current points: " + currentPoints);
		}

		else if (currentPoints > targetPoints) {
			gameLost();
		}

		else {
			gameWon();
		}
		
	})


});

