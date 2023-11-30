document.addEventListener('DOMContentLoaded', function () {
    const lifeTotalElement = document.getElementById('life-total');
    const increaseLifeButton = document.getElementById('increase-life');
    const increaseLifeButton10 = document.getElementById('increase-life-10');
    const decreaseLifeButton = document.getElementById('decrease-life');
    const decreaseLifeButton10 = document.getElementById('decrease-life-10');
    const rollD20Button = document.getElementById('roll-d20');
    const outcomeElement = document.getElementById('outcome');
    const resetButton = document.getElementById('reset');

    let lifeTotal = 40;
    let previousRoll = 0;
    let previousOutcome = 0;
    let outcomeMarker = 0;

    increaseLifeButton.addEventListener('click', function () {
        lifeTotal = parseInt(lifeTotalElement.value);
        lifeTotal++;
        updateLifeTotal();
    });

    increaseLifeButton10.addEventListener('click', function () {
        lifeTotal = parseInt(lifeTotalElement.value);
        lifeTotal += 10;
        updateLifeTotal();
    });

    decreaseLifeButton.addEventListener('click', function () {
        lifeTotal = parseInt(lifeTotalElement.value);
        lifeTotal--;
        updateLifeTotal();
    });

    decreaseLifeButton10.addEventListener('click', function () {
        lifeTotal = parseInt(lifeTotalElement.value);
        lifeTotal -= 10;
        updateLifeTotal();
    });

    rollD20Button.addEventListener('click', function () {
        rollD20Button.disabled = true;
    
        displayOutcomeBasedOnRange();
    
        setTimeout(function () {
            rollD20Button.disabled = false;
        }, 2000);
    });

    resetButton.addEventListener('click', function () {
        lifeTotal = 40;
        updateLifeTotal();
        outcomeElement.textContent = '';
    });

    function updateLifeTotal() {
        lifeTotalElement.value = lifeTotal;
    }

    function rollD20() {
        let roll = Math.floor(Math.random() * 20) + 1;
        if (roll === previousRoll) {
            return rollD20();
        } else {
            previousRoll = roll;
            return roll;
        }
    }

    function displayOutcomeBasedOnRange() {
        const roll = rollD20();
        let outcomeMessage;
    
        if (roll <= 3) {
            outcomeMessage = 'Exile all nonland permanents. PlayerBot takes 10 damage.';
            outcomeMarker = 1;
        } else if (roll > 3 && roll <=7) {
            outcomeMessage = 'Sacrifice all creatures. PlayerBot takes 10 damage.';
            outcomeMarker = 1;
        } else if (roll > 7 && roll <= 16) {
            outcomeMessage = 'Player w/ highest total Attack and Defense sacrifice target permanent. PlayerBot played 2 spells and drew a second card.';
            outcomeMarker = 2;
        } else if (roll > 16 && roll <=19) {
            outcomeMessage = 'PlayerBot played 1 spell, drew two extra cards and played an additional land.';
            outcomeMarker = 3;
        } else {
            outcomeMessage = 'Player w/ the lowest total Attack and Defense may scry 4 then draw 2 cards, the player with the highest may scry 2 and draw 1.';
            outcomeMarker = 4;
        }

        if (outcomeMarker === previousOutcome) {
            return displayOutcomeBasedOnRange();
        } else {
            previousOutcome = outcomeMarker;
            displayOutcome(outcomeMessage);
        }
    
        displayOutcome(outcomeMessage);
    }

    function displayOutcome(outcome) {
        outcomeElement.textContent = outcome;
    }
});
