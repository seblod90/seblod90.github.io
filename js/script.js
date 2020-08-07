
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
console.log(data);
var $yarn_selection = $("#yarn1");
  $yarn_selection.append('<option selected value="base">Bitte auswählen</option>')
  $(data).each(function(i, entry){
	  $yarn_selection.append("<option>" + entry.name + "</option>");
  });
})


$.getJSON('js/colors.json', function(data){
console.log(data);
var $color_selection = $("#color1");
  $color_selection.append('<option selected value="base">Bitte auswählen</option>')
  $(data).each(function(i, entry){
	  $color_selection.append("<option>" + entry.name + "</option>");
  });
})

var $amount_selection = $("#amount1");
  for (i = 0; i < 11; i++) {
  	$amount_selection.append("<option>" + i + "</option>");	
}