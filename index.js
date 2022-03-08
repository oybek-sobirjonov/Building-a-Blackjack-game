let player = {
    name: "Per",
    chips: 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let message = "";
let isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

// Getting a random card
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1){
        return 11;
    } else if(11 <= randomNumber && randomNumber <= 13) {
        return 10;
    } else {
    return randomNumber;
    }
}

// Starting the game
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame();
}

// displaying data to the user
function renderGame () {
    cardsEl.textContent = "Cards: ";
    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]; 
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo. You have got Blackjack.";
        hasBlackJack = true;
    } else {
        message = "You're out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

// getting new card
function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
