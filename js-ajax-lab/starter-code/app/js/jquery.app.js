// appends cats to page

var appendCats = 
	$.ajax({
	dataType: "json",
	url: "https://ga-cat-rescue.herokuapp.com/api/cats",
	success: function (data){
	event.preventDefault();
	var list = $("ul#cats");
		for (var i=0; i<data.length; i++){
			list.append("<li>"+data[i].name+" | "+ "'"+data[i].note+"'"+"</li>");
		}
	}
});


// adds cats 
var addCats =
	$("form#new-cat").submit(function(){
	event.preventDefault();
	var newName = $("#cat-name").val();
	var newNote = $("#cat-note").val();
	var list = $("ul#cats");
	list.append("<li>" + newName + " | " + "'" +newNote +"'"+ "</li>");
});