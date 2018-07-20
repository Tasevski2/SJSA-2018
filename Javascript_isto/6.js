// var size = prompt("What is the size of the pyramid")
// function drawPyramid(size)
// {
// 	var result = "";
// 	for(var i = 0; i < size;i++)
// 	{
// 		result += "#";
// 		console.log(result);
// 	}
// }

// drawPyramid(size);


//Prototypes

// function Rabbit(type)
// {
// 	this.type = type;
// }

// Rabbit.prototype.speak = function(phrase)
// {
// 	console.log("The " + this.type + " rabbit says " + phrase)
// }

// var zeko = new Rabbit("A");
// zeko.speak("Hello world");

// function Person(firstname,lastname,age,proffesion)
// {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	this.age = age;
// 	this.proffesion = proffesion;
// }


// Person.prototype.greeting = function(phrase)
// {
// 	alert(phrase + " I'm "+ this.firstname+ " "+this.lastname+". I'm "+this.age+" and work as "+this.proffesion);
// }

// var person = new Person("Viktor","Tasevski",17,"Dzabolebar");
// person.greeting();


// function Teacher(firstname,lastname,gnder,university,subject)
// {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	this.gnder = gnder;
// 	this.university = university;
// 	this.subject = subject;
// }

// Teacher.prototype.greeting = function()
// {
// 	var prefix;
// 	if(this.gnder == "male" || this.gnder == "Male" || this.gnder == "m")
// 	{
// 		prefix = "Mr.";
// 	}
// 	else
// 	{
// 		prefix = "Ms.";
// 	}
// 	alert("Hello " + prefix + this.firstname + " " + this.lastname + ". Welcome to "+this.university + ". You will teach " + this.subject);
// }
// var teacher = new Teacher("Viktor","Tasevski","Male","FINKI","Machine Learning");
// teacher.greeting();

// class User {
// 	constructor(name)
// 	{
// 		this.name = name;
// 	}
// 	sayHi()
// 	{
// 		alert("Hello " + this.name);
// 	}
// }

// var a = new User("Viktor");
// console.log(a.name);
// a.sayHi();

// class Pravoagolnik
// {
// 	constructor(a,b)
// 	{
// 		this.a = a;
// 		this.b = b;
// 	}
// 	cal()
// 	{
// 		return this.a*this.b;
// 	}
// 	result()
// 	{
// 		alert("Plostinata na triagolnikot e " + this.cal());
// 	}
// }

// var pravoagolnik_1 = new Pravoagolnik(10,10);
// pravoagolnik_1.result();


// class SimpleDate
// {
// 	constructor(day,month,year)
// 	{
// 		this.day = day;
// 		this.month = month;
// 		this.year = year;
// 	}
// 	addDays(nDays)
// 	{
// 		return this.day+=nDays;
// 	}
// }

// var today = new SimpleDate(19,07,2018);

// console.log(today.addDays(5));

// class Teacher
// {
// 	constructor(firstname,lastname,subject)
// 	{
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		this.subject = subject;
// 	}

// }

// class UniTeacher extends Teacher
// {
// 	constructor(firstname,lastname,subject,university,gender)
// 	{
// 		super(firstname,lastname,subject);
// 		this.university = university;
// 		this.gender = gender;
// 	}
// 	greeting()
// 	{
// 		alert("Hello " + this.firstname + " " + this.lastname + ". I will be teaching at " + this.university);
// 	}
// }

// var teacher = new UniTeacher("Viktor","Tasevski","Machine Learning","FINKI","Male");
// teacher.greeting();


// class Fudbaler
// {
// 	constructor(firstname,lastname,position)
// 	{
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		this.position = position;
// 	}

// 	prezentacija()
// 	{
// 		console.log("Welcome " + this.firstname + " " + this.lastname + " on position " + this.position);
// 	}
// }

// var fudbaler = new Fudbaler("Cristiano","Ronaldo","left wing");
// fudbaler.prezentacija();