let foods = document.getElementById("foods");
let dishs = document.getElementById("dishs");
let orders = document.getElementById("orders");
let trackBtn = document.getElementById("trackBtn");

foods.addEventListener("click",function () {
    foods.style.color="red";
    orders.style.color="white";
    dishs.style.color="white";
})
dishs.addEventListener("click",function () {
    dishs.style.color="red";
    orders.style.color="white";
    foods.style.color="white";
})
orders.addEventListener("click",function () {
    orders.style.color="red";
    foods.style.color="white";
    dishs.style.color="white";
})

let logBtn = document.getElementById("logBtn");
logBtn.addEventListener("click",function () {
    document.querySelector(".loginpage").style.display = "block";
})

let logged = document.getElementById("loggedBtn");
logged.addEventListener("click", function() {
    let email = document.getElementById("name");
    let pass = document.getElementById("pass");

    if (email.value == "" ) {
        alert("Please Enter Email")
    }
    else if(pass.value == "") 
    {
        alert("Please Enter Password")
    }
    else{
        alert("You Loged In");
        document.querySelector(".loginpage").style.display = "none";
    }
})

trackBtn.addEventListener("click",function(){
    document.querySelector(".tracking").style.display="flex";
    document.getElementById("food").style.display="none";
    document.getElementById("dish").style.display="none";
    document.getElementById("order").style.display="none";
    document.querySelector(".main").style.display="none";
    document.getElementById("card2").style.display="none";
})
