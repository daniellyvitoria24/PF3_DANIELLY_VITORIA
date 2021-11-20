

function Poupança () {
     var resultado = document.getElementById('resultado');
    const nome = document.getElementById('nome').value;
    var valor = parseFloat(document.getElementById("valor").value);
    var juros = parseFloat(document.getElementById("juros").value);
    var parcelas = parseFloat(document.getElementById("parcelas").value);
    var calc='';
   
   calc = valor* ((((1 + (juros/100))** parcelas) - 1) / (juros/100));
    
   resultado.textContent = `Olá, ${nome} se você aplicar ${valor} reais por mês, à taxa de ${juros/100}% ao mês, durante ${parcelas} meses, acumulará uma poupança de ${calc.toFixed(2)} reais`;
   

}
calcular.addEventListener('click', Poupança);