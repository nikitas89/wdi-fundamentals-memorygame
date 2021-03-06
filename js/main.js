console.log("Up and running");

var cards = [
  {rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
rank:"king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
  rank:"king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
//fn that checks for match
var checksForMatch = function(){

  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      alert("You found a match!");
      }else {
        console.log("Sorry try again.");
        alert("Sorry try again.");
            }
      }
  }

//fn to store all steps that should happen when the user flips a card.
var flipCard = function(){

var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);

  checksForMatch();

  console.log("User Flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);


}// flipcard end

var createBoard = function(){
  for(var i = 0; i<cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", "i");
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
