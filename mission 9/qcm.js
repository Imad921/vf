const correctAnswers = {
    q1: '5',
    q2: ['Eté', 'Neige'],
    q3: 'css',
    q4: ['b', 'strong'],
    q5: '18',
    q6: 'br',
    q7: ['ctrlx', 'ctrlc'],
    q8: '-1',
    q9: 'bleu',
    q10: ['Liberté', 'Fraternité']
};

function Correction() {
    let score = 0;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        
        if (Array.isArray(correctAnswer)) {
            const selectedOptions = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`))
                .map(option => option.value);

            if (
                correctAnswer.every(answer => selectedOptions.includes(answer)) &&
                selectedOptions.length === correctAnswer.length
            ) {
                score++;
            }
        } else {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswer) {
                score++;
            }
        }
    }

    alert(`Votre score est : ${score}/${Object.keys(correctAnswers).length}`);
}

function Effacer() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });

    console.log("Tous les champs ont été réinitialisés.");
}



function Corriger()
{window.location.href="corriger.html"}

function accueil(){
    document.location.href="../index.html";
}

