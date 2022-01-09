player1_name= localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");

player1_score = 0;
player2_score = 0;
console.log(player1_score);
console.log(player2_score);

document.getElementById("Player1_Name").innerHTML=player1_name + ":";
document.getElementById("Player2_Name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function submit() {
 answer_word = document.getElementById("answer_input").value;
 answer= answer_word.toLowerCase();
 console.log("answer in lowercase is"+answer);
 charAt1=answer.charAt(1);
 console.log(charAt1);
 
 length_dividedby2= Math.floor(answer.length/2);
 charAt2= answer.charAt(length_dividedby2);
 console.log(charAt2);

 length_minus1= answer.length - 1;
charAt3=answer.charAt(length_minus1);
console.log(charAt3);

remove_charAt1 = answer.replace(charAt1, "_");
 remove_charAt2 = remove_charAt1.replace(charAt2, "_");
  remove_charAt3 = remove_charAt2.replace(charAt3, "_");
   console.log(remove_charAt3);

   question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
   input_box = "<br>Answer : <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = question_word + input_box + check_button ;
   document.getElementById("output").innerHTML = row;
   document.getElementById("answer_input").value = "";
}

question_turn = "player1";
answer_turn = "player2";
function check() {
   get_answer=document.getElementById("input_check_box").value;
 answer1 = get_answer.toLowerCase();
 console.log(answer1+" in lower case");
 if (answer1 == "answer_input") {
if(answer_turn=="player1") {
   player1_score=player1_score+1;
   document.getElementById("player1_score").innerHTML=player1_score;
}
else {
   player2_score=player2_score+1;
   document.getElementById("player2_score").innerHTML=player2_score;
}
}
 if (question_turn=="player1"){
    question_turn="player2"
    document.getElementById("player_question").innerHTML="question_term"+player2_name;
 }
else{
   question_turn="player1"
    document.getElementById("player_question").innerHTML="question_term"+player1_name;
}

if (answer_turn=="player1"){
   answer_turn="player2"
   document.getElementById("player_answer").innerHTML="answer_term"+player2_name;
}
else{
  answer_turn="player1"
   document.getElementById("player_answer").innerHTML="answer_term"+player1_name;
}
document.getElementById("output").innerHTML="";
}