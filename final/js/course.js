function fillForm() {
	'use strict';
	
	var course = document.getElementById('course').value;
	var drivingran;
	var rentalcarts;
	var clubrental;
	var priceweek;
	var priceend;
	var women;
	var intermediate;
	var advanced;
	var ywomen;
	var yintermediate;
	var yadvnace;
	
	
	
	switch (course){
		
		case 'Golden Fox':
			drivingran = 'Yes';
			rentalcarts = 'Yes';
			clubrental = 'Yes';
			priceweek = '$49';
			priceend = '$59';
			women = '123';
			intermediate = '127';
			advanced = '137';
			ywomen = '5040';
			yintermediate = '6431';
			yadvnace = '6783';
			break;
			
		
		case 'Northville Hills':
			drivingran = 'Yes';
			rentalcarts = 'Yes';
			clubrental = 'Yes';
			priceweek = '$55';
			priceend = '$75';
			women = '117';
			intermediate = '124';
			advanced = '132';
			ywomen = '4956';
			yintermediate = '6193';
			yadvnace = '7003';
			break;
			
		case 'Tanglewood':
			drivingran = 'Yes';
			rentalcarts = 'Yes';
			clubrental = 'No';
			priceweek = '$48';
			priceend = '$58';
			women = '121';
			intermediate = '118';
			advanced = '138';
			ywomen = '5011';
			yintermediate = '5882';
			yadvnace = '7077';
			break;
			
		case 'Pheasant Run':
			drivingran = 'Yes';
			rentalcarts = 'Yes';
			clubrental = 'Yes';
			priceweek = '$25-$30';
			priceend = '$35-$50';
			women = '117';
			intermediate = '122';
			advanced = '142';
			ywomen = '5056';
			yintermediate = '6445';
			yadvnace = '6958';
			break;
			
		case 'Forest Akers':
			drivingran = 'Yes';
			rentalcarts = 'Yes';
			clubrental = 'Yes';
			priceweek = '$30';
			priceend = '$40';
			women = '123';
			intermediate = '129';
			advanced = '136';
			ywomen = '5251';
			yintermediate = '6413';
			yadvnace = '7003';
			break;
			
		case 'College Fields':
			drivingran = 'Yes';
			rentalcarts = 'Yes';
			clubrental = 'No';
			priceweek = '$18-$35';
			priceend = '$20-$39';
			women = '123';
			intermediate = '130';
			advanced = '134';
			ywomen = '4871';
			yintermediate = '6131';
			yadvnace = '6615';
			break;			
	}
	
	document.getElementById('drivingran').value = drivingran;
	document.getElementById('rentalcarts').value = rentalcarts;
	document.getElementById('clubrental').value = clubrental;
	document.getElementById('priceweek').value = priceweek;
	document.getElementById('priceend').value = priceend;
	document.getElementById('women').value = women;
	document.getElementById('intermediate').value = intermediate;
	document.getElementById('advanced').value = advanced;
	document.getElementById('ywomen').value = ywomen;
	document.getElementById('yintermediate').value = yintermediate;
	document.getElementById('yadvnace').value = yadvnace;
	
	return false;
	
}

function init(){
	'use strict';
	document.getElementById('courseForm').onsubmit = fillForm;
}

window.onload = init;