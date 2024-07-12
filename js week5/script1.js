// Assignments For Lessons 86 To 93

// Assignment 1
console.log("Assignment 1");
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
document.getElementsByTagName("div")[0];
console.log(document.querySelector("div"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("div[name = js]"));
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll("div[name = js]")[0]);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);

/*----------------------------------------------------------------------------- */
// Assignment 2
for (let i = 0; i <= 10; i++) {
    let imgs = document.images[i];
    imgs.setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
    imgs.setAttribute("alt", "Elzero Logo");
}

/*----------------------------------------------------------------------------- */
// Assignment 3
let myInput = document.querySelector("form input[type=number]");
let dollar = document.querySelector("form .dollar");
let pound = document.querySelector("form .pound");

myInput.oninput = () => {
    if(myInput.value >= 0){
    dollar.innerHTML = myInput.value;
    pound.innerHTML = (myInput.value * 15.6).toFixed(2);
    } else {
        dollar.innerHTML = 0;
        pound.innerHTML = 0;
    }
};

/*----------------------------------------------------------------------------- */
// Assignment 4
let firstDiv = document.querySelector(".one");
let secDiv = document.querySelector(".two");
let secTitle = secDiv.title;
let secText = secDiv.innerHTML;

// SwitchAttributes
secDiv.title = firstDiv.title;
firstDiv.title = secTitle;

// Switch Content
secDiv.innerHTML = `${firstDiv.innerHTML} ${document.getElementsByTagName("div").length}`; // length = 2
firstDiv.innerHTML = secText;

/*----------------------------------------------------------------------------- */
// Assignment 5
for (let i = 0; i < document.images.length; i++) {
    if(document.images[i].hasAttribute("alt")) {
        document.images[i].setAttribute("alt", "Old");
    } else {
        document.images[i].setAttribute("alt", "Elzero New");
    }
}

/*----------------------------------------------------------------------------- */
// Assignment 6
let type = document.querySelector("select");
let theResult = document.getElementsByClassName("results")[0];
let number = document.querySelector('[name="elements"]');
let text = document.querySelector('[name="texts"]');
document.forms[0].onsubmit = function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  let section = document.createElement("section");
  let divText = document.createTextNode(text.value);
  let sectionText = document.createTextNode(text.value);
  div.setAttribute("class", "box");
  div.setAttribute("title", "Element");
  section.setAttribute("class", "box");
  section.setAttribute("title", "Element");
  div.appendChild(divText);
  section.appendChild(sectionText);
  if (type.value == "Div") {
    for (let i = 0; i < Number(number.value); i++) {
      div.setAttribute("id", `id-${i + 1}`);
      theResult.appendChild(div.cloneNode(true));
    }
  } else {
    for (let i = 0; i < Number(number.value); i++) {
      section.setAttribute("id", `id-${i + 1}`);
      theResult.appendChild(section.cloneNode(true));
    }
  }
};