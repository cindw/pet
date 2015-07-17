var x;
var y;

var username;
var lvl;
var hp;
var mp;
var str;
var def;
var spd;
var mun;

$(document).ready(function() {
    if ( get_cookie("user") == null ) {
	username = prompt("Enter your name.", "Name");

	if ( username != null ) {
	    set_user(username);
	}
    }

    $("#content").append("Hello " + get_cookie("user") + "!");
});

var get_cookie = function(cookie) {
    var clist = document.cookie.split("; ");

    for ( var i = 0; i < clist.length; i++ ) {
	c = clist[i].split("=");
	if ( c[0] == cookie ) {
	    return c[1];
	}
    }
    return null;
};

var set_user = function(user) {
    document.cookie = "user="+user;
};

var inc_lvl = function() {
    document.cookie;
};

var clear_cookies = function() {
    document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    console.log(document.cookie);
};

var getMouse = function() {
    x = e.offsetX;
    y = e.offsetY;
    console.log(x + ", " + y);
}

window.setInterval(getMouse(),100);
