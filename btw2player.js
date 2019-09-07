// alert("helloo welcome and play")
var winner_state = false;
var count = 0;
var flag = Math.random() >=0.5;
var c1 = "O";
var c2;

if (flag)
	c1 = "X";


if (c1=="X")
{
	c2="O"
}
else
{
	c2="X"
}



var Arr = ["","","","","","","","",""];
function interpret() {
		for(var i=0;i<9;i++){
		document.getElementById(i).innerHTML=Arr[i];
	}
}

function func(obj){
	if (winner_state)
		return;
	var a = obj.id;
	if (Arr[a]==""){
		if (flag){
			Arr[a] = "X";
			flag = false;
		}
		else{
			flag = true;
			Arr[a] = "O";	
		}
		count += 1;
	}
	interpret();
	winner();
	interpret();
}
function winner(){
if (winner_state)
		return;
	if (((Arr[0]==Arr[1])&&(Arr[1]==Arr[2]))&&(Arr[0]!="")){
		if (c1==Arr[0])
			alert("Player 1 is winner");
			
		else if (c2==Arr[0])
			alert("Player 2 is winner");

		winner_state = true;
	}
	else if ((Arr[3]==Arr[4])&&(Arr[3]==Arr[5])&&(Arr[3]!="")){
		if (c1==Arr[3])
			alert("Player 1 is winner");
		else if (c2==Arr[3])
			alert("Player 2 is winner");

		winner_state = true;
	}
	else if ((Arr[6]==Arr[7])&&(Arr[7]==Arr[8])&&(Arr[6]!="")){
		if (c1==Arr[6])
			alert("Player 1 is winner");
		else if (c2==Arr[6])
			alert("Player 2 is winner");

		winner_state = true;
	}	
	else if ((Arr[0]==Arr[3])&&(Arr[3]==Arr[6])&&(Arr[0]!="")){
		if (c1==Arr[0])
			alert("Player 1 is winner");
		else if (c2==Arr[0])
			alert("Player 2 is winner");

	
		winner_state = true;
	}
	else if ((Arr[1]==Arr[4])&&(Arr[4]==Arr[7])&&(Arr[7]!="")){
		if (c1==Arr[1])
			alert("Player 1 is winner");
		else if (c2==Arr[1])
			alert("Player 2 is winner");

	
		winner_state = true;
	}	
	else if ((Arr[2]==Arr[5])&&(Arr[5]==Arr[8])&&(Arr[2]!="")){
		if (c1==Arr[2])
			alert("Player 1 is winner");
		else if (c2==Arr[2])
			alert("Player 2 is winner");

		
		winner = true;
	}
	else if ((Arr[0]==Arr[4])&&(Arr[4]==Arr[8])&&(Arr[8]!="")){
		if (c1==Arr[0])
			alert("Player 1 is winner");
		else if (c2==Arr[0])
			alert("Player 2 is winner");

	
		winner_state = true;
	}
	else if ((Arr[2]==Arr[4])&&(Arr[4]==Arr[6])&&(Arr[6]!="")){
		if (c1==Arr[2])
			alert("Player 1 is winner");
		else if (c2==Arr[2])
			alert("Player 2 is winner");

		
		winner_state = true;
	}
	else {
		var dr=Arr.every(draw);
		function draw(value){
			return value!="";
		}

		if (dr==true){
			alert("match draw");
		}

	}
}
