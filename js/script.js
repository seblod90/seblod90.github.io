
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
// console.log(data);
var $yarn_selection = $("#yarn1");
  $(data).each(function(i, entry){
	  $yarn_selection.append("<option>" + entry.name + "</option>");
  });
})