function si(){
	var p =document.getElementById('value1').value;
	var r =document.getElementById('value2').value;
	var t =document.getElementById('value3').value;
	
	var interest = parseInt(p)*parseInt(r)/100*parseInt(t);
	document.getElementById('value4').value=interest;
}

function ci(){
	var p1 =document.getElementById('value1').value;
	var r1 =document.getElementById('value2').value;
	var t1 =document.getElementById('value3').value;
	
	var compound = parseInt(p1)*(1+parseInt(r1)/100)**t1-parseInt(p1);
	document.getElementById('value5').value=compound;
}