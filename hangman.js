//These are my words
var bigcats= [ 
    "cheetah",
    "lion",
    "leopard", 
    "tiger",
    "jaguar" 
];

//this tracks the user's score
var wins = 0;
var losses = 0;
var wordComplete = false;

//the unrevealed mystery word
var mysteryWord = "";

//the letter chosen by user
var letterGuess = "";

//here's an empty array for storing all the incorrect letter guesses
var letterWrong = [];

//this is how many more incorrect guesses the user has until game over ... a cat has nine lives after all! 
var lives = 9;

//the current mystery word
var current = 0;

//makes the blanks for the mystery word
    function printBlanks (){
        for (var i=0; i < bigcats[0].length; i++) {
            mysteryWord= mysteryWord + "_ ";
        };
        document.getElementById("mystery-word-blanks").innerHTML = mysteryWord;
    }
//Correct guess
function correctGuess(){
    var pos = 0;
    var previousWord = mysteryWord;
        for (var i = 0; i < bigcats[current].length; i++){
            t = bigcats[current].charAt(i);
            pos= i*2;
            mysteryWord = previousWord.substr(0, pos)+ t + " " + previousWord.substr(pos + 2, previousWord.length + 1);
            previousWord = mysteryWord;
        }
     // new set of blanks for word 2
    };
    document.getElementById("mystery-word-blanks").innerHTML = mysteryWord;

//wrong guess
function wrongGuess(){

}
function gameOver(){

}
//the user types a letter and 1 of 4 events happen:
    //1. if the user picks a correct letter found in the mystery word they get to go again
    //2. if the user picks a letter not found in the mystery word they'll lose a life. LIVES -1
    //3. if the user solves the last letter of the mystery word they win one point and start a new game. WINS +1
    //4. if the player picks an incorrect guess on their last life the game will end and one point is added to their losses. LOSSES +1
function userGuess(){
    letterGuess = event.key;
    letterGuess =letterGuess.toLowerCase();
    var n = bigcats[current].indexOf(letterGuess);

         //1. correct letter guess
        if (n >= 0){
            correctGuess();
        }
        //2.wrong guess
        else {
            incorrectGuess();
        }

        //3. winning guess
        if (mysteryWord.indexOf("_") < 0){
            wordComplete = true;
            gameOver();
        }
    

    }

onkeyup = function (){
    printBlanks(bigcats);
    onkeyup = function(){
        userGuess();
    }
}



//starts printing information when page loads! We are creating an event with "onload" to indicate when the website window loads.
window.onload =function now() {
    document.getElementById("letter-wrong").innerHTML = "WRONG LETTERS: ";
    document.getElementById("wins").innerHTML = "WINS " + wins;
    document.getElementById("losses").innerHTML = "LOSSES " + losses;
    document.getElementById("lives").innerHTML = "LIVES " +lives;
};
