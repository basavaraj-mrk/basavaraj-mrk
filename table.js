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