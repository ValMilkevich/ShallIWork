var currentTime = new Date();
var hour = currentTime.getHours()
if(currentTime.getDay() == 6 || currentTime.getDay() == 0){
	var message = translate("false")
	var subtitle = translate("relax_its_weekend")
} else if(hour < 3){
	var message = translate("false")
	var subtitle = translate("relax")
} else if( hour < 7 ) {
	var message = translate("false")
	var subtitle = translate("no_sleep")
} else if( hour >= 7 && hour < 13 ) {
	var message = translate("true")
	var subtitle = translate("may_be_coffee")
} else if( hour >- 13 && hour < 15) {
	var message = translate("false")
	var subtitle = translate("dinner")
} else if( hour >- 15 && hour < 19) {
	var message = translate("true")
	var subtitle = translate("do_your_job")
} else if( hour >= 19){
	var message = translate("false")
	var subtitle = translate("relax")
} else {
	var message = translate("false")
	var subtitle = translate("whats_up")
}

if(message == translate("false")) {
	InitColoredLogotype();
}