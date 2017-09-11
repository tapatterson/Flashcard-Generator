// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.

//Arguments
var front = process.argv[2];
var back = process.argv[3];

//Constructor funtion 
function BasicCard(front, back) {
	this.front = front;
	this.back = back;

	this.create = function() {
        // append flashcard method to file
        var data = {
            front: this.front,
            back: this.back,
            type: "basic",
        };

	};
}



//node module to export constructor
module.exports = BasicCard;