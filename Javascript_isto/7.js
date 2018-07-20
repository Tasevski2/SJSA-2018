window.onload = function()
{
	// var link = document.getElementsByTagName("a")[0]
	// console.log(link);	

	// var img = document.getElementById("first_image");
	// console.log(img);
	// console.dir(img);


	// var paragraphs = document.getElementsByTagName("p");
	// console.log(paragraphs);
	// document.body.insertBefore(paragraphs[2],paragraphs[0]);

	// var list = document.getElementsByTagName("ul")[0];
	// console.log(list.children);
	// 	for(var i=0;i<list.children.length;i++)
	// {

	// 	var single_item= list.children[i];
	// 	for(var j = 0;j<single_item.children.length;j++){
	// 		var single_item_inside = single_item.children[j];

	// 		if(single_item_inside.nodeName == "A")
	// 		{
	// 			single_item_inside.href = "https://www.google.com";
	// 			single_item_inside.innerHTML = "<b>Google</b>";
	// 		}
	// 	}

	// }

	// var ul = document.getElementsByClassName("my_list")[0];

	// for(var i=0;i<ul.children.length;i++)
	// {
	// 	var li = ul.children[i];
	// 	for(var j=0;j<li.children.length;j++)
	// 	{
	// 		var a_or_span_or_else = li.children[j];
			

	// 		if(a_or_span_or_else.nodeName == "IMG")
	// 		{
	// 			a_or_span_or_else.src = "slika.jfif";
	// 		}
	// 	}


	// function count(selector)
	// {
	// 	return document.querySelectorAll(selector).length;
	// }
	// console.log(count("p"));

	//or 

	// console.log(document.querySelectorAll("p").length);


	// var name = document.querySelectorAll(".name")[0];
	// name.classList.add("red");
	// name.setAttribute("id","test");
	// name.style.color = "yellow";
	// name.style.fontsize = "50px";

	
	var name = document.querySelectorAll("h1")[0];

	var btn = document.querySelectorAll("button")[0];

	btn.addEventListener("click",function(){
		name.classList.toggle("show_name");
	});


}	





	