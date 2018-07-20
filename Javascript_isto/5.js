// function suma(a,b)
// {
// 	return a+b;	
// }

// var a = parseInt(prompt("Vnesete ja prvata promenliva: "));
// var b = parseInt(prompt("Vnesete ja vtorata promenliva: "));
// console.log(suma(a,b));


// function greeting(name , age)
{
	// return "Jas sum " + name + " i imam " + age + " godini";
	// console.log("Jas sum " + name + " i imam " + age + " godini");
}

// console.log(greeting("Viktor",17));

// greeting("Viktor",17);

// function stepen(a,b)
// {	
// 	var c = 1;
// 	for(var i=0;i<b;i++)
// 	{
// 		c*=a;
// 	}
// 	return c;
// }
// var a = parseInt(prompt("Vnesete koj broj sakate na stepen da go stavite: "));
// var b = parseInt(prompt("Vnesete go stepenot: "));

// console.log(stepen(a,b));




// function faktoriel(n)
// {
// 	var rez = 1;
	
// 	for(var i=0;i<n;i++)
// 	{
		
// 		rez = rez * (n-i);
	
// 	}
// 	return rez;

// }
// var a = parseInt(prompt("Vnesi broj: "));
// console.log(faktoriel(a));

// var test = function()
// {
// 	return "From variable";
// }
// console.log(test());

// var landscape = function()
// {
// 	var result = "";

// 	function flat(size)
// 	{
// 		for(var i=0;i<size;i++)
// 		{
// 			result+="_";
// 		}
		
// 	}

// 	function mountain(size)
// 	{
// 		result+="/";
// 		for(var i=0;i<size;i++)
// 		{
// 		result+="'";
// 		}
// 		result+="\\";
// 	}

// 	flat(4);
// 	mountain(3);
// 	flat(4);
// 	mountain(3);
// 	flat(4);

// 	return result;

// }

// console.log(landscape());
// console.log("\"VIktor\"")


// function future()
// {
// 	return "we don't have flying cars."
// }
// console.log("The future says \""  + future() + "\"");



// function suma(a,b)
// {
// 	return a + b;
// }
// var a = parseInt(prompt("Vnesete go prviot broj: "));
// var b = parseInt(prompt("Vnesete go vtoriot broj: "));
// console.log(suma(a,b));


// var first_number = parseInt(prompt("Enter nubmer: "));
// var second_number = parseInt(prompt("Enter second number: "));

// function compare(num1,num2)
// {
// 	var result;
// 	if(num1>num2)
// 		result=num1 + " is bigger than " + num2;
// 	else if(num1<num2)
// 		result=num2 + " is bigger than " + num1;
// 	else
// 		result=num1 + " and " + num2 + " are equal";
// 	return result;
// }
// console.log(compare(first_number,second_number));


// function Hello_name(ime)
// {	

// 	return "Hello " + ime;
// }
// var ime = prompt("What\'s your name?");
// console.log    (Hello_name(ime));


// function p_n(number)
// {
// 	if(number%2==0)
// 		return true;
// 	else
// 		return false;
// }

// var number = parseInt(prompt("Enter number: "));

// if(p_n(number))
// 	console.log("Brojot e paren.")
// else
// 	console.log("Brojot e neparen.")

// var n = parseInt(prompt("Vnesete broj: "));
// var rez = 0;
// for(var i=0;i<n;i++)
// {
// 	if(i%2==0)
// 		rez+=i;
// }
// console.log("Zbirot na parnite broevi e " + rez);	

// function conversion(degrees,Choise)
// {
	
// 	if(Choise=="CTF")
// 		return degrees*9/5+32;
// 	else if(Choise=="FTC")
// 		return(degrees-32)*5/9;
// 	else
// 		console.log("Unknown entry!");

// }
// var degrees = parseInt(prompt("Enter degrees: "));
// var Choise = prompt("CTF or FTC");
// console.log(conversion(degrees,Choise));

// function count(word,char)
// {
// 	var c = 0;
// 	for(var i=0;i<word.length;i++)
// 	{
// 		if(word.charAt(i)==char)
// 			c++;
// 	}
// 	console.log(c);
// }
// count("blablabla","a");


// setTimeout(function(){
// 	alert("Hello man!");
// }, 5000);

// setInterval(function(){
// 	alert("Kaj si be bratt");
// }, 3000);


// var bomb = setInterval(function(){
// 	console.log("BOOM");
// }, 3000)


// setTimeout(function(){
// 	clearInterval(bomb);
// 	alert("Bomb defused");
// }, 5000);