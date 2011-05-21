/*
	Copyright (c) Art. Lebedev Studio | http://www.artlebedev.ru/
	Andrew Shitov | ash@design.ru	
	
	13.12.05;
	30.02.06

	HSV to RGB convertion algorithm with an example can be found
	at http://www.w3.org/TR/2003/CR-css3-color-20030514/#hsl-color
*/

var ColorTimer = null;
var CurrentColor = new Array();
var CountDown = true; // Math.floor (Math.random() + 0.5);

function hsv2rgb (h, s, v)
{
	h /= 360;
	s /= 100;
	v /= 100;

	var m2 = v <= 0.5 ? v * (s + 1) : v + s - v * s;
	var m1 = v * 2 - m2;
    var r = norm2hex (hue2rgb (m1, m2, h + 1/3));
    var g = norm2hex (hue2rgb (m1, m2, h));
    var b = norm2hex (hue2rgb (m1, m2, h - 1/3));
    return r + '' + g + '' + b;
}

function hue2rgb (m1, m2, h)
{
	if (h < 0) h = h + 1;
	if (h > 1) h = h - 1;
	if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
	if (h * 2 < 1) return m2;
	if (h * 3 < 2) return m1 + (m2 - m1) * (2/3 - h) * 6;
	return m1;
} 

function norm2hex (value)
{
	return dec2hex (Math.floor (255 * value));
}

function dec2hex (dec)
{
	var hexChars = "0123456789ABCDEF";
	var a = dec % 16;
	var b = (dec - a) / 16;
	hex = '' + hexChars.charAt (b) + hexChars.charAt (a);
	return hex;
}

function SetLogoColor (h, s, v)
{
	var logodiv = document.getElementById ('message-header');
	if (logodiv) logodiv.style.color = '#' + hsv2rgb (h, s, v);
}

function AlterColor()
{	
	CurrentColor.h = Math.floor (360 * Math.random());
	CurrentColor.s = 30 + Math.floor (70 * Math.random());
	CurrentColor.v = 30 + Math.floor (50 * Math.random());

	SetLogoColor (CurrentColor.h, CurrentColor.s, CurrentColor.v);
}

function InitColoredLogotype()
{
	CurrentColor.h = 356;
	CurrentColor.s = 100;
	//CurrentColor.v = 74;
	CurrentColor.v = 37;
	
	ColorTimer = setInterval (SlightlyAlterColor, 0);	
}

function SlightlyAlterColor()
{
	var x = Math.floor (10 * Math.random());
	if (x == 1) CurrentColor.v = MakeAStep (CurrentColor.v, 30, 80);
	else if (x == 2) CurrentColor.s = MakeAStep (CurrentColor.s, 50, 100);
	else CurrentColor.h = MakeAStep (CurrentColor.h, 0, 360);
	
	SetLogoColor (CurrentColor.h, CurrentColor.s, CurrentColor.v);
	clearInterval (ColorTimer);
	ColorTimer = setInterval (SlightlyAlterColor, 30);	
}

function MakeAStep (value, min, max)
{
	if (CountDown)
	{
		value--;
		if (value < min)
		{
			value = min;
			CountDown = !CountDown;
		}
	}
	else
	{
		value++;
		if (value > max)
		{
			value = max;
			CountDown = !CountDown;
		}
	}

	return value;
}

function ActivateCoolLogo()
{
	if (/MSIE/.test (navigator.appVersion) && parseFloat (navigator.appVersion.split("MSIE")[1]) < 5.5) return;
	var logodiv = document.getElementById ('ArtLebedevLogo');
	if (logodiv) logodiv.style.display = 'block';
}

InitColoredLogotype();