var username;
var lvl;
var hp;
var mp;
var str;
var def;
var spd;
var mun;

$(document).ready(function() {
    username = prompt("Enter your name.", "Name");
    if (username != null) {
	set_user(username);
	$("#content").append("Hello " + username + "!");
    }
});

var get_cookie = function(cookie) {
    var clist = document.cookie.split("; ");
    console.log(clist.length);
    for ( var i = 0; i < clist.length; i++ ) {
	console.log(clist[i]);
	c = clist[i].split("=");
	console.log(c);
	if ( c[0] == cookie ) {
	    console.log(c[1]);
	    return c[1];
	}
	else {
	    return null
	}
    }
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
