let team = prompt("Echipa pe care pariati:");

let table = document.querySelector('.score');



let leftTeam = generateScoreLeftSide();
let rightTeam = generateScoreRightSide();

table.innerHTML = displayTableScore(leftTeam, rightTeam);