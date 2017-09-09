console.log("Up and running");


var cards = ["queen", "queen", "king", "king"];
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
var flipCard = function(cardId){

cardsInPlay.push(cards[cardId]);

checksForMatch();

console.log("User Flipped " + cards[cardId]);
}// flipcard end

flipCard(0);
flipCard(1);
