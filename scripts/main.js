let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/xinhai.jpg") {
    myImage.setAttribute("src", "images/fufu.jpg");
  } else {
    myImage.setAttribute("src", "images/xinhai.jpg");
  }
};

let myButton = document.querySelector("button");
let boyButton = document.querySelector("#boy");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Beauties of " + myName;
}

if (!localStorage.getItem("name") || localStorage.getItem("name") === null) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Beauties of " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

boyButton.onclick = function () {
  alert("小宝贝真乖！")
};
