function getUsername() {
    var username = localStorage.getItem("username");

    $('.main-container').html("<p> Seja bem vindo, " + username + "</p>")
}

$(document).ready(function() {
    getUsername();
}) 