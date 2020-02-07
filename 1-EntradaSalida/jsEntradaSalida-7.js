/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numUno
    var numDos
    var resul

    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resul = parseInt(numUno) + parseInt(numDos);
    alert ("la suma es " + resul);
	
}

function restar()
{
    var numUno
    var numUno
    var resul

    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resul = parseInt(numUno) - parseInt(numDos);
    alert ("la resta es " + resul);
	
}

function multiplicar()
{ 
    var numUno
    var numDos
    var resul

    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resul = parseInt(numUno) * parseInt(numDos);
    alert ("la multiplicación es " + resul);
	
}

function dividir()
{
	var numUno
    var numDos
    var resul

    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    resul = parseInt(numUno) / parseInt(numDos);
    alert ("la división es " + resul);
}

