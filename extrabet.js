// let team = prompt("Echipa pe care pariati:");

let table = document.querySelector('.table-content');

let leftTeam = generateTeamLeftSide();
let leftTeamScore = generateScoreLeftSide();
let rightTeam = generateTeamRightSide();
let rightTeamScore = generateScoreRightSide();


table.innerHTML = addScore(leftTeam, leftTeamScore, rightTeam, rightTeamScore);