score = 0;

function US() {
    score = score + 1;
    
    document.getElementById("score").innerHTML = "score:" + score;

}

function SS() {
    localStorage.setItem("score",score);
    
}
function NP() {
    window.location = "activity_2.html";
}