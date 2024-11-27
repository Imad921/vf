function Calcul(){
    var a = document.getElementById("prix1").value;
    var b = document.getElementById("quantité1").value;
    var c1 = Number(a)*Number(b);
    result1.value = c1;

    var a = document.getElementById("prix2").value;
    var b = document.getElementById("quantité2").value;
    var c2 = Number(a)*Number(b);
    result2.value = c2;

    var a = document.getElementById("prix3").value;
    var b = document.getElementById("quantité3").value;
    var c3 = Number(a)*Number(b);
    result3.value = c3;

    
    var c = Number(c1)+Number(c2)+Number(c3);
    totalResult.value = c;
}
function Reset() {
    prix1.value = ""; quantité1.value = "";
    prix2.value = ""; quantité2.value = "";
    prix3.value = ""; quantité3.value = "";
    result1.value = "";
    result2.value = "";
    result3.value = "";
    totalResult.value = "";
}

function accueil(){
    document.location.href="../index.html";
}
