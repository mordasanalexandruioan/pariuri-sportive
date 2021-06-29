let team = prompt("Echipa pe care pariati:");

let table = document.querySelector('.table-content');

let lose = document.querySelector('.lose');

let scoreLeftG = prompt("Scorul echipei pariate:");
scoreLeftG = +scoreLeftG;
let scoreRightG = prompt("Scorul echipei adverse:");
scoreRightG = +scoreRightG;
let cota = prompt("Introduceti cota:");
cota = +cota;
let amount = prompt("Suma pe care vreti sa pariati");
amount = +amount;

let leftTeam = generateTeamLeftSide();
leftTeam[0] = team;
let leftTeamScore = generateScoreLeftSide();
let rightTeam = generateTeamRightSide();
let rightTeamScore = generateScoreRightSide();

let displayWIN = document.querySelector('.win');



table.innerHTML = addScore(leftTeam, leftTeamScore, rightTeam, rightTeamScore);

if (isWin(leftTeamScore, rightTeamScore) == true) {
    displayWIN.innerHTML = displayWin(team, scoreLeftG, scoreRightG, leftTeamScore, rightTeamScore, cota, amount);
} else {
    lose.innerHTML = displayLose();
}