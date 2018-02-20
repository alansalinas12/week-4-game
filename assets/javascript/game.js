$(document).ready(function() {
	
	




	var targetPoints = 0;
	var winCount = 0;
	var loseCount = 0;
	var redGem = 0;
	var blueGem = 0;
	var yellowGem = 0;
	var greenGem = 0;
	var currentPoints = 0;

	var isGameWon = false;
	var isGameLost = false;


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
		
		var targetPoints = getTargetPoints();
		var redGem = getGemPoints();
		var blueGem = getGemPoints();
		var yellowGem =  getGemPoints();
		var greenGem =  getGemPoints();

	}
	console.log(targetPoints)
	$("#target-points").text("Target points: " + targetPoints);
	$("#red-gem").val(redGem);
	$("#blue-gem").val(blueGem);
	$("#yellow-gem").val(yellowGem);
	$("#green-gem").val(greenGem);

	$(".gemcontainer").on("click", ".gem", function() {
		if (currentPoints < targetPoints) {
			currentPoints += $(this).val();
			$("#current-points").text(currentPoints);
		} else {
			return isGameLost = true;
		}

		if (currentPoints === targetPoints) {
			return isGameWon = true;
		}

		if (isGameWon) {
			winCount = winCount++;
			$("#win-count").text(winCount);
			initializeGame();
		}

		if (isGameLost) {
			loseCount = loseCount++;
			$("#lose-count").text(loseCount);
			initializeGame();
		}
	})





});