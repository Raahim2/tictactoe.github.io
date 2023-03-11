const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');
const restart = document.getElementById('restart');
let currentPlayer = 'X';
let gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

function handleClick(event) {
	const square = event.target;
	const index = square.id;

	if (gameStatus[index] === '-') {
		gameStatus[index] = currentPlayer;
		square.textContent = currentPlayer;
		square.classList.add(currentPlayer);
		checkGameStatus();
		switchPlayer();
	}
}

function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	message.textContent = `${currentPlayer}'s Turn`;
}

function checkGameStatus() {
	const winningCombos = [		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];

	for (let combo of winningCombos) {
		if (gameStatus[combo[0]] === gameStatus[combo[1]] &&
			gameStatus[combo[1]] === gameStatus[combo[2]] &&
			gameStatus[combo[0]] !== '-') {
			endGame(`${currentPlayer} Wins!`);
			return;
		}
	}

	if (!gameStatus.includes('-')) {
		endGame("It's a Tie!");
	}
}

function endGame(messageText) {
	message.textContent = messageText;
	s
    restart.style.display = 'block';
squares.forEach(square => square.removeEventListener('click', handleClick));
}

function restartGame() {
currentPlayer = 'X';
gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

squares.forEach(square => {
square.textContent = '';
square.classList.remove('X');
square.classList.remove('O');
square.addEventListener('click', handleClick);
});
restart.style.display = 'none';
}

squares.forEach(square => square.addEventListener('click', handleClick));
restart.addEventListener('click', restartGame);