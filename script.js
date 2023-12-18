
var timer;

function startTimer(duration, display) {
    timer = duration; // Utilisez la variable globale timer
    var minutes, seconds;

    function updateTimer() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer <= 0) {
            // Temps écoulé, arrêtez la minuterie
            clearInterval(timerInterval);
            // Soumettez automatiquement le quiz ou effectuez d'autres actions ici
            submitQuiz();
            document.getElementById('submit-button').disabled = true;

        } else {
            timer--; // Décrémentez le temps restant
        }
    }

    // Appelez updateTimer immédiatement pour afficher le temps initial
    updateTimer();

    // Utilisez setTimeout pour appeler updateTimer toutes les secondes
    var timerInterval = setInterval(updateTimer, 1000);
}


function submitQuiz() {
    clearInterval(timer);

        // Définition des réponses correctes
    var correctAnswers = ["b", "b","c","a","b","c","a","a","b","a","a","a","b","a","a","b","a","b","c","a","c","b"]; // Ajoutez les réponses correctes pour chaque question dans l'ordre
    
    // Récupération des réponses données par l'utilisateur
    var userAnswers = [];
    var formElements = document.getElementById('quiz-form').elements;
    
    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'radio' && formElements[i].checked) {
            userAnswers.push(formElements[i].value);
        }
    }

    // Comparaison des réponses
    var score = 0;
    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

    // Affichage des résultats
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Votre score est : " + score + " sur " + correctAnswers.length;

    // Retourne false pour empêcher le formulaire de soumettre la page
    return false;
}
/*
document.addEventListener("DOMContentLoaded", function () {
    var tenMinutes = 5, // 10 minutes en secondes
        display = document.getElementById('countdown');
    startTimer(tenMinutes, display);
});
*/

document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById('start-quiz-button');
    var quizContainer = document.getElementById('quiz-form');

    startButton.addEventListener('click', function () {
        // Affiche le conteneur du quiz
        quizContainer.style.display = 'block';

        // Lance la minuterie ici (ajustez selon vos besoins)
        var tenMinutes = 60 *20, // 20 minute (à des fins de test, ajustez selon vos besoins)
            display = document.getElementById('countdown');
        startTimer(tenMinutes, display);

        // Désactivez le bouton de démarrage après avoir affiché le quiz
        startButton.disabled = true;
    });
});

