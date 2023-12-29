
var timer;

var questions = [
    { question: "1 Les lignes du terrain de hand-ball dans la plupart des gymnases sont de couleur :", options: ["Rouge", "Jaune", "Blanche"], answer: "b" },
    { question: "2 Où remet-on le ballon en jeu après une faute sifflée ?", options: [" Sur le côté du terrain", " A l’endroit de la faute", "Depuis la zone du gardien"], answer: "b" },
    { question: "3 Le but est accordé quand le ballon :", options: [" Est sur la ligne", " A franchi la moitié de la ligne", " Franchit complètement la ligne"], answer: "c" },
    { question: "4 Je ne peux pas garder le ballon dans la main à l’arrêt :", options: [" Plus de trois secondes", " Plus de cinq secondes", " Plus de dix secondes"], answer: "a" },
    { question: "5 Lors d’une remise en jeu, les joueurs adverses doivent se trouver à :", options: [" Un mètre du joueur exécutant la remise en jeu", " Trois mètres du joueur exécutant la remise en jeu ", "Cela n’a pas d’importance "], answer: "b" },
    { question: "6 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "7. Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "8. Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "9. Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "10. Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "11. Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "12. Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "13. Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "14 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "15 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "16. Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "17 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "18 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "19 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "20 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "21 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "22 Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },


    //var correctAnswers = [ "a","a","b","a","a","a","b","a","a","b","a","b","c","a","c","b"]; // Ajoutez les réponses correctes pour chaque question dans l'ordre


    // Ajoutez d'autres questions ici
];
const selectedQuestions = getRandomQuestions(20);

function getRandomQuestions(numberOfQuestions) {
    var shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numberOfQuestions);
}

function displayQuestions(questions) {
    var questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = "";

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
              }
              
            label.appendChild(radioInput);         
            label.appendChild(document.createTextNode(" " + option));
            questionDiv.appendChild(label);
        });
        questionsContainer.appendChild(questionDiv);
    });
}

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

    var questions = document.getElementById('questions-container').childNodes;
    let checked = false;
    questions.forEach(function(question){
        question.childNodes.forEach(function(input){
            if (input.firstChild.type === 'radio' && input.firstChild.checked) {
                userAnswers.push(input.firstChild.value);
                checked =true;
            }        
        })
        if(checked == false){
            userAnswers.push("");
        }
        checked =false;
    })

    // Comparaison des réponses ####

    var score = 0;
    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === selectedQuestions[i].answer) {
            score++;
        }
    }

    // Affichage des résultats
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Votre score est : " + score + " sur " + correctAnswers.length;

    // Retourne false pour empêcher le formulaire de soumettre la page
    return false;
}

function updateUserScore(userJson){
    var updateRequest =
    "https://tabbad.github.io/account.json";
    var updateRequest = new XMLHttpRequest();
    updateRequest.open("PUT", updateRequest);
    updateRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    updateRequest.send(JSON.stringify(userJson));

    updateRequest.onload = function () {
        if (updateRequest.status === 200) {
            console.log("Modification enregistrée avec succès");
        } else {
            console.error("Erreur lors de l'enregistrement des modifications");
        }
    };
}


function VerifConnexion(id,mdp){
    return new Promise((resolve, reject) => {

    var requestURL =
    "https://tabbad.github.io/account.json";
    var request = new XMLHttpRequest();

    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        var userJson = request.response;
        var isUserValid = false;
        userJson.account.forEach(function (user) {
            if(user.name == id && userJson.password == mdp && user.score == null){
                isUserValid = true;
                user.score = 100;
            }
        });
        resolve({ isUserValid, userJson });

    };
    request.onerror = function () {
        reject(new Error("Erreur lors de la requête"));
    };
});
}

document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById('start-quiz-button');
    var quizContainer = document.getElementById('quiz-form');
    var connexionButton = document.getElementById('connexion-button');
    var connexionDiv = document.getElementById('connexion');

    connexionButton.addEventListener('click', function () {
    VerifConnexion(document.getElementById('Identifiant').value,document.getElementById('mdp').value)
    .then(result => {
        console.log(result.isUserValid+" isvalid")
        console.log(result.userJson)
        if(result.isUserValid){
            startButton.style.display = 'block';
            connexionDiv.style.display = 'none';
            updateUserScore(result.userJson);
        }else{
            alert("Identifiant ou mot de passe incorrect ou quiz déjà effectué");
        }
    })
    .catch(error => {
        console.error(error); // Gérez les erreurs ici
    });
    });

    startButton.addEventListener('click', function () {
        // Affiche le conteneur du quiz
        quizContainer.style.display = 'block';
        displayQuestions(selectedQuestions);


        // Lance la minuterie ici (ajustez selon vos besoins)
        var tenMinutes = 60 *20, // 20 minute (à des fins de test, ajustez selon vos besoins)
            display = document.getElementById('countdown');
        startTimer(tenMinutes, display);

        // Désactivez le bouton de démarrage après avoir affiché le quiz
        startButton.disabled = true;
    });
});

