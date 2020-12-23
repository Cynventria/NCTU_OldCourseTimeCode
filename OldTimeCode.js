var intervalID = setInterval(function(){
	var x = document.getElementsByTagName("frame")[2].contentDocument.getElementsByTagName("frame")[1].contentDocument.getElementsByTagName("td")
	for(var i = 0; i < x.length; i++){
	  if(x[i].id == "idCrsName"){
		var y = x[i+8].innerHTML.split(/<|>/);
		for(var j = 0; j < y.length; j++){
		  if(y[j].search("blue") != -1){
			var tmp = ""
			//MTWRFSU
			if(y[j+1][0] == 'M')  tmp='1';
			else if(y[j+1][0] == 'T')  tmp='2';
			else if(y[j+1][0] == 'W')  tmp='3';
			else if(y[j+1][0] == 'R')  tmp='4';
			else if(y[j+1][0] == 'F')  tmp='5';
			else if(y[j+1][0] == 'S')  tmp='6';
			else if(y[j+1][0] == 'U')  tmp='7';
			else break;

			for(var k = 1; k < y[j+1].length; k++){
			  if(y[j+1][k] == '1')  tmp = tmp + 'A';
			  else if(y[j+1][k] == '2')  tmp = tmp + 'B';
			  else if(y[j+1][k] == '3')  tmp = tmp + 'C';
			  else if(y[j+1][k] == '4')  tmp = tmp + 'D';
			  else if(y[j+1][k] == '5')  tmp = tmp + 'E';
			  else if(y[j+1][k] == '6')  tmp = tmp + 'F';
			  else if(y[j+1][k] == '7')  tmp = tmp + 'G';
			  else if(y[j+1][k] == '8')  tmp = tmp + 'H';
			  else if(y[j+1][k] == '9')  tmp = tmp + 'Y';
			  else if(y[j+1][k] == 'y')  tmp = tmp + 'M';
			  else if(y[j+1][k] == 'z')  tmp = tmp + 'N';
			  else if(y[j+1][k] == 'n')  tmp = tmp + 'X';
			  else if(y[j+1][k] == 'a')  tmp = tmp + 'I';
			  else if(y[j+1][k] == 'b')  tmp = tmp + 'J';
			  else if(y[j+1][k] == 'c')  tmp = tmp + 'K';
			  else if(y[j+1][k] == 'd')  tmp = tmp + 'L';
			  else if(y[j+1][k] == 'M')  tmp = tmp + '1';
			  else if(y[j+1][k] == 'T')  tmp = tmp + '2';
			  else if(y[j+1][k] == 'W')  tmp = tmp + '3';
			  else if(y[j+1][k] == 'R')  tmp = tmp + '4';
			  else if(y[j+1][k] == 'F')  tmp = tmp + '5';
			  else if(y[j+1][k] == 'S')  tmp = tmp + '6';
			  else if(y[j+1][k] == 'U')  tmp = tmp + '7';
			}
			x[i+8].innerHTML = x[i+8].innerHTML.replace(y[j+1], tmp);
		  }
		}
	  }
	}
}, 1000);
