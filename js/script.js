window.onload = () =>{
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}

function calcular(){
    var peso = parseFloat(document.getElementById("txtPeso").value,10);
    var altura = parseFloat(document.getElementById("txtAltura").value,10);

    var conta = peso/(altura*altura)
    document.getElementById("resultado").innerHTML = "Seu IMC é:"+ conta.toFixed(2);

    if (conta<18){
        document.getElementById("conclusão").innerHTML = "Abaixo do peso";
        document.getElementById("conclusão").style.color = "Red";
    }
}