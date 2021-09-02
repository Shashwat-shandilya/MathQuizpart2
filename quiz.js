player1Name = localStorage.getItem("player1");
player2Name = localStorage.getItem("player2");

player1Score = 0;
player2Score = 0;

document.getElementById("player1_Name").innerHTML = player1Name + ": "
document.getElementById("player2_Name").innerHTML = player2Name + ": "

document.getElementById("player1_Score").innerHTML = player1Score;
document.getElementById("player2_Score").innerHTML = player2Score;

document.getElementById("playerQuestionTurn").innerHTML = "Question turn : " + player1Name;
document.getElementById("playerAnswerTurn").innerHTML = "Answer turn : " + player2Name;

function equationSend(){
    var operation = document.getElementById("operation").value;
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    answerformultiplication = parseInt(number1) * parseInt(number2);
    answerforsubtraction = parseInt(number1) - parseInt(number2);
    answerforaddition = parseInt(number1) + parseInt(number2);
    answerfordivision = parseInt(number1) / parseInt(number2);

    if(operation == "multiplication"){
        theEquation = "<h2>" + number1 + "X" + number2 + "</h2>";
        ANSinput = "<br> Answer: <input type='number' id='ansInput'>";
        checkBtn = "<br><br> <button class='btn btn-success' onclick = 'checkAns()'> Submit and check answer</button";
        ansBox = theEquation + ANSinput + checkBtn;
        document.getElementById("output").innerHTML = ansBox;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }

    if(operation == "subtraction"){
        theEquation = "<h2>" + number1 + "-" + number2 + "</h2>";
        ANSinput = "<br> Answer: <input type='number' id='ansInput'>";
        checkBtn = "<br><br> <button class='btn btn-success' onclick = 'checkAns()'> Submit and check answer</button";
        ansBox = theEquation + ANSinput + checkBtn;
        document.getElementById("output").innerHTML = ansBox;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
    
    if(operation == "addition"){
        theEquation = "<h2>" + number1 + "+" + number2 + "</h2>";
        ANSinput = "<br> Answer: <input type='number' id='ansInput'>";
        checkBtn = "<br><br> <button class='btn btn-success' onclick = 'checkAns()'> Submit and check answer</button";
        ansBox = theEquation + ANSinput + checkBtn;
        document.getElementById("output").innerHTML = ansBox;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }

    if(operation == "division"){
        theEquation = "<h2>" + number1 + "÷" + number2 + "</h2>";
        ANSinput = "<br> Answer: <input type='number' id='ansInput'>";
        checkBtn = "<br><br> <button class='btn btn-success' onclick = 'checkAns()'> Submit and check answer</button";
        ansBox = theEquation + ANSinput + checkBtn;
        document.getElementById("output").innerHTML = ansBox;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
}