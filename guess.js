//Welcome Note
alert("Welcome to Guess The Number Game by ABIKE.");

// Please enter your username;
let userName = prompt("Please enter your username");
let actualUserName = userName.toUpperCase();
alert("Hi " + actualUserName  + ". Welcome!");

let gameAbout = "Basically, you are to guess the number the system guesses and input it. If you guess correctly, you will be assigned 10 points and then proceed to the next level. Otherwise, you will be assigned 0 point and then it is gameover. There are 10 levels in this game and the level of difficulty increases as you increase in level.";
alert(gameAbout);
alert("Enjoy the ride " + actualUserName  + " .");

let correctGuess = true;
let head = 1;
let end = 2;
let guessPoint = 0;
let guessPoints = 10;
// let systemInput = Math.floor(Math.random() * 2 + 1);
// let userInput = prompt("What's your guess?");
// let guessCount = 0;
// let guessPoints = 0;
// let resetButton;


function gameFun() {
    while (correctGuess && end <= 10) {
        let result = Math.floor(Math.random() * end + head);
        let userInput = prompt(`What's your guess between ${head} & ${end}`);
        let theGamePoint = (guessPoint + guessPoints);
        let wrongPoint = (theGamePoint - 10);
       
        if (parseInt(userInput) != result) {
            correctGuess = false;
            alert(`Oops, Game Over. That wasn't correct ${actualUserName}. You have ${wrongPoint} points.`);
        }
        else {
            alert(`Congratulations! You guessed it right ${actualUserName} You have ${theGamePoint} points.  You made it to the next level.`);
        }

        guessPoints +=10;
        end +=1;
    }
}

gameFun();
