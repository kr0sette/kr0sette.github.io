//Instructs computer to read HTML before running the javascript
$(document).ready(function(){

//Array of 20 animals
var animalArray = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Sheep",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig"
];

//Function used to create a new button
function createButton(name){
    //Create a button and assign it to variable
    var newButton = $("<button>").attr({
        type: "button",
        //add unique id to button
        class: "aButton btn btn-info"
    });
    //fill button text with animal name (this input should be specified when variable is called on)
    newButton.text(name);
    //append button to animal buttons div
    $("#animalButtons").append(newButton);
};

//For loop that runs through animalArray and creates button for each
for (i=0; i < animalArray.length; i++){
    //Call create button function with array[i] as input
    createButton(animalArray[i]);
};
    

//Create functionality for pulling results from giphy when you click animal button
//Create on click event for animal buttons
$("body").on("click",".aButton", function(){
    //Capture value of button into variable animal
        var animal = $(this).text();
    //Create variable for query URL
        //incorporate variable that stores the animal name
        //limit results to 10
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=nfY8ip1bPze0r22KDMrP8pLHY9JqD0Tq&limit=10";
    //Perform AJAX GET request
    $.ajax ({
        url: queryURL,
        method: "GET"
    })
        //Then Function
        .then(function(response) {
            console.log(response);
            //Store results in variable (var results = response.data;)
            var results = response.data;
            console.log(results);
            //Create for loop to:
            for (var i = 0; i < results.length; i++) {
                //Filter for appropriate rating
                if (results[i].rating !== "r"  && results[i].rating !== "pg-13") {
                    var rating = results[i].rating;
                    //Create paragraph tag to display image rating in the HTML
                    var p = $("<p>").text("Rated: " + rating);
                    //Create empty image tag
                    var gifURL = results[i].images.fixed_height_still.url;
                    //Add image URL by setting src attribute to image tag
                    var animalGif = $("<img>").attr({
                        class: "gif",
                        dataState: "still",
                        src: results[i].images.fixed_height_still.url,
                        dataStill: results[i].images.fixed_height_still.url,
                        dataAnimate: results[i].images.fixed_height.url
                        });
                    //Prepend it to div animalButtons
                    $("#animals").prepend(animalGif);
                    $("#animals").prepend(p);
                }
            }
        });
});

                
//Creates functionality to create a button using the form
//Create on click event for addanimal submit button
$("#addAnimal").on("click",function(){
    event.preventDefault();
    //Grab input from form id addAnimal and store it into variable
    var animalInput = $("#animal-input").val().trim();
    //Call create button Function with variable as input
    createButton(animalInput);
});

//Function that pauses and unpauses drinks
//Create on click event for gifs
$("body").on("click",".gif",function(){
    //gets value of dataState in selected img tag
    var state = $(this).attr("dataState");
    //if state is still
    if (state === "still") {
        //change src value to dataAnimate
        $(this).attr("src", $(this).attr("dataAnimate"));
        //set state to animate
        $(this).attr("dataState","animate");
    }
    //else
    else{
        //change src value to dataStill
        $(this).attr("src", $(this).attr("dataStill"));
        //set state to still
        $(this).attr("dataState","still");
    }
});



});