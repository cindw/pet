$(document).ready(function() {
    user = prompt("Enter your name.", "Name");
    if (user != null) {
	document.cookie = "username=" +username; 
	$("#content").append("Hello " + username + "!");
    }
});

console.log('cookie');
console.log(document.cookie);

var set_user = function(user) {
    document.cookie = document.cookie + "user="+user;
}

var inc_lvl = function() {
    document.cookie
