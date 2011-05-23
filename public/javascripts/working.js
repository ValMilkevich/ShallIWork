var currentTime = new Date();
var hour = currentTime.getHours()
if(currentTime.getDay() == 6 || currentTime.getDay() == 0){
	var message = "No"
	var subtitle = "Relax. It's weekend."
} else if(hour < 3){
	var message = "No"
	var subtitle = "Relax."
} else if( hour < 7 ) {
	var message = "No"
	var subtitle = "No sleep?"
} else if( hour >= 7 && hour < 13 ) {
	var message = "Yes"
	var subtitle = "May be coffee?"
} else if( hour >- 13 && hour < 15) {
	var message = "No"
	var subtitle = "Dinner?"
} else if( hour >- 15 && hour < 19) {
	var message = "Yes"
	var subtitle = "Do your job."
} else if( hour >= 19){
	var message = "No"
	var subtitle = "Relax."
} else {
	var message = "No"
	var subtitle = "What's happening?"
}

if(message == "No") {
	InitColoredLogotype();
}