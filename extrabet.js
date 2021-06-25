let team = prompt("Echipa pe care pariati:");

let table = document.querySelector('.table-content');

let lose = document.querySelector('.lose');



let leftTeam = generateTeamLeftSide();
leftTeam[0] = team;
let leftTeamScore = generateScoreLeftSide();
let rightTeam = generateTeamRightSide();
let rightTeamScore = generateScoreRightSide();

let displayWIN = document.querySelector('.win');



table.innerHTML = addScore(leftTeam, leftTeamScore, rightTeam, rightTeamScore);

if (isWin(leftTeamScore, rightTeamScore) == true) {
    displayWIN.innerHTML = displayWin(team, leftTeamScore, rightTeamScore);
} else {
    lose.innerHTML = displayLose();
}