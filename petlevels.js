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
	document.cookie = "username=" +username; 
	$("#content").append("Hello " + username + "!");
    }
});

console.log('cookie');
console.log(document.cookie);

var get_cookie = function(cookie) {
    var clist = document.cookie.split(';');
    for i in clist {
	if ( i == cookie ) {
	    break;
    }
}

var set_user = function(user) {
    document.cookie = document.cookie + "user="+user;
}

var inc_lvl = function() {
    document.cookie
