//This is a more efficient countDown timer using loops and change order request. When count reaches 4, a warning will display.
function countDownV3() {
    var count = 10;

    for (var i = 1; i <= 11; i++) {

        if (i <= 6) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
        } else if (i == 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blast Off!";
                count--;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, 1000 * i);
        }

    }


}
//This is a more efficient countDown timer using loops. No longer used.
function countDownV2() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    //Displays Blast Off when countDown timer reaches 0.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
        count = count--;
    }, 11000);
}



// countDown timer from 10 to 1, then print Blast Off!! No longer used.
function countDown() {
    var count = 10;
    // countDown starts at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1
    // 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //Blast Off!!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!!!";
        count = count - 1;
    }, 10000);
}
//Play craps function.
function playCraps() {
    //Creates die1.   
    var die1;
    //Creates die2.
    var die2;
    //Creates sum for adding die1 + die2.
    var sum;
    //Random number generator die1 1-6 round up to nearest whole number.
    die1 = Math.ceil(Math.random() * 6);
    //Random number generator die2 1-6 round up to nearest whole number.
    die2 = Math.ceil(Math.random() * 6);
    //Defines sum.
    sum = die1 + die2;
    //Die1 display.
    document.getElementById("die1Res").innerHTML = die1;
    //Die2 display.
    document.getElementById("die2Res").innerHTML = die2;
    //Sum die1 + die 2 display.
    document.getElementById("sumRes").innerHTML = sum;
    //"If/else" statements determining results of craps round. Lose, win, Push.
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsReults").innerHTML = "Craps! You Lose!!";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsReults").innerHTML = "Doubles, You WIN!!";
    } else {
        document.getElementById("crapsReults").innerHTML = "Push, Please roll again.";
    }

}
//Sandbox function for testing. Displays in "counDownTimer".
function runSandbox() {
    var count = 10;
//Countdown timer for Sanbox function. It will display in "counDownTimer".
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
        count = count--;
    }, 11000);

}