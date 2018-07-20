// var my_first_object = {firstname : "Viktor", lastname : "Tasevski"};

// var licnost = {name: "Semos"};

// var dr_licnost = licnost;
// licnost.name = "Neotel"; //ako key e tekst

// console.log(dr_licnost.name);
// console.log(licnost.name);

// var age_limit = {5 : "Too young" , 90 : "Too old"};
// console.log(age_limit["5"]); //ako key e integer

// var mug = new Object();

// mug.color = "White";

// console.log(mug.color);

// var mug = {color : "white" , weight: "250g" , material: "porcelain" , size : "s"};

// console.log(mug);

// console.log("This mug is " + mug.color + ", and weights " + mug.weight + "made from material " + mug.material + "and its size is " + mug.size + ".");

// var movie = {
// 	name: "Pulp fiction",
// 	year: 1994,
// 	genre: "Crime",
// 	awards: ["Palme D'or"]
// }

// movie.awards.push("Academy award");
// movie.something = "something";
// delete movie.year;
// console.log(movie);


// var car = {
// 	model: "Ford",
// 	year: "2017",
// 	tires: ["left top tire", "left bottom tire" , "right top tire" , "right bottom tire"]
// }

// var extracted_tire = car.tires.splice(2,1);
// console.log(extracted_tire);

// for(var i=0;i<=10;i++)
// {
// 	console.log("Current count is " + i);
// }

// var colors = ["red", "grey", "blue"];

// for(var i=0;i<colors.length;i++)
// {
// 	console.log(colors[i]);
// }

// document.getElementById("demo").innerHTML = colors;
// var parni = new Array();
// var neparni = new Array();

// for(var i=0;i<50;i++)
// {
// 	if(i%2==0)
// 		console.log("Even number is " + i);
// 	else
// 		console.log("Odd number is " + i);
		
// }


// var names = [{name: "Viktor" , lastname: "Tasevski"},{name: "Semos" , lastname: "Edukacija"},{name: "Dimitar" ,lastname: "Petreski"},{name: "Koljo" , lastname: "Grcev"}];

// for(var i=0;i<names.length;i++)
// {
// 	console.log(names[i].name+" "+names[i].lastname);
// }

// var muliplier = 9;
// for(var i=0;i<=10;i++)
// {
// 	var result = muliplier*i;
// 	console.log(result);
// }

// var person = {
// 	firstname: "Viktor",
// 	lastname: "Tasevski",
// 	test: []
// }
// for(var x in person)
// {
// 	console.log(x);
// 	// console.log(person[x]);
// } 


// var result = "";
// var i=0;
// while(i<=5)
// {
// 	result+="<br>The number is " +i;
// 	i++;
// }
// document.write(result);