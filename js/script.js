
for (s = 0; i < 11; s++) {
var s = 1;
	$.getJSON('js/yarns.json', function(data){
	//console.log(data);
	var $yarn_selection = $("#yarn" + s);
	  $yarn_selection.append('<option selected value="base">Bitte Garn wählen</option>')
	  $(data).each(function(i, entry){
		  $yarn_selection.append("<option>" + entry.name + "</option>");
	  });
	})
	
	
	$.getJSON('js/colors.json', function(data){
	var $color_selection = $("#color" + s);
	  $color_selection.append('<option selected value="base">Bitte Farbe wählen</option>')
	  $(data).each(function(i, entry){
		  $color_selection.append("<option>" + entry.name + "</option>");
	  });
	})
	
	var selector = "#amount" + s;
	var $amount_selection = $(selector);
	  for (i = 0; i < 11; i++) {
		$amount_selection.append("<option>" + i + "</option>");	
	}

}