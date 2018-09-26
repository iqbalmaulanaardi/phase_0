function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1><hr>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What programming language, we learned in Hacktiv8?", ["Java", "JavaScript", "C++", "C"], "JavaScript"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "JavaScript"], "CSS"),
    new Question("Which one is the most used name in our exercises?", ["Dimitri", "Vannesa", "@wtian", "Rama"], "Dimitri"),
    new Question("Which one is not Hacktiv8 hiring partner?", ["Google", "Go-Jek", "BukaLapak", "Xendit"], "Google"),
    new Question("Which one is our batch?", ["Young Fox", "Old Fox", "Xavier Fox", "Wonder Fox"], "Xavier Fox")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();