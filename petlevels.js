var username;
var lvl;
var hp;
var mp;
var str;
var def;
var spd;
var mun;

$(document).ready(function() {
    console.log(document.cookie);
    username = prompt("Enter your name.", "Name");
    if (username != null) {
	set_user(username);
	$("#content").append("Hello " + username + "!");
    }

    console.log(document.cookie);

});

var get_cookie = function(cookie) {
    var clist = document.cookie.split(';');
    console.log(clist);
    for ( var i = 0; i < clist.size; i++ )
	console.log(clist);
	console.log(clist[i]);
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
