var savedDice = [];
// Function to roll the dice and set the proper image
async function rollDice() {
    var dice = ["die1", "die2", "die3", "die4", "die5"];
    for (var i = 0; i < dice.length; i++) {
        if (!savedDice.includes(i + 1)) {
            // Wait for the fetch to complete
            document.getElementById(dice[i]).src = (await fetchNum1To6()) + ".png";
        }
    }
}

async function fetchNum1To6() {
    const url = 'http://localhost:3000/fetchNum1To6';
    const response = await fetch(url);
    const responseText = await response.text();
    return responseText;
}

// Function to toggle dice between save and unsave
function toggleSaveDie(dieNumber) {
    var index = savedDice.indexOf(dieNumber);
    if (index === -1) {
        savedDice.push(dieNumber);
        document.getElementById("saveButton" + dieNumber).textContent = "Unsave";
    } else {
        savedDice.splice(index, 1);
        document.getElementById("saveButton" + dieNumber).textContent = "Save";
    }
}
// Sets the roll dice button as the focus when page is reloaded
document.getElementById("rollButton").focus();