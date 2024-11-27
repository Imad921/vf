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
