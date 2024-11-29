//Imad Abdellmalki
// Exécute ce code lorsque la page est complètement chargée
document.addEventListener('DOMContentLoaded', () => {

    // Récupération des éléments HTML où l'on va afficher les exercices et résultats
    const liste = document.getElementById('liste'); // La liste des exercices
    const titre = document.getElementById('titre'); // Titre de l'exercice sélectionné
    const description = document.getElementById('description'); // Description de l'exercice
    const demo = document.getElementById('demo'); // Zone interactive pour tester l'exercice
    const voirSolution = document.getElementById('voir-solution'); // Bouton pour voir la solution
    const solution = document.getElementById('solution'); // Zone d'affichage de la solution

    // Définition des exercices (liste de 15 exercices)
    const exercices = [
        // Exemple de structure pour un exercice
        {
            titre: "Addition de deux nombres",
            description: "Créez une fonction qui retourne la somme de deux nombres.",
            solution: `function addition(a, b) {\n  return a + b;\n}`,
            action: (a, b) => parseFloat(a) + parseFloat(b), // Fonction à tester
            inputs: ["a", "b"] // Champs d'entrée pour les paramètres de la fonction
        },
        {
            titre: "Inverser une chaîne",
            description: "Créez une fonction qui retourne une chaîne de caractères inversée.",
            solution: `function inverser(chaine) {\n  return chaine.split('').reverse().join('');\n}`,
            action: (chaine) => chaine.split('').reverse().join(''),
            inputs: ["chaine"]
        },
        {
            titre: "Vérifier si un nombre est pair",
            description: "Créez une fonction qui retourne vrai si un nombre est pair.",
            solution: `function estPair(n) {\n  return n % 2 === 0;\n}`,
            action: (n) => n % 2 === 0,
            inputs: ["n"]
        },
        {
            titre: "Calculer la factorielle d’un nombre",
            description: "Créez une fonction qui retourne la factorielle d’un nombre.",
            solution: `function factorielle(n) {\n  return n <= 1 ? 1 : n * factorielle(n - 1);\n}`,
            action: (n) => {
                n = parseInt(n);
                if (n <= 1) return 1;
                let result = 1;
                for (let i = 2; i <= n; i++) result *= i;
                return result;
            },
            inputs: ["n"]
        },
        {
            titre: "Compter les voyelles dans une chaîne",
            description: "Créez une fonction qui compte les voyelles dans une chaîne.",
            solution: `function compterVoyelles(chaine) {\n  return (chaine.match(/[aeiouy]/gi) || []).length;\n}`,
            action: (chaine) => (chaine.match(/[aeiouy]/gi) || []).length,
            inputs: ["chaine"]
        },
        {
            titre: "Trouver le carré d’un nombre",
            description: "Créez une fonction qui retourne le carré d’un nombre.",
            solution: `function carre(n) {\n  return n * n;\n}`,
            action: (n) => n * n,
            inputs: ["n"]
        },
        {
            titre: "Convertir des degrés Celsius en Fahrenheit",
            description: "Créez une fonction qui convertit des degrés Celsius en Fahrenheit.",
            solution: `function celsiusVersFahrenheit(c) {\n  return (c * 9/5) + 32;\n}`,
            action: (c) => (parseFloat(c) * 9 / 5) + 32,
            inputs: ["c"]
        },
        {
            titre: "Vérifier si une chaîne est un palindrome",
            description: "Créez une fonction qui vérifie si une chaîne est un palindrome.",
            solution: `function estPalindrome(chaine) {\n  return chaine === chaine.split('').reverse().join('');\n}`,
            action: (chaine) => chaine === chaine.split('').reverse().join(''),
            inputs: ["chaine"]
        },
        {
            titre: "Compter les mots dans une phrase",
            description: "Créez une fonction qui compte le nombre de mots dans une phrase.",
            solution: `function compterMots(phrase) {\n  return phrase.split(' ').length;\n}`,
            action: (phrase) => phrase.split(' ').length,
            inputs: ["phrase"]
        },
        {
            titre: "Trouver le maximum entre deux nombres",
            description: "Créez une fonction qui retourne le plus grand des deux nombres.",
            solution: `function max(a, b) {\n  return a > b ? a : b;\n}`,
            action: (a, b) => Math.max(parseFloat(a), parseFloat(b)),
            inputs: ["a", "b"]
        },
        {
            titre: "Trier un tableau de nombres",
            description: "Créez une fonction qui trie un tableau de nombres en ordre croissant.",
            solution: `function trierTableau(tab) {\n  return tab.sort((a, b) => a - b);\n}`,
            action: (tab) => tab.split(',').map(Number).sort((a, b) => a - b),
            inputs: ["tab"]
        },
        {
            titre: "Fusionner deux tableaux",
            description: "Créez une fonction qui fusionne deux tableaux sans doublons.",
            solution: `function fusionnerTableaux(tab1, tab2) {\n  return [...new Set([...tab1, ...tab2])];\n}`,
            action: (tab1, tab2) => [...new Set([...tab1.split(','), ...tab2.split(',')])],
            inputs: ["tab1", "tab2"]
        },
        {
            titre: "Remplacer les voyelles par une autre lettre",
            description: "Créez une fonction qui remplace les voyelles par un caractère donné.",
            solution: `function remplacerVoyelles(chaine, char) {\n  return chaine.replace(/[aeiouy]/gi, char);\n}`,
            action: (chaine, char) => chaine.replace(/[aeiouy]/gi, char),
            inputs: ["chaine", "char"]
        },
        {
            titre: "Trouver le plus petit nombre d'un tableau",
            description: "Créez une fonction qui retourne le plus petit nombre d'un tableau.",
            solution: `function minimumTableau(tab) {\n  return Math.min(...tab);\n}`,
            action: (tab) => Math.min(...tab.split(',').map(Number)),
            inputs: ["tab"]
        },
        {
            titre: "Calculer le périmètre d'un cercle",
            description: "Créez une fonction qui retourne le périmètre d’un cercle à partir de son rayon.",
            solution: `function perimetreCercle(rayon) {\n  return 2 * Math.PI * rayon;\n}`,
            action: (rayon) => 2 * Math.PI * parseFloat(rayon),
            inputs: ["rayon"]
        }
    ];

    // Affiche la liste des exercices dans le HTML
    exercices.forEach(exercice => {
        const li = document.createElement('li'); // Crée un élément de liste
        li.textContent = exercice.titre; // Affiche le titre de l'exercice
        li.addEventListener('click', () => afficherExercice(exercice)); // Affiche les détails de l'exercice au clic
        liste.appendChild(li); // Ajoute l'exercice à la liste
    });

    // Fonction pour afficher les détails d'un exercice sélectionné
    function afficherExercice(exercice) {
        titre.textContent = exercice.titre; // Affiche le titre de l'exercice
        description.textContent = exercice.description; // Affiche la description de l'exercice
        demo.innerHTML = ''; // Réinitialise la zone de saisie
        exercice.inputs.forEach(input => {
            const inputField = document.createElement('input'); // Crée un champ de saisie
            inputField.type = 'text';
            inputField.placeholder = `Entrez ${input}`; // Place un texte indicatif dans le champ
            inputField.id = input; // Attribue un id pour chaque champ
            demo.appendChild(inputField); // Ajoute le champ de saisie à la zone interactive
        });
        const button = document.createElement('button'); // Crée un bouton pour tester l'exercice
        button.textContent = 'Tester'; // Ajoute le texte du bouton
        button.addEventListener('click', () => testerExercice(exercice)); // Au clic, teste l'exercice
        demo.appendChild(button); // Ajoute le bouton à la zone interactive
        solution.style.display = 'none'; // Cache la solution par défaut
        voirSolution.onclick = () => {
            solution.style.display = 'block'; // Affiche la solution lorsque l'utilisateur clique
            solution.textContent = exercice.solution; // Affiche la solution correspondante
        };
    }

    // Fonction pour tester l'exercice
    function testerExercice(exercice) {
        const args = exercice.inputs.map(input => document.getElementById(input).value); // Récupère les valeurs des champs de saisie
        const result = exercice.action(...args); // Exécute la fonction associée à l'exercice
        afficherResultat(result); // Affiche le résultat de l'exercice
    }

    // Fonction pour afficher le résultat
    function afficherResultat(result) {
        let resultZone = document.getElementById('result-zone');
        if (!resultZone) { // Si la zone de résultat n'existe pas encore, la crée
            resultZone = document.createElement('div');
            resultZone.id = 'result-zone'; // Attribue un id à la zone de résultat
            demo.appendChild(resultZone); // Ajoute la zone de résultat à la page
        }
        resultZone.textContent = `Résultat : ${result}`; // Affiche le résultat de l'exercice
    }
});
