document.addEventListener("DOMContentLoaded", function () {
  populateSchoolOptions();
  retrieveUsersId()
});

function populateSchoolOptions() {
  let schoolDropdown = document.querySelector(".input03");
  let schoolNames = JSON.parse(localStorage.getItem("myItems")) || [];

  schoolDropdown.innerHTML = '<option hidden value="">Choose Your School</option>';

  schoolNames.forEach(function (school) {
    let option = document.createElement("option");
    option.value = school.sname;
    option.textContent = school.sname;
    schoolDropdown.appendChild(option);
  });
}

function retrieveUsersId() {
  let storedItems = localStorage.getItem("allItems");
  if (storedItems) {
    let items = JSON.parse(storedItems);
    if (items.length > 0) {
      let lastItem = items[items.length - 1];
      usersId = lastItem.id + 1;
    }
  }
}


let inputEl1 = document.querySelector(".input01")
let inputEl2 = document.querySelector(".input02")
let errorM1 = document.querySelector(".errorM1")
let errorM2 = document.querySelector(".errorM2")
let inputEl3 = document.querySelector(".input03")
let inputEl4 = document.querySelector(".input04")
let inputEl5 = document.querySelector(".input05")
let inputEl6 = document.querySelector(".input6")
let errorM3 = document.querySelector(".errorM3")
let errorM4 = document.querySelector(".errorM4")
let errorM5 = document.querySelector(".errorM5")
let errorM6 = document.querySelector(".errorM5")
let button = document.querySelector(".btn1")
message = document.querySelector(".message")
messageText = document.querySelector(".message-text")
let myObjs = {};
let usersId = 1;

button.addEventListener("click", function (e) {
  e.preventDefault()
  signUp()
})

function signUp() {

    if (inputEl1.value === "") {
      errorM1.innerHTML = "please enter your first name"
      errorM1.classList.add("red")
    } else {
      errorM1.innerHTML = "";
      myObjs.fname = inputEl1.value;
    }

    if (inputEl2.value === "") {
      errorM2.innerHTML = "please enter your last name"
      errorM2.classList.add("red")
    } else {
      errorM2.innerHTML = "";
      myObjs.lname = inputEl2.value;
    }

    if (inputEl3.value === "") {
      errorM3.innerHTML = "please enter your school name"
      errorM3.classList.add("red")
    } else {
      errorM3.innerHTML = "";
      myObjs.sname = inputEl3.value;
    }

    if (inputEl4.value === "") {
      errorM4.innerHTML = "please enter your email name"
      errorM4.classList.add("red")
    } else {
      errorM4.innerHTML = "";
      myObjs.email = inputEl4.value
    }

    if (inputEl5.value === "") {
      errorM5.innerHTML = "please enter your password"
      errorM5.classList.add("red")
    } else {
      errorM5.innerHTML = "";
      myObjs.password = inputEl5.value
    }

    if (Object.keys(myObjs).length === 5){
      console.log(myObjs)
      myObjs.id = usersId;
      usersId++;
      let objectItems = localStorage.getItem("allItems");
      let newestItems = objectItems ? JSON.parse(objectItems): [];
      newestItems.push(myObjs);
      localStorage.setItem("allItems", JSON.stringify(newestItems))

      successMessage("Sign Up Succesful, Thank you")
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
