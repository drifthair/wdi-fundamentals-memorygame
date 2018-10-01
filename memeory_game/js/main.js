var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png" 
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];

var score = 0;

var checkForMatch = function(id) {
    if ( cardsInPlay.length > 1) {
        if ( cardsInPlay[0] === cardsInPlay[1] ) {
            score +=1;
            alert("You found a match! Your scrore is " + score);
            
        }
        else {
            alert("Sorry, try a again.");
        }
    }
};

var flipCard = function() {
     var cardId = this.getAttribute('data-id');
     console.log("User flipped " + cards[cardId].rank);
     console.log(cards[cardId].cardImage);
     this.setAttribute('src', cards[cardId].cardImage);
     console.log(cards[cardId].suit);
     cardsInPlay.push(cards[cardId].rank);
     checkForMatch(cardId);
 };

var createBoard = function() {
    for ( var i = 0; i < cards.length; i++ ) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', '../images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

var resetBoard = function() {
    for ( var j = 0; j < document.getElementById('game-board').children.length; j++ ) {
        var ele = document.querySelectorAll('img');
        ele[j].setAttribute('src', '../images/back.png');

        cardsInPlay.length = 0;
    }
}

createBoard();


