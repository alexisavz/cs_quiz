preguntas = new Array(10);
preguntas[0] = "The term computer is derived from?";
preguntas[1] = "Who is the father of the computer?";
preguntas[2] = "ALU is?";
preguntas[3] = "IBM 1401 is a...";
preguntas[4] = " A CD-ROM can store up to?";
preguntas[5] = "A computer program that converts an entire program into machine language";
preguntas[6] = "A fault in a computer program which prevents it from working correctly is a";
preguntas[7] = "Which is an OOP principle?";
preguntas[8] = "1 Byte equals...";
preguntas[9] = "ALU and Control Unit are jointly known as?";

var respuestas = [
  ["Greek","Roman","Latin","English"],
  ["Jhon W. Tukey","Edward Robert","Alan Turing","Charles Babbage"],
  ["Arithmetic Logic Unit","Array Unit Control","Arithmetic Length Unit","Array Logic Unification"],
  ["First Gen Computer","Second Gen Computer", "Third Gen Computer", "Fourth Gen Computer"],
  ["680MB","340MB","680GB","340GB"],
  ["Debugger","Code","IDE","Compiler"],
  ["Syntax Error","Bug","Warning","Exception"],
  ["Inheritance","Compiling","Recurssion","Linked List"],
  ["4 bites","2 bites","8 bites","16 bites"],
  ["RAM","ROM","Logic Bridge","CPU"]
];

var resCorr = [3,4,1,2,1,4,2,1,3,4];
correctas = new Array(10);

var question = document.getElementById("preg");
var bot1 = document.getElementById("button1");
var bot2 = document.getElementById("button2");
var bot3 = document.getElementById("button3");
var bot4 = document.getElementById("button4");
var pointer = 0;
question.innerHTML = preguntas[pointer];
bot1.innerHTML = respuestas[pointer][0];
bot2.innerHTML = respuestas[pointer][1];
bot3.innerHTML = respuestas[pointer][2];
bot4.innerHTML = respuestas[pointer][3];

function checkAnswer(n){
  if(pointer < 9){
    if(resCorr[pointer] == n){
      correctas[pointer] = true;
    } else{
      correctas[pointer] = false;
    }
    pointer++;
    question.innerHTML = preguntas[pointer];
    bot1.innerHTML = respuestas[pointer][0];
    bot2.innerHTML = respuestas[pointer][1];
    bot3.innerHTML = respuestas[pointer][2];
    bot4.innerHTML = respuestas[pointer][3];
  }
  if(pointer == 9){
    if(resCorr[pointer] == n){
      correctas[pointer] = true;
    } else{
      correctas[pointer] = false;
    }
    var multi = 1;
    var puntos=0;
    for(var i=0; i<10; i++){
      if(correctas[i] == true){
            multi += .17;
      } else {multi = 1;}
      puntos += multi * 100;
    }
    console.log(puntos);
    alert("Tu puntuaje es " + puntos);
    console.log(pointer);
  }
}
