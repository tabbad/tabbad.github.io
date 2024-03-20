document.addEventListener("DOMContentLoaded", function () {
    displayQuestions(questions);
    const questionGroup = document.querySelectorAll('.question');

    questionGroup.forEach(function(questionDiv) {
        var radioInputs = questionDiv.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(function(radioInput) {
            radioInput.addEventListener('click', function() {
                var questionIndex = parseInt(this.name.substr(1)) - 1; // Récupération de l'indice de la question
                var answer = this.value; // Récupération de la réponse sélectionnée
                var isCorrect = check_one_answer(questionIndex, answer); // Vérification de la réponse
                console.log("Question " + (questionIndex + 1) + " réponse : " + answer + " est correcte : " + isCorrect);
     
                var otherRadioInputs = questionDiv.querySelectorAll('input[type="radio"]:not(:checked)');
                otherRadioInputs.forEach(function(otherRadioInput) {
                    otherRadioInput.disabled = true;
                });
                if (isCorrect) {
                    this.parentNode.classList.add('correct-answer');
                } else {          
                    this.parentNode.classList.add('incorrect-answer');
                    var correctAnswer = questions[questionIndex].answer;
                    var correctRadioInput = questionDiv.querySelector('input[type="radio"][value="' + correctAnswer + '"]');
                    correctRadioInput.parentElement.classList.add('correct-answer');
                }
            });
        });
    });
        // Événement de clic pour réinitialiser le quiz
        document.getElementById('resetButton').addEventListener('click', function() {
            resetQuiz();
        });
});

function resetQuiz() {
    const questionGroup = document.querySelectorAll('.question');
    questionGroup.forEach(function(questionDiv) {
        var radioInputs = questionDiv.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(function(radioInput) {
            radioInput.checked = false; // Décocher toutes les réponses
            radioInput.disabled = false; // Activer tous les boutons radio
            radioInput.parentElement.classList.remove('correct-answer', 'incorrect-answer'); // Réinitialiser les classes CSS
        });

    });
}
var questions = [
    { question: "Quelle est la taille d'un but de handball ?", options: ["1m x 2m", "2m x 3m", "3m x 3m","3m x 4m"], answer: "b" },
    { question: "Quelles sont les dimensions d'un terrain de handball ?", options: ["15m x 30m", "20m x 30m", "20m x 40m","30m x 40m"], answer: "c" },
    { question: "Combien de joueurs peut-on inscrire au maximum sur une feuille de match ?", options: ["10", "11", "12","13"], answer: "c" },
    { question: "Qui contrôle les licences ?", options: ["Les capitaines", "Le maître chronométreur", "L'arbitre","Personne"], answer: "c" },
    { question: "Lors d'une remise en jeu (touche), le joueur doit avoir au moins...", options: ["Le pied droit sur la ligne", "Le pied gauche sur la ligne.", "Les deux pieds sur la ligne.","Un pied sur la ligne."], answer: "d" },
    { question: "Un joueur qui s'arrête de dribbler peut garder la balle au maximum...", options: ["3 secondes.", "10 secondes.", "20 secondes.","Le temps qu'il veut."], answer: "a" },
    { question: "Lors d'un jet franc, à quelle distance minimale doivent se trouver les défenseurs ?", options: ["3 mètres", "4 mètres", "2 mètres","6 mètres"], answer: "a" },
    { question: "Si un joueur saigne du coude, il doit attendre l'autorisation de l'arbitre pour sortir du terrain.", options: ["Vrai", "Faux"], answer: "b" },
    { question: "Pour commencer une rencontre, il doit y avoir au minimum 4 joueurs sur le terrain par équipe.", options: ["Vrai", "Faux"], answer: "b" },
    { question: "Un joueur a le droit de retenir son adversaire par le maillot.", options: ["Vrai", "Faux"], answer: "b" },
    { question: "Lorsqu'un joueur est sanctionné d'un jet franc pour un marcher, il doit immédiatement poser la balle à l'endroit de la faute.", options: ["Vrai", "Faux"], answer: "a" },
    { question: "Quand un attaquant pénètre dans la surface de but avec la balle dans les mains, l'arbitre siffle et fait le geste du renvoi.", options: ["Vrai", "Faux"], answer: "a" },
    { question: "Il est permis de jouer le ballon tout en étant assis.", options: ["Vrai", "Faux"], answer: "a" },
    { question: "Un but est marqué dès qu'une partie du ballon franchit la ligne de but.", options: ["Vrai", "Faux"], answer: "b" },
    { question: "Un joueur doit attendre le coup de sifflet de l'arbitre pour exécuter un jet franc.", options: ["Vrai", "Faux", "Seulement lorsqu'il y a arrêt de jeu ou sanction."], answer: "c" },
    { question: "On peut marquer directement lors d'un engagement.", options: ["Vrai", "Faux"], answer: "a" },
    { question: "Pendant la mi-temps, l'arbitre peut sanctionner d'une exclusion (2 minutes).", options: ["Vrai", "Faux",], answer: "a" },
    { question: "Plus la faute est grave, plus...", options: ["Le coup de sifflet doit être long.", "Le coup de sifflet doit être fort.", "Les deux"], answer: "c" },
    { question: "Lequel de ces objets un joueur est-il autorisé à porter sur le terrain parmi cette liste ?", options: ["Ceinture", "Bague ou montre", "Lunettes sans monture","Genouillères sans partie saillante"], answer: "d" },
    { question: "Un corps étranger (dans ce cas : ballon) pénètre sur le terrain pendant le jeu.", options: ["Temps mort et reprise du jeu après la sortie du corps étranger", "On laisse jouer.", "Arrêt définitif du match"], answer: "a" },
    { question: "Le gardien sort de sa zone sans ballon. Quelle est la décision à prendre ?", options: ["Jet franc en faveur de l'équipe adverse", "C'est autorisé, on laisse jouer.", "Le gardien doit rentrer dans sa zone et il reçoit un carton jaune.","Jet de 7 mètres en faveur de l'équipe adverse"], answer: "b" },
    { question: "Deux cartons jaunes à une même personne valent un rouge.", options: ["Oui", "Non, et on ne devrait pas pouvoir mettre plus d'un carton jaune à un joueur."], answer: "b" },
    { question: "Quel signe signifie que le ballon a été gardé plus de 3 secondes par un joueur ?", options: ["Lever trois doigts en l'air", "Même signe que 'marcher'", "Il n'y a pas de signe, l'arbitre choisit celui qu'il veut."], answer: "b" },
    { question: "Un Temps Mort d'Equipe (TME) dure...", options: ["1 minute.", "2 minutes.", "5 minutes.","C'est l'arbitre qui décide."], answer: "a" },
    { question: "Un entraîneur, furieux, pénètre sur le terrain pour contester l'arbitrage et menace le ou les arbitre(s).", options: ["Disqualification et expulsion de l'entraîneur", "Exclusion de 2 minutes", "Avertissement oral, on lui demande de bien vouloir regagner sa place.","Avertissement (carton jaune)"], answer: "a" },
    { question: "Quelle est la meilleure décision ?Le gardien pénètre sur le terrain avec un masque alors qu'il a déjà été précédemment prévenu oralement et prié d'enlever le masque avant de pouvoir revenir sur l'aire de jeu.", options: ["Avertissement (carton jaune)", "Disqualification et rédaction d'un rapport", "Coup de poing dans la figure du gardien afin de lui enlever son masque","Exclusion temporaire (2 minutes)"], answer: "a" },
    { question: "A quoi sert le carton bleu ?", options: ["A protéger en faisant venir les secours", "A sanctionner avec plus de précisions", "A rien du tout"], answer: "b" },





    // Ajoutez d'autres questions ici
];
function displayQuestions(questions) {
    var questionsContainer = document.getElementById('quiz');

    questions.forEach(function (question, index) {
        var questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = "<p>" + (index + 1) + ". " + question.question + "</p>";
        question.options.forEach(function (option,index2) {
            var label = document.createElement('label');
            var radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'q' + (index + 1);      
            switch (index2) {
                case 0:
                    radioInput.value = "a" ;
                  break;
                case 1:
                    radioInput.value = "b" ;
                  break;
                case 2:
                    radioInput.value = "c" ;
                                      break;
                case 3:
                    radioInput.value = "d" ;
                                    break;                  
                                      
              }
              
            label.appendChild(radioInput);         
            label.appendChild(document.createTextNode(" " + option));
            questionDiv.appendChild(label);
        });
        questionsContainer.appendChild(questionDiv);
    });
}
function check_one_answer(questionIndex, answer) {
    var correctAnswer = questions[questionIndex].answer;
    return correctAnswer === answer;
}


