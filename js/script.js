
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


var rows = 5;

$.getJSON('js/yarns.json', function(data){
	for (s = 1; s <= rows; s++) {
		var $yarn_selection = $("#yarn" + s);
		  $yarn_selection.append('<option selected value="base">Garn wählen</option>')
		  $(data).each(function(i, yarn){
			  $yarn_selection.append("<option>" + yarn.name + "</option>");
		  });
	};
});


$.getJSON('js/colors.json', function(data){
	for (s = 1; s <= rows; s++) {
		var $color_selection = $("#color" + s);
		  $color_selection.append('<option selected value="base">Farbe wählen</option>')
		  $(data).each(function(j, entry){
			  $color_selection.append("<option>" + entry.name + "</option>");
			  console.log("added " + entry.name + " to " + sel);
		  });
	};
});

for (s = 1; s <= rows; s++) {
	var $amount_selection = $("#amount" + s);
	$amount_selection.append("<option>Anzahl</option>");	
	for (k = 0; k < 11; k++) {
		$amount_selection.append("<option>" + k + "</option>");	
	};
}