var currentTime = new Date();
var hour = currentTime.getHours()
if(currentTime.getDay() == 6 || currentTime.getDay() == 0){
	var message = translate("false")
	var subtitle = translate("relax_its_weekend")
	var work = false
} else if( currentTime.getDay() == 5 && hour >= 19 ) {
	var message = translate("no_no")
	var subtitle = translate("friday_relax")
	var work = false
} else if(hour < 3){
	var message = translate("false")
	var subtitle = translate("relax")
	var work = false
} else if( hour < 7 ) {
	var message = translate("false")
	var subtitle = translate("no_sleep")
	var work = false
} else if( hour >= 7 && hour < 13 ) {
	var message = translate("true")
	var subtitle = translate("may_be_coffee")
	var work = true
} else if( hour >- 13 && hour < 15) {
	var message = translate("false")
	var subtitle = translate("dinner")
	var work = false
} else if( hour >- 15 && hour < 19) {
	var message = translate("true")
	var subtitle = translate("do_your_job")
	var work = true
} else if( hour >= 19){
	var message = translate("false")
	var subtitle = translate("relax")
	var work = false
} else {
	var message = translate("false")
	var subtitle = translate("whats_up")
	var work = false
}

if(message == translate("false")) {
	InitColoredLogotype();
}

if(message == translate("no_no")) {
	InitColoredLogotype(15);
}

if( work ){
	var proverb = translate('work_quote')
	var proverb_author = translate('work_quote_author')
} else {
	var proverb = translate('relax_quote')
	var proverb_author = translate('relax_quote_author')
}