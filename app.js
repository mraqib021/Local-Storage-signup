


// function signup() {
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     console.log(email.value);
//     console.log(password.value);

//     localStorage.setItem("email", email.value);
//     localStorage.setItem("password", password.value);
//     alert("Your Facebook Account Has Been Create");
//     email.value = "";
//     password.value = "";
// }
// function login() {
//     let name = document.getElementById("name");
//     let pass = document.getElementById("pass");
//     console.log(name.value)
//     console.log(pass.value)
//     let email = localStorage.getItem("email");
//     let password = localStorage.getItem("password")
//     console.log(email)
//     console.log(password)
//     if (name.value == email && pass.value == password) {
//         alert("Your Account Login")
//         name.value = "";
//         pass.value = "";
//     }else if(name.value == " " || password.value == " " ){
//         alert("Invalid Password")
//         name.value = "";
//         pass.value = "";
//     }
//      else {
//         alert("Incorrect Password")
//         name.value = "";
//         pass.value = "";
//     }

// }

// var arr ;

// if(){

// }else{
//     arr = []
// }

function signup() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let userdetails = {
        name: email.value,
        password: password.value,
    }
    localStorage.setItem("userdetails", JSON.stringify(userdetails));
    if (email.value === "" && password.value === "") {
        alert("please Fill this Form")
    } else {
        window.location.href = ("index.html");
        alert("Your Facebook Account Has Been Create");
        email.value = "";
        password.value = "";
    }

}
function login() {
    let name = document.getElementById("name");
    let pass = document.getElementById("pass");
    var user = localStorage.getItem("userdetails")
    if (name.value === JSON.parse(user).name && pass.value === JSON.parse(user).password) {
        alert("Your Account Login")
        name.value = "";
        pass.value = "";
        window.location.href = ("home.html")
    } else if (name.value === "" || password.value === "") {
        alert("Invalid Password")
        name.value = "";
        pass.value = "";
    } else {
        alert("Incorrect Password")
        name.value = "";
        pass.value = "";
    }
}