

function verify() {
    var user = $('#username').val();
    var password = $('#password').val();

    if(user == "alison" && password == "1234") {
        window.location.href = "welcome.html";
        localStorage.setItem("username", user);
    }else {
        alert("Login ou senha incorretos!")
    }
}
