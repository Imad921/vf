function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}
function affichagetab2(){
    var X=prompt("Combien de ligne?")
    document.write("<table border=2px width=30%");
    for(let i=0; i<=X-1; i++){
        document.write("<tr><td>"+(i+1)+"</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}
function cdc(){
    var chaine=prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient"+chaine.length+"caracters"+"<br>");
    document.write("La première lettre est "+chaine.substr(0,1)+"<br>");
}
function seconnecter(){
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if(login=="admin" && password=="admin")
    {document.write("Bienvenue : "+login);}
    else{alert("Accès refusé")}
}
function seconnecter2()
{window.location.href="identification.html"}
function login(){
    var login=document.getElementById("t1").value;
    var mdp=document.getElementById("t2").value;
    if (login=="admin" && mdp=="admin")
        {window.location.href="yes.html"} 
    else{window.location.href="no.html"}   
}
function seconnecter3(){
    i=0;
    do{
     var login=prompt("Donnez votre nom d'utilisateur");
     var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")
        {document.write("Bienvenue : "+login);
        break;
    }
    else {alert("Accès refusé"); 
     i+=1;}
    }
    while(i<3)
     if(i==3){alert("Délai dépassé")}
 }

 function ligne()
 {window.location.href="ajout.html"}

 function ajouterLigne(){
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    if(a==""||b==""){alert("Un ou 2 champs vide");}
    else if((Number(b)<10||Number(b)>20)){alert("Age invalide");}
    else{
        var table=document.getElementById("myTable");
        var newRow=table.insertRow(-1);
        var cell1=newRow.insertCell(0);
        var cell2=newRow.insertCell(1);
        cell1.innerHTML=document.getElementById("t1").value;
        cell2.innerHTML=document.getElementById("t2").value;
    }
 }

function accueil(){
    document.location.href="../index.html";
}