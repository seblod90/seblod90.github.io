
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
var $yarn_selection = $("#color1");
  $yarn_selection.append('<option selected value="base">Bitte auswählen</option>')
  $(data).each(function(i, entry){
	  $yarn_selection.append("<option>" + entry.name + "</option>");
  });
})

var $yarn_selection = $("#amount1");
  $yarn_selection.append('<option selected value="base">Bitte auswählen</option>')
  for (i = 0; i < 10; i++) {
  	$yarn_selection.append("<option>" + i.toString() + "</option>");	
}