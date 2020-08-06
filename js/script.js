$("#first-choice").change(function() {
	$("#demo").html("Hier gehts wohl");
	
	
	$.get( "index.html", function( data ) {
  		$( ".result" ).html( data );
  		alert( "Load was performed." );
	});


	$.getJSON("https://www.easyprogramming.net/heroes.json", function(data) {
		$("#demo").html("Na endlich!!!");
	}); 	
});


$.getJSON('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json', function(data){
console.log(data);
$("#demo").html("JUUUUHU");
var $secondChoice = $("#second-choice");
  $(data).each(function(i, hero){
	  $secondChoice.append("<option>" + hero.Name + "</option>");
  	
  	
  	$('#heroesBody').append($("<tr>")
    	.append($("<td>").append(hero.name))
      .append($("<td>").append(hero.superheroName))
      .append($("<td>").append(hero.city)));
  });
  
  
  
})
	.done(function(){
		alert("Completed");
	})
	.fail(function(e){
		console.log('error:');
		console.error(e);
	})
	.always(function(){
		alert("always runs");
	});