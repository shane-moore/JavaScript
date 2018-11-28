var hands = ['rock','paper','scissors'];

function getHand() {
	return hands[(parseInt(Math.random() * 10) % 3)]
}

var player1 = {
	name: 'Ann',
	wins: 0
};
var player2 = {
	name: 'Bob',
	wins: 0
};

function playRound(p1,p2) {

	p1.hand = getHand();
	p2.hand = getHand();

	console.log(p1.name + ' drew ' + p1.hand);
	console.log(p2.name + ' drew ' + p2.hand);

	if (p1.hand == p2.hand ) {
		console.log('It\'s a draw!');
		return null;
	} else if ( p1.hand == 'rock' ) {
		if ( p2.hand == 'paper') {
			console.log(p2.name + ' wins!');
			p2.wins++;
			return p2;
		} else if ( p2.hand == 'scissors' ) {
			console.log(p1.name + ' wins!');
			p1.wins++;
			return p1;
		}
	} else if ( p1.hand == 'paper' ) {
		if ( p2.hand == 'scissors') {
			console.log(p2.name + ' wins!');
			p2.wins++;
			return p2;
		} else if ( p2.hand == 'rock' ) {
			console.log(p1.name + ' wins!');
			p1.wins++;
			return p1;
		}
	} else if ( p1.hand == 'scissors' ) {
		if ( p2.hand == 'rock') {
			console.log(p2.name + ' wins!');
			p2.wins++;
			return p2;
		} else if ( p2.hand == 'paper' ) {
			console.log(p1.name + ' wins!');
			p1.wins++;
			return p1;
		}
	}
}

function playGame(p1,p2,playUntil) {
	while (p1.wins != playUntil && p2.wins != playUntil ) {
		playRound(p1,p2);
	}

	if ( p1.wins == playUntil ) {
		console.log(p1.name + ' is the ultimate winner!');
	} else if ( p2.wins == playUntil ) {
		console.log(p2.name + ' is the ultimate winner!');
	}
}
playGame(player1,player2,4)