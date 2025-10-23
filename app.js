// getting the buttons
newGameBtn = document.querySelector("#new_game");
playBtns = document.querySelectorAll(".play_btn");
winnerTxt = document.querySelector("#winner");
winDisplay = document.querySelector("header");

// toggle
let turn0 = false;

// winning array
let winArr = [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal
    [2, 4, 6]
];

// adding the event listener
playBtns.forEach((box) => {
    box.addEventListener("click", () => {
        // checking for turn
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;

        checkWinner();
    })
})

// check winner function
function checkWinner() {
    let winDetected = false;
    winArr.forEach((arr) => {
        // if no buttons are null
        if (playBtns[arr[0]].innerText != '' && playBtns[arr[1]].innerText != '' && playBtns[arr[2]].innerText != '') {
            if (playBtns[arr[0]].innerText == playBtns[arr[1]].innerText && playBtns[arr[1]].innerText == playBtns[arr[2]].innerText)
            {
                winnerTxt.innerText = "Winner " + playBtns[arr[0]].innerText;
                winDetected = true;
                winDisplay.style.display = "flex";
            }
        }
    })

    // disabling all other btns
    if (winDetected) {
        disableAllBtns(true);
    }
}

// disable all btns
function disableAllBtns(disable) {
    playBtns.forEach((btn) => {
        // resetting the button
        if (!disable)
            btn.innerText = '';

        btn.disabled = disable;
    })
}

// resetting the game
newGameBtn.addEventListener("click", () => {
    // enabling all buttons
    disableAllBtns(false);  
    winDisplay.style.display = "none";
    turn0 = false;
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
