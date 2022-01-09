function StartGame(){
    player1_name= document.getElementById("Player1Login").value;
    player2_name= document.getElementById("Player2Login").value;
    localStorage.setItem("player1name", player1_name);
    localStorage.setItem("player2name", player2_name);
    window.location="game_page.html";
}