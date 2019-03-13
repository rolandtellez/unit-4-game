var wins = 0;
var losses = 0;

function newGame() {

    var yourScore = 0;
    $("#current-score").text(yourScore);

    var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(targetNumber);
    $("#target-score").text(targetNumber);

    var brickOneValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(brickOneValue);

    var brickTwoValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(brickTwoValue);

    var brickThreeValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(brickThreeValue);

    var brickFourValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log(brickFourValue);

    $("#lego-one").on("click", function () {
        yourScore += brickOneValue;
        console.log(yourScore);
        $("#current-score").text(yourScore);
        if (yourScore === targetNumber) {
            wins++;
            $("#displayed-wins").text(wins);
            brickOneValue = 0;
            yourScore = 0;
            newGame();
        };
    
        if (yourScore > targetNumber) {
            losses++;
            $("#displayed-losses").text(losses);
            brickOneValue = 0;
            yourScore = 0;
            newGame();
        };
        
    });  

    $("#lego-two").on("click", function () {
        yourScore += brickTwoValue;
        console.log(yourScore);
        $("#current-score").text(yourScore);
        if (yourScore === targetNumber) {
            wins++;
            $("#displayed-wins").text(wins);
            brickTwoValue = 0;
            yourScore = 0;
            newGame();
        };
    
        if (yourScore > targetNumber) {
            losses++;
            $("#displayed-losses").text(losses);
            brickTwoValue = 0;
            yourScore = 0;
            newGame();
        };
        
    });

    $("#lego-three").on("click", function () {
        yourScore += brickThreeValue;
        console.log(yourScore);
        $("#current-score").text(yourScore);
        if (yourScore === targetNumber) {
            wins++;
            $("#displayed-wins").text(wins);
            brickThreeValue = 0;
            yourScore = 0;
            newGame();
        };
    
        if (yourScore > targetNumber) {
            losses++;
            $("#displayed-losses").text(losses);
            brickThreeValue = 0;
            yourScore = 0;
            newGame();
        };
        
    });

    $("#lego-four").on("click", function () {
        yourScore += brickFourValue;
        console.log(yourScore);
        $("#current-score").text(yourScore);
        if (yourScore === targetNumber) {
            wins++;
            $("#displayed-wins").text(wins);
            brickFourValue = 0;
            yourScore = 0;
            newGame();
        };
    
        if (yourScore > targetNumber) {
            losses++;
            $("#displayed-losses").text(losses);
            brickFourValue = 0;
            yourScore = 0;
            newGame();
        };
        
    });

}

newGame();