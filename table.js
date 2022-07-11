function gen1(){
	var str= '<table>';
	for(i=1;i<=5;i++){
		str= str+ '<tr><td>Orange'+ i +'</td></tr>';
	}
	str= str + '</table>';
	document.getElementById('s1').innerHTML = str;
}

function gen2(){
	var str= '<table>';
	for(i=5; i<=20; i++){
		str = str + '<tr><td>' + (i*1) +'</td><td>'+ (i*2) +'</td><td>'+ (i*3) +'</td></tr>';
	}
	str = str + '</table>';
	document.getElementById('s1').innerHTML = str;
}

function gen3(){
	var a1 = document.getElementById('t1').value;
	var a2 = document.getElementById('t2').value;
	var i=0;
	var as='';
	var abc='<table>';
	for(i=1; i<=parseInt(a2); i++){
		abc=abc+'<tr><td>'+(a1)+'</td><td>'+'x'+'</td><td>'+(i)+'</td><td>'+'='+'</td><td>'+(a1*i)+'</td></tr>';
	}
	abc=abc+'</table>';
	
	document.getElementById('s2').innerHTML = abc;
}