function consolerClass() {

	var ini = this;	
	this.mute = false;

	this.manual = function(txt, clr, bg, add, force) {
		var text = txt || "";
		var color = clr || "#333";
		var bgcolor = bg || "#ffffff";
		var additional = add || "";
		
		if (force == undefined)
			force = this.mute;

		if (!force)
			console.log('%c' + text, 'background: ' + bgcolor + '; color: ' + color + ";" + add);	
	}
	this.t = function(txt) {
		ini.manual(txt, "#000000");
	}
	this.blue = function(txt) {
		ini.manual("  " + txt + "  ", "white", "blue");
	}
	this.red = function(txt) {
		ini.manual(txt, "red", "#FFFFFF");
	}
	this.green = function(txt) {
		ini.manual(txt, "green", "#FFFFFF");
	}
	this.val = function(cap, val) {
		ini.caption(cap, val);
	}

	this.caption = function (cap, txt) {
		if (!this.mute)
			console.log(cap + ' : %c' + txt, 'color: blue; font-weight: bold;');
	}
	this.l = function(obj) {
		if (!this.mute)
			console.log(obj);
	}

	this.w = function(txt) {
		ini.manual(txt, "red", "#FFFFFF", "font-weight: bold;");
	}
	this.err = function(txt) {
		ini.manual(txt, "#FFFFFF", "red", "font-weight: bold;");
	}
	this.war = function(txt) {
		ini.manual(txt, "#000000", "yellow", "font-weight: bold;");
	}
	this.sign = function() {
		con.manual(" From @afynr to @darlaoct with :3 ", "#F37C06", "white", "font-size: xx-large; -webkit-text-stroke: 1px black; -moz-text-stroke: 1px black; text-stroke: 1px black; font-weight: bold;  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000;", false);
	}
}
var con = new consolerClass();

function toTitleCase(str)
{
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}