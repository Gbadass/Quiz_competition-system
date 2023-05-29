let inputEl4 = document.querySelector(".input4")
let inputEl5 = document.querySelector(".input5")
let button = document.querySelector(".btn1")
let error1 = document.querySelector(".error1")
let error2 = document.querySelector(".error2")
message = document.querySelector(".message")
messageText = document.querySelector(".message-text")
errorLog = document.querySelector(".error-login")

button.addEventListener("click", function (e) {
  e.preventDefault()
  signIn()
})

function signIn() {
  if (inputEl4.value === "") {
    error1.innerHTML = "please enter your email"
    error1.classList.add("red")
  } else {
    error1.innerHTML = "";
  }

  if (inputEl5.value === "") {
    error2.innerHTML = "please enter your password"
    error2.classList.add("red")
  } else {
    error2.innerHTML = "";
  }

  let localStore = localStorage.getItem("allItems");
  let storage = localStore ? JSON.parse(localStore) : [];
  let newStore = storage.find((value) => {
    return value.email == inputEl4.value && value.password == inputEl5.value
  });

  if (newStore) {
    console.log(newStore)
    localStorage.setItem("loggedInUser", JSON.stringify(newStore));
    messageText.textContent = "Login Succesful";
    message.classList.add("message");
    message.style.display = "block";


    setTimeout(function () {
      window.location.href = "home.html"
    }, 3000);
  } else {
    errorLog.innerHTML = "invalid log in"
    errorLog.classList.add("red")
    // alert("invalid login details")
  }
}
