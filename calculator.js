function display(){
	console.log('Hello Mirketa');
}

function add(){
	var num1 =document.getElementById('value1').value;
	var num2 =document.getElementById('value2').value;
	var sum =parseInt(num1)+parseInt(num2);
	document.getElementById('value3').value = sum;
	console.log(sum);
}

function subtract(){
	var num3 =document.getElementById('value1').value;
	var num4 =document.getElementById('value2').value;
	var subtract =parseInt(num3)-parseInt(num4);
	document.getElementById('value3').value = subtract;
	console.log(subtract);
}

function multiply(){
	var num5 =document.getElementById('value1').value;
	var num6 =document.getElementById('value2').value;
	var multiply =parseInt(num5)*parseInt(num6);
	document.getElementById('value3').value = multiply;
	console.log(multiply);
}

function division(){
	var num7 =document.getElementById('value1').value;
	var num8 =document.getElementById('value2').value;
	var division =parseInt(num7)/parseInt(num8);
	document.getElementById('value3').value = division;
	console.log(division);
}