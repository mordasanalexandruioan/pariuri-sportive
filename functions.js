function generateScoreLeftSide() {
    let v = [];
    for (let i = 0; i <= 5; i++) {
        let random = Math.floor(Math.random() * 7 + 0);
        v.push(random);
    }
    return v;
}

function generateScoreRightSide() {
    let v = [];
    for (let i = 0; i <= 5; i++) {
        let random = Math.floor(Math.random() * 7 + 0);
        v.push(random);
    }
    return v;
}

function generateTeamLeftSide() {
    return v = ['Real Madrid', 'Dortmund', 'Barcelona', 'U Cluj', 'Ajax', 'Lion'];
}

function generateTeamRightSide() {
    return v = ['Juventus', 'Dinamo', 'Manchester City', 'PSG', 'Bayern Munchen', 'Amsterdam'];
}

function isWin(leftTeam, rightTeam) {
    return leftTeam[0] > rightTeam[0];
}

function displayWin(chosenTeam, scoreLeftG, scoreRightG, leftTeamScore, rightTeamScore, cota, amount) {
    let text = `<h3><span>${chosenTeam}</span>, pariata de tine a invis cu scorul de ${leftTeamScore[0]} la ${rightTeamScore[0]}</h3>
    <h3>Ai castigat suma de ${calculateAmount(scoreLeftG, scoreRightG, leftTeamScore, rightTeamScore, cota, amount)}</h3>`;
    return text;
}

function displayLose() {
    let text = `<h3>Ne pare rau, echipa pariata de tine nu a castigat..</h3>`;
    return text;
}

function calculateAmount(scoreLeft, scoreRight, leftTeamScore, rightTeamScore, cota, amount) {
    let sum = guessScoreLeft(scoreLeft, leftTeamScore, amount, cota) + guessScoreRight(scoreRight, rightTeamScore, amount, cota);
    return sum;
}


function addScore(leftTeam, leftTeamScore, rightTeam, rightTeamScore) {
    let text = ``;
    for (let i = 0; i < leftTeamScore.length; i++) {
        text += `
        <div class="table-row">
            <div class="left-team">${leftTeam[i]}</div>
            <div class="score">${leftTeamScore[i]}-${rightTeamScore[i]}</div>
            <div class="right-team">${rightTeam[i]}</div>
        </div>
            `
    }

    return text;
}

function guessScoreLeft(scoreLeft, leftTeamScore, amount, cota) {
    scoreLeft = +scoreLeft;
    let sum = 0;
    if (scoreLeft === leftTeamScore[0]) {
        sum = (amount / 2) * cota;
    } else if (scoreLeft === leftTeamScore[0] - 1 || scoreLeft === leftTeamScore[0] + 1) {
        sum = ((amount / 2) * cota) - ((amount / 2) * cota) * (50 / 100);
    } else if (scoreLeft === leftTeamScore[0] - 2 || scoreLeft === leftTeamScore[0] - 2) {
        sum = ((amount / 2) * cota) - ((amount / 2) * cota) * (77 / 100);
    } else if (scoreLeft === leftTeamScore[0] - 3 || scoreLeft === leftTeamScore[0] - 3) {
        sum = ((amount / 2) * cota) - ((amount / 2) * cota) * (93 / 100);
    }
    return sum;

}

function guessScoreRight(scoreRight, rightTeamScore, amount, cota) {
    scoreRight = +scoreRight;
    let sum = 0;
    if (scoreRight === rightTeamScore[0]) {
        sum = (amount / 2) * cota;
    } else if (scoreRight === rightTeamScore[0] - 1 || scoreRight === rightTeamScore[0] + 1) {
        sum = ((amount / 2) * cota) - ((amount / 2) * cota) * (50 / 100);
    } else if (scoreRight === rightTeamScore[0] - 2 || scoreRight === rightTeamScore[0] - 2) {
        sum = ((amount / 2) * cota) - ((amount / 2) * cota) * (77 / 100);
    } else if (scoreRight === rightTeamScore[0] - 3 || scoreRight === rightTeamScore[0] - 3) {
        sum = ((amount / 2) * cota) - ((amount / 2) * cota) * (93 / 100);
    }
    return sum;
}