window.onload = () =>{
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}

function calcular(){
    var peso = parseFloat(document.getElementById("txtPeso").value,10);
    var altura = parseFloat(document.getElementById("txtAltura").value,10);
    var nome = document.getElementById("txtNome").value;

    var conta = peso/(altura*altura)
    document.getElementById("resultado").innerHTML = nome + " seu IMC é: "+ conta.toFixed(2);

    if (conta<18.5){
        document.getElementById("conclusao").innerHTML = "Abaixo do peso";
    }else if (conta>= 18.5 && conta< 24.9){
        document.getElementById("conclusao").innerHTML = "Peso normal";
    }else if (conta > 25 && conta< 29.9 ){
        document.getElementById("conclusao").innerHTML = "Excesso de peso";
    }else if (conta > 30 && conta< 34.9 ){
        document.getElementById("conclusao").innerHTML = "Obesidade classe I";
    }else if (conta > 35 && conta< 39.9 ){
        document.getElementById("conclusao").innerHTML = "Obesidade classe II";
    }else if (conta >= 40){
        document.getElementById("conclusao").innerHTML = "Obesidade classe III";
    }
}