
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

for (s = 1; s < 5; s++) {
  	

$.getJSON('js/yarns.json', function(data){
var $yarn_selection = $("#yarn" + s);
  $yarn_selection.append('<option selected value="base">Bitte auswählen</option>')
  $(data).each(function(i, entry){
	  $yarn_selection.append("<option>" + entry.name + "</option>");
  });
});


$.getJSON('js/colors.json', function(data){
var $color_selection = $("#color" + s);
  $color_selection.append('<option selected value="base">Bitte auswählen</option>')
  $(data).each(function(i, entry){
	  $color_selection.append("<option>" + entry.name + "</option>");
  });
});

console.log("#amount" + s)

var $amount_selection = $("#amount" + s);
  for (i = 0; i < 11; i++) {
  	$amount_selection.append("<option>" + i + "</option>");	
}

}