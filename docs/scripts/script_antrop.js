
function calcular() {
       
    var altura = document.getElementById('box-altura');
    var peso = document.getElementById('box-peso');
    var masc = document.getElementById('masc');
    var femin = document.getElementById('femin');
    
    var height = Number(altura.value).toFixed(0);
    var weight = Number(peso.value).toFixed(0);
    
       
    if (document.getElementById('femin').checked) {
            var weightIdeal = ((height - 152.4)*0.91 + 45.5).toFixed(0);
            var vm4Ideal = (weightIdeal * 4).toFixed(0);
            var vm6Ideal = (weightIdeal * 6).toFixed(0);

        } else if (document.getElementById('masc').checked) {
            var weightIdeal = ((height - 152.4)*0.91 + 50).toFixed(0);
            var vm4Ideal = (weightIdeal * 4).toFixed(0);
            var vm6Ideal = (weightIdeal * 6).toFixed(0);

        }


        

    var evol = document.getElementById('evolp2');
    evol.innerHTML = `Peso real: ${weight} kg || Altura: ${height} cm || Peso ideal VM: ${weightIdeal} kg || Volume corrente (4 - 6 mL/kg): ${vm4Ideal} - ${vm6Ideal} mL`;

        
  
  
}