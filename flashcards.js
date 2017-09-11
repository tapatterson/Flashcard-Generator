//incorporate packages and other files
var inquirer = require("inquirer");
var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
// var questions = require("./questionLibrary.json");
var fs = require("fs");

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
};

//get command from user
inquirer.prompt([

    {
        name: "command",
        message: "What do you want to do?",
        type: "list",
        choices: ["create-cards","show-cards"]
    },


    //then run commands
]).then(function(answer) {
    if (answer.command === "create-cards") {
        addCard();
    } else if (answer.command === "show-cards") {
        showCards();
    }
});

//addCard function to let user create new cards
function addCard() {
    // get input from user
    inquirer.prompt([
        {
            name: "cardType",
            message: "What type of flashcard are you creating?",
            type: "list",
            choices: ["basic","cloze"]
        },
    
    
    // once user input is received. If user chose basic...
    ]).then(function(answer) {
        if (answer.cardType === "basic") {
            inquirer.prompt([

                {
                    name: "front",
                    message: "Input the question",
                    validate: function(input) {
                        if (input === " ") {
                            return false;
                            console.log("Did you input a question");
                        } else {
                            return true;
                    }
                },

                {
                    name: "back",
                    message: "Input the answer",
                    validate: function(input) {
                        if (input === " ") {
                            return false;
                            console.log("Did you provide an answer?");
                        } 
                        else {
                            return true;
                        }
                    }
                },
         
            
                }
    
    
            //create new basic card. Move to next phase
            ]).then(function(answer) {
                var newBasic = new BasicCard(this.front, this.back);
                newBasic.create();
            //     whatsNext();
            });

            //if user chose cloze...
//         } else if (answer.cardType === "cloze") {
//             inquirer.prompt([{
//                 name: "text",
//                 message: "Input the full text",
//                 validate: function(input) {
//                     if (input === " ") {
//                         console.log("Have you entered the full text?");
//                         return false;
//                     } else {
//                         return true;
//                     }
//                 }
//             }, {
//                 name: "cloze",
//                 message: "Input the word to omit",
//                 validate: function(input) {
//                     if (input === " ") {
//                         console.log("Did you provide a word to omit?");
//                         return false;
//                     } else {
//                         return true;
//                     }
//                 }

//             }]).then(function(answer) {
//                 var text = answer.text;
//                 var cloze = answer.cloze;
//                 if (text.includes(cloze)) {
//                     var newCloze = new ClozeFlashcard(text, cloze);
//                     newCloze.create();
//                     whatsNext();
//                 } else {
//                     console.log("Incorrect. Try again.");
//                     addCard();
//                 }
//             });
//         }
//     });
// };

// var whatsNext = function() {
//     // get user input
//     inquirer.prompt([{
//         name: 'nextAction',
//         message: 'What would you like to do next?',
//         type: 'list',
//         choices: [{
//             name: 'create-new-card'
//         }, {
//             name: 'show-all-cards'
//         }, {
//             name: 'nothing'
//         }]
//     // once user input is received
//     }]).then(function(answer) {
//         if (answer.nextAction === 'create-new-card') {
//             addCard();
//         } else if (answer.nextAction === 'show-all-cards') {
//             showCards();
//         } else if (answer.nextAction === 'nothing') {
//             return;
//         }
//     });
// };

// var showCards = function() {
//     // read the log.txt file
//     fs.readFile('./log.txt', 'utf8', function(error, data) {
//         //if there is an error, log it
//         if (error) {
//             console.log('Error occurred: ' + error);
//         }
//         var questions = data.split(';');
//         var notBlank = function(value) {
//             return value;
//         };
//         questions = questions.filter(notBlank);
//         var count = 0;
//         showQuestion(questions, count);
//     });
// };

// var showQuestion = function(array, index) {
//     question = array[index];
//     var parsedQuestion = JSON.parse(question);
//     var questionText;
//     var correctReponse;
//     if (parsedQuestion.type === 'basic') {
//         questionText = parsedQuestion.front;
//         correctReponse = parsedQuestion.back;
//     } else if (parsedQuestion.type === 'cloze') {
//         questionText = parsedQuestion.clozeDeleted;
//         correctReponse = parsedQuestion.cloze;
//     }
//     inquirer.prompt([{
//         name: 'response',
//         message: questionText
//     }]).then(function(answer) {
//         if (answer.response === correctReponse) {
//             console.log('Correct!');
//             if (index < array.length - 1) {
//               showQuestion(array, index + 1);
//             }
//         } else {
//             console.log('Wrong!');
//             if (index < array.length - 1) {
//               showQuestion(array, index + 1);
//             }
//         }
//     });
// };



//parse command line arguments for basic card

// var cardType = process.argv[2];
// var front = process.argv[3];
// var back = process.argv[4];

// // In the question object
// // choices: [ "Choice A", new inquirer.Separator(), "choice B" ]

// //determine if user wants basic or cloze card
// inquirer.prompt([
// {
// 	type: "checkbox",
// 	name: "cardType",
// 	message: "What type of card would you like?",
// 	choices: ["basic", "cloze"]

// }])
// .then(function)

// if (cardType ==== "basic") {
// 	console.log("You chose the basic flashcard.");

// } 
// //create basic/cloze object
//call basic/close to print cards to console
