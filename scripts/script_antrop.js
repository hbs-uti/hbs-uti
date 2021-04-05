function calcular() {
    let altura = document.getElementById('altura');
    let peso = document.getElementById('peso');
    let res = document.getElementById('res');
    let masc = document.getElementsByName('masc');
    let femin = document.getElementsByName('femin');
    
    let a1 = Number(altura.value);
    let p1 = Number(peso.value);

    let pid_man = ((a1 - 152.4)*0.91 + 50);
    let pid_wom = ((a1 - 152.4)*0.91 + 45.5);

    
}