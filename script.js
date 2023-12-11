document.addEventListener('DOMContentLoaded', function () {
    const lifeTotalElement = document.getElementById('life-total');
    const increaseLifeButton = document.getElementById('increase-life');
    const increaseLifeButton10 = document.getElementById('increase-life-10');
    const decreaseLifeButton = document.getElementById('decrease-life');
    const decreaseLifeButton10 = document.getElementById('decrease-life-10');
    const rollDiceButton = document.getElementById('roll-d20');
    const outcomeElement = document.getElementById('outcome');
    const resetButton = document.getElementById('reset');

    let lifeTotal = 40;
    let previousRoll = 0;
    let previousOutcome = 0;
    //let outcomeMarker = 0;
    let spellDiceOutcome = 0;

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

    rollDiceButton.addEventListener('click', function () {
        rollDiceButton.disabled = true;
    
        let clearDiceOutcome = clearDice();
        let yellowDiceOutcome = yellowDice();
        let graveWheelDiceOutcome = graveWheelDice();
        let rampDiceOutcome = rampDice();
        let aggroDiceOutcome = aggroDice();
    
        outcomeElement.innerHTML = `Clear Dice: ${clearDiceOutcome}<br>` +
        `Yellow Dice: ${yellowDiceOutcome}<br>` +
        `Grave/Wheel Dice: ${graveWheelDiceOutcome}<br>` +
        `Ramp Dice: ${rampDiceOutcome}<br>` +
        `Aggro Dice: ${aggroDiceOutcome}`;

        setTimeout(function () {
            rollDiceButton.disabled = false;
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

    function rollDice(diceSize) {
        let rollNumber = diceSize;
        let roll = Math.floor(Math.random() * rollNumber) + 1;
        
        if (roll === previousRoll) {
            return rollDice();
        } else {
            previousRoll = roll;
            return roll;
        }
    }

    function clearDice() {
        const roll = rollDice(30);
        let outcomeMessage;
    
        if (roll == 1) {
            outcomeMessage = 'Exile all nonland permanents. PlayerBot takes 6 damage..';
        } else if (roll == 2) {
            outcomeMessage = 'Exile all creatures. PlayerBot takes 6 damage.';
        } else if (roll == 3) {
            outcomeMessage = 'Destroy all nonland permanents. PlayerBot takes 6 damage.';
        } else if (roll == 4) {
            outcomeMessage = 'Destroy all creatures. PlayerBot takes 6 damage.';
        } else if (roll == 5) {
            outcomeMessage = 'Player with the highest total Attack and Defense returns all nonland permanents to their hand. PlayerBot takes 6 damage.';
        } else {
            outcomeMessage = 'Nothing happens.';
        }
    
        //displayOutcome(outcomeMessage);

        return outcomeMessage;
    }

    function yellowDice() {
        const roll = rollDice(20);
        let outcomeMessage;
    
        if (roll == 1) {
            outcomeMessage = 'Player with the highest total Attack and Defense exile target permanent chosen by an opponent.';
        } else if (roll == 2) {
            outcomeMessage = 'Player with the highest total Attack and Defense exiles two target permanents chosen by an opponent.';
        } else if (roll == 3) {
            outcomeMessage = 'Player with the highest total Attack and Defense destroys two target permanents chosen by an opponent.';
        } else if (roll == 4) {
            outcomeMessage = 'Player with the highest total Attack and Defense sacrifice a permanent with the highest total mana value.';
        } else if (roll == 5) {
            outcomeMessage = 'Player with the highest total Attack and Defense Discards 2 cards.';
        } else {
            outcomeMessage = 'Nothing happens.';
        }
    
        //displayOutcome(outcomeMessage);

        return outcomeMessage;
    }

    function graveWheelDice() {
        const roll = rollDice(20);
        let outcomeMessage;
    
        if (roll == 1) {
            outcomeMessage = 'All players exile their graveyards.';
        } else if (roll == 2) {
            outcomeMessage = 'All players Discard their hand and draw 7 cards.';
        } else {
            outcomeMessage = 'Nothing happens.';
        }
    
        //displayOutcome(outcomeMessage);

        return outcomeMessage;
    }

    function rampDice() {
        const roll = rollDice(10);
        let outcomeMessage;
    
        if (roll == 1) {
            outcomeMessage = 'PlayerBot draws one additional card.';
        } else if (roll == 2) {
            outcomeMessage = 'PlayerBot draws one additional card and Discards a card.';
        } else if (roll == 3) {
            outcomeMessage = 'PlayerBot draws two additional cards and Discards two cards.';
        } else if (roll == 4) {
            outcomeMessage = 'PlayerBot draws two additional cards.';
        } else if (roll == 5) {
            outcomeMessage = 'PlayerBot plays one additional land and draws two additional cards.';
        } else if (roll == 6) {
            outcomeMessage = 'PlayerBot plays two additional lands and draws two additional cards.';
        }else {
            outcomeMessage = 'Nothing happens.';
        }
    
        //displayOutcome(outcomeMessage);

        return outcomeMessage;
    }

    function aggroDice() {
        const roll = rollDice(20);
        let outcomeMessage;
    
        if (roll == 1) {
            outcomeMessage = 'PlayerBot attacks the player with the highest life total with a 8/8 that dies after combat.';
        } else if (roll == 2) {
            outcomeMessage = 'PlayerBot attacks the player with the highest life total with a 6/1 trample that dies after combat.';
        } else if (roll >= 3 && roll <= 4) {
            outcomeMessage = 'PlayerBot attacks the player with the highest life total with a 5/2 menace that dies after combat.';
        } else if (roll >= 5 && roll <= 6) {
            outcomeMessage = 'PlayerBot attacks the player with the highest life total with a 4/3 flying that dies after combat.';
        } else if (roll >= 7 && roll <= 11) {
            outcomeMessage = 'PlayerBot takes 3 damage.';
        } else if (roll == 12) {
            outcomeMessage = 'PlayerBot takes 6 damage.';
        }else {
            outcomeMessage = 'Nothing happens.';
        }
    
        //displayOutcome(outcomeMessage);

        return outcomeMessage;
    }

    //function displayOutcome(outcome) {
    //    outcomeElement.textContent = outcome;
    //}
});
