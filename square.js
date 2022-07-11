function c1(){
	var p1 = document.getElementById('t1').value;
	var area =3.14 * parseInt(p1) * parseInt(p1);
	
	document.getElementById('t3').value =area;
	console.log('Area of Circle is  '+''+area);
}

function c2(){
	var side = document.getElementById('t1').value;
	var sq = side * side;
	document.getElementById('t4').value = sq;
	console.log('Area of Square is  '+''+sq);
}

function c3(){
	var length = document.getElementById('t1').value;
	var width = document.getElementById('t2').value;
	var rect = length * width;
	document.getElementById('t5').value = rect;
	console.log('Area of Rectangle is  '+''+rect);
}