//Instructs computer to read HTML before running the javascript
$(document).ready(function() {


//Variable for Budget (number)
var budget = 0;
//Variable for Fruit prices(array)
var fruitPrices = [];
//Variable for Apple Price - array index 0
var applePrice;
//Variable for Lemon Price - array index 1
var lemonPrice;
//Variable for Watermelon Price - array index 2
var watermelonPrice;
//Variable for Peach Price - array index 3
var peachPrice;
//Variable for Total (number)
var total = 0;
//Variable for Wins (number)
var wins = 0;
//Variable for Losses (number)
var losses = 0;


//User Clicks start button for the first time when the page loads
    //Calls on restart game function
$("#play-button").on("click", function() {
    resetGame();
});



//Restart game function
function resetGame () {
    //Randomly select Budget amount by clicking start button
    //Assign selected number to variable
    //Limit budget between $19 - $120
    budget = Math.floor(Math.random() * 120 + 19);
    //Print budget amount to HTML
    $("#budget-number").text("$" + budget);
    //Randomly generate prices for each peice of fruit
        //Limite Prices between $1 - $12
    applePrice = Math.floor(Math.random() * 12) + 1;
    lemonPrice = Math.floor(Math.random() * 12) + 1;
    watermelonPrice = Math.floor(Math.random() * 12) + 1;
    peachPrice = Math.floor(Math.random() * 12) + 1;
    console.log(applePrice, lemonPrice, watermelonPrice, peachPrice);
    //Set total to 0
    total = 0;
    $("#total-number").text("$" + total);

}


//User clicks apple
$("#apple-pic").on("click", function(){
    //Apple price gets added to Total
    total += applePrice;
    $("#total-number").text("$" + total);
    //If total > budget
    if(total > budget) {
        //alert user that they lose
        alert("You spent too much money.  You lose!");
        //Losses goes up by 1
        losses += 1;
        $("#losses-number").text(losses);
        //Call on function to restart game (clear board)
        resetGame();
    }
    //else if total = budget
    else if (total === budget){
        //alert user that they win
        alert("You made the exact budget.  You win!");
        //Wins goes up by 1
        wins += 1;
        $("#wins-number").text(wins);
        //Call on function to restart game (clear board)
        resetGame();
    }   
        
});

//User clicks lemon
$("#lemon-pic").on("click", function(){
    //lemon price gets added to Total
    total += lemonPrice;
    $("#total-number").text("$" + total);
    //If total > budget
    if(total > budget) {
        //alert user that they lose
        alert("You spent too much money.  You lose!");
        //Losses goes up by 1
        losses += 1;
        $("#losses-number").text(losses);
        //Call on function to restart game (clear board)
        resetGame();
    }
    //else if total = budget
    else if (total === budget){
        //alert user that they win
        alert("You made the exact budget.  You win!");
        //Wins goes up by 1
        wins += 1;
        $("#wins-number").text(wins);
        //Call on function to restart game (clear board)
        resetGame();
    }   
        
});
        
//User clicks watermelon
$("#watermelon-pic").on("click", function(){
    //watermelon price gets added to Total
    total += watermelonPrice;
    $("#total-number").text("$" + total);
    //If total > budget
    if(total > budget) {
        //alert user that they lose
        alert("You spent too much money.  You lose!");
        //Losses goes up by 1
        losses += 1;
        $("#losses-number").text(losses);
        //Call on function to restart game (clear board)
        resetGame();
    }
    //else if total = budget
    else if (total === budget){
        //alert user that they win
        alert("You made the exact budget.  You win!");
        //Wins goes up by 1
        wins += 1;
        $("#wins-number").text(wins);
        //Call on function to restart game (clear board)
        resetGame();
    }   
        
});


//User clicks peach
$("#peach-pic").on("click", function(){
    //peach price gets added to Total
    total += peachPrice;
    $("#total-number").text("$" + total);
    //If total > budget
    if(total > budget) {
        //alert user that they lose
        alert("You spent too much money.  You lose!");
        //Losses goes up by 1
        losses += 1;
        $("#losses-number").text(losses);
        //Call on function to restart game (clear board)
        resetGame();
    }
    //else if total = budget
    else if (total === budget){
        //alert user that they win
        alert("You made the exact budget.  You win!");
        //Wins goes up by 1
        wins += 1;
        $("#wins-number").text(wins);
        //Call on function to restart game (clear board)
        resetGame();
    }   
        
});



});