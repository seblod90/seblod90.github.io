
for (s = 1; s <= 5; s++) {

	$.getJSON('js/yarns.json', function(data){
	console.log(data);
	var $yarn_selection = $("#yarn" + s);
	  $yarn_selection.append('<option selected value="base">Bitte auswählen</option>')
	  $(data).each(function(i, entry){
		  $yarn_selection.append("<option>" + entry.name + "</option>");
	  });
	})
	
	
	$.getJSON('js/colors.json', function(data){
	console.log(data);
	var $color_selection = $("#color" + s);
	  $color_selection.append('<option selected value="base">Bitte auswählen</option>')
	  $(data).each(function(i, entry){
		  $color_selection.append("<option>" + entry.name + "</option>");
	  });
	})
	
	var $amount_selection = $("#amount" + s);
	  for (i = 0; i < 11; i++) {
		$amount_selection.append("<option>" + i + "</option>");	
	}

}