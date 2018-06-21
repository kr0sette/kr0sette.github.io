//Instructs computer to read HTML before running the javascript
$(document).ready(function(){


//Object for Questions Bank
var questionBank = {

     //Array for Question
    questionArray: [
        "What is the name of Harry Potter's owl?",
        "What is the street address of the Dursley home?",
        "Which of the Hogwarts founders created the Chamber of Secrets?",
        "What Animagus form is taken by Sirius Black?",
        "Which of these spells is used to unlock doors?",
        "Which of these objects is not a component of the Deathly Hallows?",
        "What is the form of Hermione's patronus?",
        "What color were the flames that came out of the Goblet of Fire?",
        "When is Harry's birthday?",
        "Which of these Hogwarts Professors teaches Arithmancy?"
    ],

    //Array for Multiple Answers
    answerOptionsArray: [
        ["Hedwig", "Errol", "Crookshanks", "Dobby"],
        ["12 Grimmauld Place", "4 Privet Drive", "3 Little Hangleton", "5 Godric's Hollow"],
        ["Neville Longbottom", "Rowena Ravenclaw", "Salazar Slytherin", "Zacharias Smith"],
        ["Werewolf", "Stag", "Hippogriff", "Dog"],
        ["Alohomora", "Accio", "Dissendium", "Episkey"],
        ["Elder Wand", "Cloak of Invisibility", "Sorcerer's Stone", "Resurrection Stone"],
        ["Rabbit", "Otter", "Stag", "Doe"],
        ["Purple", "Yellow", "Green","Blue"],
        ["June 30", "July 15th", "July 31", "August 25"],
        ["Aurora Sinistra", "Septima Vector", "Bathsheba Babbling", "Sybill Trelawney"]
    ],

    //Array for Correct Answer
    correctAnswerArray: [
        "Hedwig",
        "4 Privet Drive",
        "Salazar Slytherin",
        "Dog",
        "Alohomora",
        "Sorcerer's Stone",
        "Otter",
        "Blue",
        "July 31",
        "Septima Vector"
    ],

    //Array for Correct Answer Gifs
    correctGifsArray: [
        "<img src='assets/images/hedwig.gif' alt='Hedwig' />",
        "<img src='assets/images/4PrivetDrive.gif' alt='Letter' />",
        "<img src='assets/images/SalazarSlytherin.gif' alt='Slytherin' />",
        "<img src='assets/images/Dog.gif' alt='Dog' />",
        "<img src='assets/images/alohomora.gif' alt='Alohomora' />",
        "<img src='assets/images/SorcerorsStone.gif' alt='Sorceror's Stone' />",
        "<img src='assets/images/Otter.gif' alt='Hermione Partonus' />",
        "<img src='assets/images/blue.gif' alt='Blue Goblet of Fire' />",
        "<img src='assets/images/PotterBirthday.gif' alt='Harry Potter Birthday Cake' />",
        "<img src='assets/images/SeptimaVector.gif' alt='Great Hall' />"
    ]

}

//variable for timer
var time;
//variable to store rate at which timer counts down;
var decrease;
//Variable for selectedAnswer - Stores what user clicks for an answer
var chosenAnswer;
//Variable i = 0
var i = 0;
//Variable for Correct Questions
var correctScore = 0;
//Variable for Incorrect Questions
var incorrectScore = 0;
//Variable for Unanswered Questions
var unansweredScore = 0;

//Clock Object
var clock = {
    // Function that counts down from set time to 0
    countDown: function(time){
        $(".timer").html("<p>"+ "Time Remaining: " + time + "</p>");
        decrease = setInterval( function(){
            if (time === 0 ){
                clearInterval(decrease);
                i++;
                unansweredScore++;
                display.unansweredDisplay();//Call on function that will display unanswered screen
                nextScreen(); // Call on function that will display next question after 3 seconds
                function nextScreen() {
                    setTimeout(function() { 
                    display.questionDisplay(); 
                    }, 5000);
                }
            }
            if (time > 0){
                time--;
            }
            $(".timer").html("<p>"+ "Time Remaining: " + time + "</p>");
        }, 1000);
    },

    // Sets clock to 45 seconds - use when displaying Questions
    qTimer: function(){
        return(this.countDown(30))
    },
}



var actions = {
    //Function that will start Quiz
    startGame: function () {
        //Create on click for Start button
         $("body").on("click", ".btn", function(){
            //resetscores to 0
            correctScore = 0;
            incorrectScore = 0;
            unansweredScore = 0;
            //reset question array to 0
            i = 0;
            //hides the start button
            $(".btn").hide();
            //Displays single question and answer (function)
            display.questionDisplay();
            //activates answer clicks
            actions.answerSelection();
        })
    },
    //Function that captures user's selected answer and passes it along
    answerSelection: function () {
        //create on click event
        $("body").on("click", ".answer", function(){
            //Store the value of .answer into the chosen Answer variable
            chosenAnswer = $(this).text();
            //Passes chosenAnswer along to qaAnswer to determine what happens next
            actions.qaAnswer(chosenAnswer);
        })
    },
    //Function that determines what to display based on answer choice
    qaAnswer: function(){
        //If selectedAnswer === correctAnswer[i]
        if(chosenAnswer === questionBank.correctAnswerArray[i]) {
            //Call on correct answer display (function)
            display.correctDisplay();
            //Stop the clock
            clearInterval(decrease);
            //Have integer increase by one so we can move on to the next question
            i++;
            //Have the correct score increase by 1
            correctScore++;
            //after 3 second move on to the next question
            nextScreen();
            function nextScreen() {
                setTimeout(function() { 
                    display.questionDisplay(); 
                }, 5000);
            }
        }
        //else
        else {
            //Call on incorrect answer display (function)
            display.incorrectDisplay();
            //Stop the clock
            clearInterval(decrease);
            //Have integer increase by one so we can move on to the next question
            i++;
            //Have the incorrect score increase by 1
            incorrectScore++;
            //after 3 second move on to the next question
            nextScreen();
            function nextScreen() {
                setTimeout(function() { 
                    display.questionDisplay(); 
                }, 5000);
            }

        }


    }


}




//Create function that will display Questions and Aswers one at a time in order
var display = {
    //Question display
    questionDisplay: function(){
        if (questionBank.questionArray[i] === undefined){
            clearInterval(decrease);
            display.finalDisplay();
        }
        else {
        //Fill question container div with question
        $(".result").hide();
        $(".timer").show();
         //Displays timer for question screen and starts it (function)
         clock.qTimer();
        $(".question-container").show();
        $(".question-container").html("<p class='question'>" + questionBank.questionArray[i] + "</p>");

        //Fill answers container div with answers
        $(".answers-container").show();
        $(".answers-container").html(
            "<p class='answer alert-light'>" + questionBank.answerOptionsArray[i][0] + "</p>" +
            "<p class='answer alert-light'>" + questionBank.answerOptionsArray[i][1] + "</p>" +
            "<p class='answer alert-light'>" + questionBank.answerOptionsArray[i][2] + "</p>" +
            "<p class='answer alert-light'>" + questionBank.answerOptionsArray[i][3] + "</p>");
        }
    },

    //Correct answer display
    correctDisplay: function() {
        //Hide question and answers
        $(".question-container").hide();
        $(".answers-container").hide();
        //Hide Timer
        $(".timer").hide();
        //Fill results div with congratulations message
        $(".result").show();
        $(".result").html(
            "<p>That's correct!</p>" +
            "<p>" + questionBank.correctAnswerArray[i] + "</p>" +
            questionBank.correctGifsArray[i]
        );
    },

    //Unanswered display
    unansweredDisplay: function() {
        //Hide question and answers
        $(".question-container").hide();
        $(".answers-container").hide();
        //Hide Timer
        $(".timer").hide();
        //Fill results div with Time's Up
        $(".result").show();
        $(".result").html(
            "<p>Time's Up!</p>" +
            "<p>The correct answer is:</p>" +
            "<p>" + questionBank.correctAnswerArray[i] + "</p>" +
            questionBank.correctGifsArray[i]
        );
    },

    //Incorrect Answer Display
    incorrectDisplay: function() {
        //Hide question and answers
        $(".question-container").hide();
        $(".answers-container").hide();
        //Hide Timer
        $(".timer").hide();
        //Fill results div with Time's Up
        $(".result").show();
        $(".result").html(
            "<p>That's wrong!</p>" +
            "<p>The correct answer is:</p>" +
            "<p>" + questionBank.correctAnswerArray[i] + "</p>" +
            questionBank.correctGifsArray[i]
        );
    },

    //Final Score Display
    finalDisplay: function(){

        $(".result").html(
            //display correct questions
            "<p class='score'> Correct Questions: " + correctScore + "</p>" +
            //display Incorrect Questions
            "<p class='score'> Incorrect Questions: " + incorrectScore + "</p>" +
            //display Unanswered Questions
            "<p class='score'> Unanswered Questions: " + unansweredScore + "</p>");
        var restartBtn = $("<div>");
        restartBtn.html(
            "<a class='btn btn-info btn-lg start-btn' role='button'>Play Again</a>"
        );
        $(".result").append(restartBtn);
    }

}

//Call on action to start game
actions.startGame();







});