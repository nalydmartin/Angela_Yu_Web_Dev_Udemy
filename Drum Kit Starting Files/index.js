
const buttons = document.querySelectorAll("button.drum")

for (let i = 0; i < buttons.length; i ++) {
    let temp = buttons[i];
    temp.addEventListener("click", (() => {
        let btnHtml = temp.innerHTML;
        playSound(btnHtml);
        btnAnimation(btnHtml);
    }))

    // if(temp.classList.contains("w")) {
    //     temp.addEventListener("click", playCrash);
    // } else if (temp.classList.contains("a")) {
    //     temp.addEventListener("click", playKickBass);
    // } else if (temp.classList.contains("s")) {
    //     temp.addEventListener("click", playSnare);
    // } else if (temp.classList.contains("d")) {
    //     temp.addEventListener("click", playTom1);
    // } else if (temp.classList.contains("j")) {
    //     temp.addEventListener("click", playTom2);
    // } else if (temp.classList.contains("k")) {
    //     temp.addEventListener("click", playTom3);
    // } else if (temp.classList.contains("l")) {
    //     temp.addEventListener("click", playTom4);
    // } 
}

document.addEventListener("keydown", ((e) => {
    playSound(e.key);
    btnAnimation(e.key);
}));

function playSound(e) {
    switch (e) {
        case "w":
            playCrash();
            break;
        case "a":
            playKickBass();
            break;
        case "s":
            playSnare();
            break;
        case "d":
            playTom1();
            break;
        case "j":
            playTom2();
            break;
        case "k":
            playTom3();
            break;
        case "l":
            playTom4();
            break;
        default:
            break;
    }
}

function btnAnimation(e) {
    let activeBtn = document.querySelector(`.${e}`);

    if(activeBtn.classList.contains("pressed")) {
        activeBtn.classList.remove("pressed");
    } else {
        activeBtn.classList.add("pressed");
    }

    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 1000);
}


function playCrash() {
    const crash = new Audio("sounds/crash.mp3");
    crash.play();
}

function playKickBass() {
    const kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
}

function playSnare() {
    const snare = new Audio("sounds/snare.mp3");
    snare.play();
}

function playTom1() {
    const tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
}

function playTom2() {
    const tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
}

function playTom3() {
    const tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
}

function playTom4() {
    const tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
}


