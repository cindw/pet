var username;
var lvl = 1;


$(document).ready(function() {
    username = prompt("Enter your name.", "Name");
    if (username != null) {
	$("#content").append(username)
    }
});

