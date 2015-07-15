var username = prompt("Enter your name.", "Name");
var lvl = 1;


$(document).ready(function() {
    if (username != null) {
	$("#content").append(username)
    }
});

