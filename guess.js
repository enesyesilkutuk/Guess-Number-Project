let checkButton = document.getElementById("control");
let restartButton = document.getElementById("restart");
let inputArea = document.getElementById("enterBox");
let informBox = document.getElementById("note");
let result = document.getElementById("attemptNumber");
let guessedNumbers = document.getElementById("guessedNumber");

window.addEventListener("load", () => {

    let targetNumber = Math.floor(Math.random() * 100 + 1);
    let counter = 0;

    checkButton.addEventListener("click", () => {

        if (inputArea.value == targetNumber) {

            counter++;
            guessedNumbers.value += inputArea.value;
            result.value = counter;
            informBox.innerText = "CONGRATS";
            informBox.style.color = "red";
            informBox.style.fontWeight = "bolder";
            informBox.style.fontSize = "45px";
            checkButton.setAttribute("disabled", true);
            inputArea.disabled = true;
            restartButton.style.display = "inline-block";
            checkButton.style.pointerEvents = "none";

        } else if (inputArea.value < targetNumber) {

            inputArea.focus();
            counter++;
            guessedNumbers.value += inputArea.value + ", ";
            inputArea.value = "";
            informBox.innerText = "Enter a higher number";
            result.value = counter;


        } else if (inputArea.value > targetNumber) {

            inputArea.focus();
            counter++;
            guessedNumbers.value += inputArea.value + ", ";
            inputArea.value = "";
            informBox.innerText = "Enter a lower number";
            result.value = counter;
        }
    });

    inputArea.addEventListener("keypress", (e) => {

        if (e.key == "Enter") {
            checkButton.click();
        }
    });

});

restartButton.addEventListener("click", () => {

    window.location.reload();
})