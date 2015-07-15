var username = prompt("Enter your name.", "Name");
var lvl = 1;


document.ready(function() {
    if (username != null) {
	console.log(username);
	alert("Welcome " + username + "!");
    }
    console.log(username);
});

