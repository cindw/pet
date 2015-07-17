var user;
var lvl;
var hp;
var mp;
var str;
var def;
var spd;
var mun;

$(document).ready(function() {
    user = prompt("Enter your name.", "Name");
    if (user != null) {
	document.cookie = "username=" +username; 
	$("#content").append("Hello " + username + "!");
    }
});

console.log('cookie');
console.log(document.cookie);

var get_cookie = function(cookie) {
    var clist = document.cookie.split(';');
};

var set_user = function(user) {
    document.cookie = document.cookie + "user="+user;
}

var inc_lvl = function() {
    document.cookie
