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

function isWin(leftTeam, rightTeam) {
    return leftTeam[0] > rightTeam[0];
}

function calculateAmount(cota, leftTeam, rightTeam) {

}

function stringToArray(numbers) {
    return numbers.split(",").map(e => +e);
}