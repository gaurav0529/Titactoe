var winner_state = false;
var count = 0;
var flag = Math.random() >=0.5;
var v = "O";
if (flag)
	v = "X";

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
	machine();
	winner();
	interpret();
}

function winner(){
if (winner_state)
		return;
	if (((Arr[0]==Arr[1])&&(Arr[1]==Arr[2]))&&(Arr[0]!="")){
		if (v==Arr[0])
			alert("user is winner");
		else
			alert("machine is winner");
		winner_state = true;
	}
	else if ((Arr[3]==Arr[4])&&(Arr[3]==Arr[5])&&(Arr[3]!="")){
		if (v==Arr[3])
			alert("user is winner");
		else
			alert("machine is winner");
		winner_state = true;
	}
	else if ((Arr[6]==Arr[7])&&(Arr[7]==Arr[8])&&(Arr[6]!="")){
		if (v==Arr[6])
			alert("user is winner");
		else
			alert("machine is winner");
		winner_state = true;
	}	
	else if ((Arr[0]==Arr[3])&&(Arr[3]==Arr[6])&&(Arr[0]!="")){
		if (v==Arr[0])
			alert("user is winner");
		else
			alert("machine is winner");
		winner_state = true;
	}
	else if ((Arr[1]==Arr[4])&&(Arr[4]==Arr[7])&&(Arr[7]!="")){
		if (v==Arr[1])
			alert("user is winner");
		else
			alert("machine is winner");
		winner_state = true;
	}	
	else if ((Arr[2]==Arr[5])&&(Arr[5]==Arr[8])&&(Arr[2]!="")){
		if (v==Arr[2])
			alert("user is winner");
		else
			alert("machine is winner");
		winner = true;
	}
	else if ((Arr[0]==Arr[4])&&(Arr[4]==Arr[8])&&(Arr[8]!="")){
		if (v==Arr[0])
			alert("user is winner");
		else
			alert("machine is winner");
		winner_state = true;
	}
	else if ((Arr[2]==Arr[4])&&(Arr[4]==Arr[6])&&(Arr[6]!="")){
		if (v==Arr[2])
			alert("user is winner");
		else
			alert("machine is winner");
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
function machine(){
	max = 9
	min = 0
	if (winner_state)
		return;
		var a = 0;
		while (count<9){	
		if(Arr[a]=="")
		{
			if (flag){
				Arr[a] = "X";
				flag = false;
			}
			else{
				flag = true;
				Arr[a] = "O";	
			}
			count += 1;
			break;
		}	
		else{
			a = Math.floor(Math.random()*9);
		}
	}
}
