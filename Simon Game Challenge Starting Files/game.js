
let gamePattern = [];

const btnColors = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

let level = 0;

let started = false;


function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').html("Level: " + level);

    let randNum = Math.floor((Math.random() * 3));
    let chosenColor = btnColors[randNum];
    gamePattern.push(chosenColor);

    $("#" + chosenColor).fadeOut(100).fadeIn(100);
    playSound(chosenColor);

}

$(".btn").click(function() {
    let userColor = $(this).attr("id");
    userClickedPattern.push(userColor);
    console.log(userClickedPattern);
    playSound(userColor);
    animatePress(userColor);
    checkAnswer(userClickedPattern.length-1);
})


function playSound(name) {
    let sound = new Audio(`sounds/${name}.mp3`);
    sound.play();
}


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed").delay(100).queue(function(next) {
        $(this).removeClass("pressed");
        next();
    })
} 

$(document).keydown(function (e) { 
    if(!started && e.key === "a") {
        nextSequence();
        started = true;
    } 
    //else if (started === true && gamePattern != userClickedPattern) {
    //     startOver();
    //     nextSequence();
    // }
});


function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {nextSequence();}, 1000);
        }
    } else {
        let sound = new Audio('sounds/wrong.mp3');
        sound.play();

        $(document.body).addClass("game-over").delay(200).queue(function(next) {
            $(document.body).removeClass("game-over");
            next();
        })

        $("#level-title").html("Game Over, Press A Key to Restart");
        startOver();
        console.log("Fail");
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    // $('#level-title').html("Press A Key to Start");
}