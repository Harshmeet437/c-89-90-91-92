player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

ps1 = 0;
ps2 = 0;

document.getElementById("p1n").innerHTML = player1 + " : ";
document.getElementById("p2n").innerHTML = player2 + " : ";

document.getElementById("p1s").innerHTML = ps1;
document.getElementById("p2s").innerHTML = ps2;

document.getElementById("pq").innerHTML = "Question turn - " + player1;
document.getElementById("pa").innerHTML = "Answer turn - " + player2;

function send() {
	get_word = document.getElementById("in").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("o").innerHTML = row;
document.getElementById("in").value = "";
}

question_turn = "player1";
answer_turn = "player2";


function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == word)	
	{
		if(answer_turn == "player1")
		{
			ps1 = ps1 +1;
		    document.getElementById("p1s").innerHTML = ps1;
		}
		else 
		{
			ps2 = ps2 +1;
		    document.getElementById("p2s").innerHTML = ps2;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("pq").innerHTML = "Question Turn - " + player2 ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("pa").innerHTML = "Question Turn - " + player1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("pa").innerHTML = "Answer Turn - " + player2 ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("pa").innerHTML = "Answer Turn - " + player1 ;
	}

    document.getElementById("o").innerHTML = "";
}