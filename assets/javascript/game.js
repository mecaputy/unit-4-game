$(document).ready(function(){
    var random=Math.floor(Math.random() * (120 - 19) 
+ 19);  
    //select a random number for they player between 19-120
    $("#randomNumber").text(random);
    //link to the randomNumber in html

    var crystal1 = Math.floor(Math.random() * (12 -1) + 1);
    var crystal2 = Math.floor(Math.random() * (12 -1) + 1);
    var crystal3 = Math.floor(Math.random() * (12 -1) + 1);
    var crystal4 = Math.floor(Math.random() * (12 -1) + 1);
    //create random vaules for the crystals 1-12

    var finalScore = 0;
    var wins = 0;
    var losses = 0;
    //decalre variables for scores

    $("#wins").text(wins);
    $("#losses").text(losses);

    //set function to reset the game
    function reset(){
        random=Math.floor(Math.random() * (120 -19) + 19);
        console.log(random);
        $("#randomNumber").text(random);
        crystal1 = Math.floor(Math.random() * (12 -1) + 1);
        crystal2 = Math.floor(Math.random() * (12 -1) + 1);
        crystal3 = Math.floor(Math.random() * (12 -1) + 1);
        crystal4 = Math.floor(Math.random() * (12 -1) + 1);
        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);
        finalScore = 0;
        $("total-score").text(finalScore);
        }
    //function to add wins and losses** COME BACK TO THIS**
    function youWin(){
        wins++;
        alert("You win!")
        $("#wins").text(wins);
        reset();
    }

    function youLose(){
        losses++;
        alert("You lose!")
        $("#losses").text(losses);
        reset();
    }

    //set up click functions for the gems
    $("#crystal1").on("click", function(){
        finalScore = finalScore + crystal1;
        console.log("New finalScore= " + finalScore);
        $("#total-score").text(finalScore);
            if (finalScore == random){
                youWin();
            } else if (finalScore > random){
                youLose();
            }
    });

    $("#crystal2").on("click", function(){
        finalScore = finalScore + crystal2;
        console.log("New finalScore= " + finalScore);
        $("#total-score").text(finalScore);
            if (finalScore == random){
                youWin();
            } else if (finalScore > random){
                youLose();
            }
    });

    $("#crystal3").on("click", function(){
        finalScore = finalScore + crystal3;
        console.log("New finalScore= " + finalScore);
        $("#total-score").text(finalScore);
            if (finalScore == random){
                youWin();
            } else if (finalScore > random){
                youLose();
            }
    });

    $("#crystal4").on("click", function(){
        finalScore = finalScore + crystal4;
        console.log("New finalScore= " + finalScore);
        $("#total-score").text(finalScore);
            if (finalScore == random){
                youWin();
            } else if (finalScore > random){
                youLose();
            }
    });


});
