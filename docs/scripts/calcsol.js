/*
Cálculos com base nas soluções padronizadas do hospital.
A ideia é digitar o peso real e a vazão do medicamento. Na tela o resultado em dose/kg/tempo de cada uma delas, além da vazão máxima sugerida.
Tem que aparecer um resultado que seja fácil de visualizar e possa ser copiado e inserido na evolução do tasy.
*/

let peso = Number(document.getElementById('peso'));
let mlFenta = Number(document.getElementById('mlFenta'));
let mlMida = Number(document.getElementById('mlMida'));
let mlPropo = Number(document.getElementById('mlPropo'));

let resFenta = document.getElementById('resFenta');

mlFenta.addEventListener('click', calcFenta);

function calcFenta() {
    let doseFenta = (mlFenta*20)/peso;
    resFenta.write(doseFenta);

};




