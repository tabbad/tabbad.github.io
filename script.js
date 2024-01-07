
var questions = [
    { question: "Les lignes du terrain de hand-ball dans la plupart des gymnases sont de couleur :", options: ["Rouge", "Jaune", "Blanche"], answer: "b" },
    { question: "Où remet-on le ballon en jeu après une faute sifflée ?", options: [" Sur le côté du terrain", " A l’endroit de la faute", "Depuis la zone du gardien"], answer: "b" },
    { question: "Le but est accordé quand le ballon :", options: [" Est sur la ligne", " A franchi la moitié de la ligne", " Franchit complètement la ligne"], answer: "c" },
    { question: "Je ne peux pas garder le ballon dans la main à l’arrêt :", options: [" Plus de trois secondes", " Plus de cinq secondes", " Plus de dix secondes"], answer: "a" },
    { question: "Lors d’une remise en jeu, les joueurs adverses doivent se trouver à :", options: [" Un mètre du joueur exécutant la remise en jeu", " Trois mètres du joueur exécutant la remise en jeu ", "Cela n’a pas d’importance "], answer: "b" },
    { question: "Lors d’une touche, le joueur tire et marque le but :", options: [" Le but est refusé", " La touche est donnée à l’adversaire", " Le but est accepté"], answer: "c" },
    { question: "Le ballon touche le pied, y a- t- il faute ?", options: [" Oui", " Non"], answer: "a" },
    { question: "Au début de la rencontre, comment est attribué le ballon d’engagement à une équipe ?", options: [" Par tirage au sort", " A l’équipe invitée", " A l’équipe évoluant à domicile"], answer: "a" },
    { question: "Que siffle l’arbitre si un attaquant pénètre dans la zone du gardien ?", options: [" Jet de 7m (7 mètres)", " « Zone » et ballon au gardien", " Jet franc aux 9m (9 mètres)"], answer: "b" },
    { question: "En minimes, lors d’un engagement du milieu de terrain, après un but, les joueurs adverses peuvent se tenir dans les deux moitiés de terrain ?", options: [" Vrai", " Faux"], answer: "a" },
    { question: "En benjamins, après un but, l’engagement se fait depuis le gardien de but. Les attaquants ont le droit d’intercepter le ballon dès la relance du gardien ?", options: [" Vrai", " Faux"], answer: "a" },
    { question: "Un joueur de champ fait une passe à son gardien, SORTI DE SA ZONE. L’arbitre siffle :", options: [" Rien", " Un jet de 7m", " Un jet franc"], answer: "a" },
    { question: "Un joueur ne pose pas son pied sur la ligne de touche pour la remise en jeu :", options: [" La remise en jeu est pour l’équipe adverse", " La remise en jeu est à refaire après correction", " Le jeu se poursuit"], answer: "b" },
    { question: "Si un joueur fait une grosse faute, Peut- il être exclu du terrain ?", options: [" Oui", " Non"], answer: "a" },
    { question: "En match, chaque match est dirigé par deux arbitres assistés par un (ou des) secrétaire(s), un chronométreur et parfois des arbitres de zone.", options: [" Vrai", " Faux"], answer: "a" },
    { question: "Peut-on dribbler à 2 mains ?", options: [" Oui", " Non"], answer: "b" },
    { question: "Peut- on changer de main en dribblant ?", options: [" Oui", " Non"], answer: "a" },
    { question: "Un but est confirmé par :", options: [" Un coup de sifflet", " Deux coups de sifflet", " Trois coups de sifflet"], answer: "b" },
    { question: "Un joueur tirant dans les 9m est poussé par un défenseur dans le dos ou sur le côté. L’arbitre siffle ?", options: [" Jet franc à 9m", " Jet de 7m", " Jet de 7m + exclusion temporaire du défenseur"], answer: "c" },
    { question: "Que doit faire le joueur qui a le ballon quand l’arbitre siffle une faute contre son équipe ?", options: [" Il doit poser le ballon au sol", " Il lance le ballon à l’arbitre", " Il va se replacer en défense puis donne le ballon aux adversaires"], answer: "a" },
    { question: "Le début d’une partie est signalé par le coup de sifflet de l’arbitre. Comment est signalée la fin de la partie ?", options: [" Par un coup de sifflet de l’arbitre", " Par deux coups de sifflet de l’arbitre", " Par trois coups de sifflet de l’arbitre"], answer: "c" },
    { question: "Lorsqu’une faute est commise par la défense, entre la ligne des 9m et la zone du gardien, le ballon est rendu à l’attaque. Où s’effectue le jet franc?", options: [" A l’endroit de la faute", " A 9m", " A 7m"], answer: "b" },

    // Ajoutez d'autres questions ici
];
const selectedQuestions = getRandomQuestions(20);
let actualUser = null;
let questionTimer = null;
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
    questionTimer = timerInterval;
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
    resultDiv.innerHTML = "Votre score est : " + score + " sur 20";
    if(score<14){
        resultDiv.innerHTML =  resultDiv.innerHTML +" Pas de panique, tu peux le repasser le 17 janvier !"
    }else{
        resultDiv.innerHTML =  resultDiv.innerHTML +" Félicitation tu as obtenu la partie théorique de la formation !"
    }
    resultDiv.innerHTML =  resultDiv.innerHTML +" Votre score est à envoyer à l'adresse mail suivante : mhoren@u-bordeaux.fr"
    actualUser.score = score;
    actualUser.testfait = true;
    updateUserScore(actualUser);
    var quizContainer = document.getElementById('quiz-form');
    quizContainer.style.display = 'none';
    clearInterval(questionTimer);
    // Retourne false pour empêcher le formulaire de soumettre la page
    return false;
}

function updateUserScore(userJson){
var jsonString = JSON.stringify(userJson);
var xhr = new XMLHttpRequest();
xhr.open('PUT','https://back-jo.vercel.app/update', true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log('La requête a abouti avec succès.');
    console.log(xhr.responseText);
  } else {
    console.error('La requête a échoué avec le statut : ' + xhr.status);
  }
};

xhr.send(jsonString);
}


function VerifConnexion(id,mdp){
    return new Promise((resolve, reject) => {

    var requestURL =
    "https://back-jo.vercel.app/";
    var request = new XMLHttpRequest();

    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        var userJson = request.response;
        var isUserValid = false;
        var actualUser = null;
        userJson.forEach(function (user) {
            if(user.username == id && "JO2024" == mdp && user.testfait == false){
                console.log(user)
                actualUser = user;
                isUserValid = true;
            }
        });
        resolve({ isUserValid, userJson ,actualUser});

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

        if(result.isUserValid){
            startButton.style.display = 'block';
            connexionDiv.style.display = 'none';
            actualUser = result.actualUser;
            updateUserScore(actualUser);
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
        var attention = document.getElementById('attention');
        attention.style.display = 'none';
        quizContainer.style.display = 'block';
        displayQuestions(selectedQuestions);
        actualUser.testfait = true;
        updateUserScore(actualUser);

        // Lance la minuterie ici (ajustez selon vos besoins)
        var tenMinutes = 60 *10, // 20 minute (à des fins de test, ajustez selon vos besoins)
        //var tenMinutes = 5, // 20 minute (à des fins de test, ajustez selon vos besoins)

        display = document.getElementById('countdown');
       // timer = startTimer(tenMinutes, display);
       startTimer(tenMinutes, display);
        // Désactivez le bouton de démarrage après avoir affiché le quiz
        startButton.disabled = true;
    });
});

