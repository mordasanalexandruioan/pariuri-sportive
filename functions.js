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