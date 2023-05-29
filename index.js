
let inputEl3 = document.querySelector(".input3")
let inputEl4 = document.querySelector(".input4")
let inputEl5 = document.querySelector(".input5")
let inputEl6 = document.querySelector(".input6")
let errorM3 = document.querySelector(".errorM3")
let errorM4 = document.querySelector(".errorM4")
let errorM5 = document.querySelector(".errorM5")
let errorM6 = document.querySelector(".errorM5")
let button = document.querySelector(".btn1")
message = document.querySelector(".message")
messageText = document.querySelector(".message-text")
let myObj = {};

button.addEventListener("click", function (e) {
  e.preventDefault()
  signUp()
})

function signUp() {


    if (inputEl3.value === "") {
      errorM3.innerHTML = "please enter your school name"
      errorM3.classList.add("red")
    } else {
      errorM3.innerHTML = "";
      myObj.sname = inputEl3.value;
    }

    if (inputEl4.value === "") {
      errorM4.innerHTML = "please enter your email name"
      errorM4.classList.add("red")
    } else {
      errorM4.innerHTML = "";
      myObj.email = inputEl4.value
    }

    if (inputEl5.value === "") {
      errorM5.innerHTML = "please enter your password"
      errorM5.classList.add("red")
    } else {
      errorM5.innerHTML = "";
      myObj.password = inputEl5.value
    }

    if (Object.keys(myObj).length === 3){
      console.log(myObj)
      let objectItems = localStorage.getItem("myItems");
      let newestItems = objectItems ? JSON.parse(objectItems) : [];
      newestItems.push(myObj);
      localStorage.setItem("myItems", JSON.stringify(newestItems))

      successMessage("Thank you, Sign up succesful");
    }

  


}

function successMessage(e){
  messageText.textContent = e;
  message.classList.add("message");
  message.style.display = "block";


  setTimeout(function(){
    message.style.display = "none";
  }, 3000);
}
