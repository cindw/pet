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

    console.log(document.cookie);

});

var get_cookie = function(cookie) {
    var clist = document.cookie.split(';');
    for ( var i = 0; i < clist.size; i++ ){
    }
};

var set_user = function(user) {
    document.cookie = document.cookie + "user="+user;
};

var inc_lvl = function() {
    document.cookie;
};

var clear = funtion() {
    document.cookie = ""
};
