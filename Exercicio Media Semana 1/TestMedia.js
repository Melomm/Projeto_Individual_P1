var prova1 = 5;
var prova2 = 6;

let mediafinal = (prova1 + prova2)/2;

var passou = mediafinal >= 5
var reprovou = mediafinal <= 5

console.log("nota 1:", prova1);
console.log("nota 2:", prova2);
console.log("Media", mediafinal);

if (passou) {
    console.log("Aluno Passou");
} else if (reprovou) {
    console.log("Aluno reprovou");
} else {
    console.log("Aluno em rec");
}