import { scores } from './scores.js';

const table = document.querySelector('table tbody');

function createRowScore(index, score) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${index}</td>
        <td>${score.username}</td>
        <td>${score.score}</td>
        <td><img src="${score.img}" alt"${score.username}"</td>
        <input type="number" placeholder="Entrer le score" name="number"/>
    `;

    table.append(row);
}

scores.forEach((score, index) => {
    createRowScore(index+1, score);
});

// btn = document.createElement('button');
// btn.













































// const ligneTableaux = Array.from(table.querySelectorAll("tr"));
// let ligneArray = [];
// console.log(ligneTableaux);



// ligneTableaux.forEach(function(ligne){
//     let fourElement = parseInt(ligne.querySelectorAll("td")[3].textContent);
//     ligneArray.push({ ligne: ligne, score: fourElement });
   
// });
//  ligneArray.sort();
// let rank = ligneArray;
// rank.reverse();
// console.log(ligneArray);

// table.innerHTML = "";

// ligneArray.forEach(function(item) {
//     table.appendChild(item.ligne);  
// });
































// document.addEventListener("DOMContentLoaded", function () {
//     function sortTable() {
//         let table = document.querySelector(".rank table tbody"); // Sélectionne le tbody
//         let rows = Array.from(table.querySelectorAll("tr"));
//         console.log(rows);

//         // Trier les lignes en fonction du score (4e colonne, index 3)
//         rows.sort((a, b) => {
//             let scoreA = parseInt(a.children[3].textContent);
//             let scoreB = parseInt(b.children[3].textContent);
//             return scoreB - scoreA; // Tri décroissant
//         });

//         // Réinsérer les lignes triées et mettre à jour les rangs
//         table.innerHTML = "";
//         rows.forEach((row, index) => {
//             row.children[0].textContent = (index + 1) + "."; // Met à jour la colonne "rank"
//             table.appendChild(row);
//         });
//     }

//     sortTable(); // Exécuter le tri au chargement
// });




