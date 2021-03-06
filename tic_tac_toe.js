var drawMove = function(square, move){
	$(square).removeClass("blank").addClass(move);
};

var generateComputerMove = function(){
	var squares = $(".blank.square");
	var square = squares[Math.floor(Math.random()*squares.length)];
	return square;
};

var newGame = function(){
	$(".blank").click(function(){
		gameStatus = checkEndGame();
		if(gameStatus) {
			alert(gameStatus);
			return;
		}
		drawMove(this, "x");
		gameStatus = checkEndGame();
		if(gameStatus) {
			alert(gameStatus);
			return;
		}
		var computerMove = generateComputerMove();
		drawMove(computerMove, "o");
		gameStatus = checkEndGame();
		if(gameStatus) {
			alert(gameStatus);
			return;
		}
	});
};

var checkRow = function(squares){
	if($(squares[0]).hasClass("x") && 
	   $(squares[1]).hasClass("x") && 
	   $(squares[2]).hasClass("x")) {
		return "x"
	}
	if($(squares[3]).hasClass("x") && 
	   $(squares[4]).hasClass("x") && 
	   $(squares[5]).hasClass("x")) {
		return "x"
	}
	if($(squares[6]).hasClass("x") && 
	   $(squares[7]).hasClass("x") && 
	   $(squares[8]).hasClass("x")) {
		return "x"
	} 
	if($(squares[0]).hasClass("o") && 
	   $(squares[1]).hasClass("o") && 
	   $(squares[2]).hasClass("o")) {
		return "o"
	}
	if($(squares[3]).hasClass("o") && 
	   $(squares[4]).hasClass("o") && 
	   $(squares[5]).hasClass("o")) {
		return "o"
	}
	if($(squares[6]).hasClass("o") && 
	   $(squares[7]).hasClass("o") && 
	   $(squares[8]).hasClass("o")) {
		return "o"
	} 
	return null;
};

var checkColumn = function(squares){
	if($(squares[0]).hasClass("x") && 
	   $(squares[3]).hasClass("x") && 
	   $(squares[6]).hasClass("x")) {
		return "x"
	}
	if($(squares[1]).hasClass("x") && 
	   $(squares[4]).hasClass("x") && 
	   $(squares[7]).hasClass("x")) {
		return "x"
	}
	if($(squares[2]).hasClass("x") && 
	   $(squares[5]).hasClass("x") && 
	   $(squares[8]).hasClass("x")) {
		return "x"
	} 
	if($(squares[0]).hasClass("o") && 
	   $(squares[3]).hasClass("o") && 
	   $(squares[6]).hasClass("o")) {
		return "o"
	}
	if($(squares[1]).hasClass("o") && 
	   $(squares[4]).hasClass("o") && 
	   $(squares[7]).hasClass("o")) {
		return "o"
	}
	if($(squares[2]).hasClass("o") && 
	   $(squares[5]).hasClass("o") && 
	   $(squares[8]).hasClass("o")) {
		return "o"
	} 
	return null;
};

var checkDiagonal = function(squares){
	if($(squares[0]).hasClass("x") && 
	   $(squares[4]).hasClass("x") && 
	   $(squares[8]).hasClass("x")) {
		return "x"
	}
	if($(squares[2]).hasClass("x") && 
	   $(squares[4]).hasClass("x") && 
	   $(squares[6]).hasClass("x")) {
		return "x"
	}
	if($(squares[0]).hasClass("o") && 
	   $(squares[4]).hasClass("o") && 
	   $(squares[8]).hasClass("o")) {
		return "o"
	}
	if($(squares[2]).hasClass("o") && 
	   $(squares[4]).hasClass("o") && 
	   $(squares[6]).hasClass("o")) {
		return "o"
	} 
	return null;
};

var checkEndGame = function(){
	var squares = $(".square");
	if(checkRow(squares) === "x") {
		return "Player wins!";
	} 
	if (checkRow(squares) === "o"){
		return "Computer wins!";
	}
	if(checkColumn(squares) === "x") {
		return "Player wins!";
	} 
	if (checkColumn(squares) === "o"){
		return "Computer wins!";
	}
	if(checkDiagonal(squares) === "x") {
		return "Player wins!";
	} 
	if (checkDiagonal(squares) === "o"){
		return "Computer wins!";
	}
	return null;
};

$(document).ready(function(){
	newGame();

});
