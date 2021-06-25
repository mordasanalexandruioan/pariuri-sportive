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

function displayWin(chosenTeam, scoreLeft, scoreRight) {
    let text = `<h3><span>${chosenTeam}</span>, pariata de tine a invis cu scorul de ${scoreLeft[0]} la ${scoreRight[0]}</h3>`;
    return text;
}

function displayLose() {
    let text = `<h3>Ne pare rau, echipa pariata de tine nu a castigat..</h3>`;
    return text;
}

function calculateAmount(cota, leftTeam, rightTeam) {

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