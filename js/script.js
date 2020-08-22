
// Not possible to loop over all getJSON because asynchronus appearance
var rows = 5;

// Yarn selection
$.getJSON('js/yarns.json', function(data){
	for (s = 1; s <= rows; s++) {
		var $yarn_selection = $("#yarn" + s);
		  $yarn_selection.append('<option selected value="base">Garn wählen</option>')
		  $(data).each(function(i, yarn){
			  $yarn_selection.append("<option>" + yarn.name + "</option>");
		  });
	};
});

// Color selection
$.getJSON('js/colors.json', function(data){
	for (s = 1; s <= rows; s++) {
		var $color_selection = $("#color" + s);
		  $color_selection.append('<option selected value="base">Farbe wählen</option>')
		  $(data).each(function(j, entry){
			  $color_selection.append("<option>" + entry.name + "</option>");
		  });
	};
});

// Amount selection
for (s = 1; s <= rows; s++) {
	var $amount_selection = $("#amount" + s);
	$amount_selection.append("<option>Anzahl wählen</option>");	
	for (k = 0; k < 11; k++) {
		$amount_selection.append("<option>" + k + "</option>");	
	};
}

$('#yarn1').on('change', function() {
	document.querySelector("#price1").innerHTML = this.selectedIndex;
});