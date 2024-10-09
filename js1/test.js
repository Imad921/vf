function test_age(){
    let age = prompt("Quel est votre age?")
    if(age<18)
    {
        alert("Attention accès refusé, vous êtes mineur");
        document.body.style.backgroundColor="red";
    }
    else
    {
        alert("OK,vous êtes Majeur");
        document.body.style.backgroundColor="green";
    }

    
}
function test_couleur(){
    let couleur = prompt("Donner une couleur")
    if(couleur == "rouge"){
        document.body.style.backgroundColor = "red"
    }
    else if(couleur == "bleu"){
        document.body.style.backgroundColor = "blue"
    }
     else if(couleur == "vert"){
        document.body.style.backgroundColor = "green"
    }
    else {
        document.write("Couleur non comprise")
    }
}
function affichage(){
    let prenom = prompt("saisir votre prénom")
    let nom = prompt ("saisir votre nom")
    document.write("<div style='border:5px solid blue; width:400px; heigth:300px; margin:auto;font-size:2em;'>")
    document.write("Bonjour  " + prenom +"  "+nom);
    document.write("</div");
}
function calcul_moyenne(){
    var n1 = prompt("Donner la première note:");
    var n2 = prompt("Donner la deuxieme notre:");
    var n3 = prompt("Donner la troisième notre:");

    var somme = Number(n1) + Number(n2)+ Number(n3);

    document.write("Voici la somme:" + somme +"<br>");
    var moyenne = somme/3;
    let moyenneformatee = moyenne.toFixed(2);

    document.write("Voici la moyenne :" + moyenneformatee +"<br>");
    
    if (moyenne<10)
    {
        alert("Vous n'êtes pas admis");
        document.body.style.backgroundColor="red";   
    }
    else if (moyenne<14)
    {
        alert("Vous êtes admis, Passable");
        document.body.style.backgroundColor="Blue";
    }
    else if (moyenne>14)
        {
            alert("Vous êtes admis, Félicitation");
            document.body.style.backgroundColor="purple";
        }

    
}