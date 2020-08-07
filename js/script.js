
/*
$.getJSON('js/data.json', function(data){
console.log(data);
$("#demo").html("JUUUUHU");
var $secondChoice = $("#second-choice");
  $(data).each(function(i, hero){
	  $secondChoice.append("<option>" + hero.Name + "</option>");
  });
})
*/


  	

$.getJSON('js/yarns.json', function(data){
	for (s = 1; s < 5; s++) {
		var $yarn_selection = $("#yarn" + s);
		  $yarn_selection.append('<option selected value="base">Bitte auswählen</option>')
		  $(data).each(function(i, yarn){
			  $yarn_selection.append("<option>" + yarn.name + "</option>");
		  });
	};
});

sel = "#color" + s; 
$.getJSON('js/colors.json', function(data){
var $color_selection = $(sel);
  $color_selection.append('<option selected value="base">Bitte auswählen</option>')
  $(data).each(function(j, entry){
	  $color_selection.append("<option>" + entry.name + "</option>");
	  console.log("added " + entry.name + " to " + sel);
  });
});


var $amount_selection = $("#amount" + s);
  for (k = 0; k < 11; k++) {
  	$amount_selection.append("<option>" + k + "</option>");	
};

console.log("wait...");
setTimeout(function, 1000);


console.log("yeah")



