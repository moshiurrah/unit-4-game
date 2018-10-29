
//Generate random number beetween 19 - 120
var targetNumber = null;

var crystalValues = [];
var counter = null;
 
var win=0;
var lose=0;

function startgame(){


counter=0;
crystalValues = [];
//Generate random number beetween 19 - 120
targetNumber = 19 + Math.floor(Math.random() * 102);

do {
  var tempRandom = Math.floor((Math.random() * 12) + 1);
  if (crystalValues.indexOf(tempRandom) === -1) {
    crystalValues.push(tempRandom);
  }
} while (crystalValues.length < 4);



$("#number-to-guess").text(targetNumber);


$("#number-total").text(counter);

$("#win").text("Wins :"+win);
$("#lose").text("Losses :"+lose);


// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < crystalValues.length; i++) {

  // For each iteration, we will create an imageCrystal
  //var imageCrystal = null;

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  //imageCrystal.attr("data-crystalvalue", crystalValues[i]);
  
  $(".image"+(i+1)).attr("data-crystalvalue", crystalValues[i]);
  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  
}

console.log(crystalValues);
// This time, our click event applies to every single crystal on the page. Not just one.
}



startgame();


$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.

  $("#number-total").text(counter);
  //alert("New score: " + counter);

  if (counter === targetNumber) {
    //alert("You win!");
    
    win++;
    
    $("#result").text("You Win!!");
    
    //reset the game;
    startgame();

  }

  else if (counter >= targetNumber) {
    //alert("You lose!!");
    lose++;

    
    $("#result").text("You Lost!!");
    
    //reset the game;
    startgame();

  }

});
