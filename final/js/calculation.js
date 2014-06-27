function calculate() {
	'use strict';
	
	var total;
	var front = document.getElementById('front').value;  
    var back = document.getElementById('back').value;

	front = Math.abs(front);
	back = Math.abs(back);
	
	// calculation
	total = (front + back);
	
	// Display 
	document.getElementById('total').value = total;
	
	return false;

} 

function init() {
	'use strict';
	var theForm = document.getElementById('theForm');
	theForm.onsubmit = calculate;
} 

window.onload = init;