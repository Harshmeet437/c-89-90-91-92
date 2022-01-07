function AU() {
player1 = document.getElementById("U1").value;
player2 = document.getElementById("U2").value;
localStorage.setItem("player1",player1);
localStorage.setItem("player2",player2);
window.location="game_page.html";
}