var formPeso = document.getElementById("form-peso");
var vazaoFenta = document.getElementById("vazao-fenta");
var vazaoMida = document.getElementById("vazao-mida");
var vazaoPropo = document.getElementById("vazao-propo");

function calcFenta() {
    var peso = Number(formPeso.value);    
    var fenta = Number(vazaoFenta.value);
    var doseFenta = (fenta*20)/peso;
    this.resFenta.innerHTML = doseFenta.toFixed(2);

}

function calcMida() {
    var peso = Number(formPeso.value);    
    var mida = Number(vazaoMida.value);
    var doseMida = (mida*2)/peso;
    this.resMida.innerHTML = doseMida.toFixed(2);
}

function calcPropo() {
    var peso = Number(formPeso.value);    
    var propo = Number(vazaoPropo.value);
    var dosePropo = (propo*10)/peso;
    this.resPropo.innerHTML = dosePropo.toFixed(2);
}

function copiar() {
    var evol = document.createRange();
    evol.selectNode(document.getElementById('p-res'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(evol);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
}

    document.getElementById('btn-copiar').addEventListener("click", copiar);

