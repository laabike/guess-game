let welcomeNote = "Welcome to GUESS THE NUMBER GAME by Abike";
alert(welcomeNote);

let userName = prompt("Please enter your username");


function userNameCon() {
    if (userName != null) {
        alert("Hi "+ userName + ". Welcome!");
    }

    else {
        alert("Username cannot be blank!");
    }
}

let gameAbout = "Basically, you are to guess the number the system guesses and input it. If you guess correctly, you will be assigned 10 points and then proceed to the next level. Otherwise, you will be assigned 0 point. You will be allowed to try 2 more times before it's game over. There are 10 levels in this game and the level of difficulty increases as you increase in level.";
alert(gameAbout);

// let goodWill = "Welcome ";
alert("ENJOY the ride!");

// Defining system 
// let systemInput = Math.floor(Math.random() * 2 + 1);
// let i = 2;
let newSystemInput = Math.floor(Math.random() * 3 + 1);
let aNewSystemInput = Math.floor(Math.random() * 4 + 1);
// let guessNumber = 1;

//Defining user guess
// let userInput = prompt("What's your guess?");

// function userData() {
//     if (userInput === systemInput) {

//     };
// }


let guessCount = 1;
let resetButton;

// while (userInput !== systemInput) {
//     userInput = prompt("Keep gueesing. Dont give up now")
// }

// if(userInput == systemInput) {
//     alert("You did it")
// }
// function userFun() {
//     if (userInput === systemInput) {
//         alert("Congratulations! You Guessed it right! " + "You made it to level 2");
//     }

//     else if (userInput === newSystemInput) {
//         let newSystemInput = Math.floor(Math.random() * 3 + 1);
//         alert("Congratulations! You Guessed it right! " + "You made it to level 3");
//         alert(userInput);
//         // let systemInput = Math.floor(Math.random() * 3 + 1);
//         // alert("Congratulations! You Guessed it right! " + "You made it to level 4");
//         // alert(userInput);
//     }

//      else if (guessCount === 3) {
//         alert("Oops! You ran out of trials. Try again");
//         setGameOver;
//     }

    // if (userInput === systemInput) {
    //     alert("Congratulations! You Guessed it right! " + "You made it to level 2");
    //     let systemInput = Math.floor(Math.random() * 3 + 1);
    //     let userInput = prompt("What's your guess?");
    // }

//     else if (userInput !== systemInput) {
//         alert("Oops, that wasn't right. Try again");
//         prompt(userInput);
//     }

//     else {
//         alert("Game Over! Try again");
//     }
// }

// function userFun() {
//     do
// }


// userFun();

let systemInput = Math.floor(Math.random() * 2 + 1);
let i = 2;

//Defining user guess
let userInput = prompt("What's your guess?");

function toLoop() {
while (userInput === systemInput)  {
    alert("You guessed right. Move to the next level");
    i += 1;
}
}

toLoop();
