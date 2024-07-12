// Assignments For Lessons 94 To 101

// Assignment 1
window.onload = () => {
    for (let i = 0; i < document.links.length; i++) {
        if (document.links[i].classList.contains("open") && document.links[i].innerHTML === "Elzero") {
            document.links[i].click();
        }
    }
};

/*----------------------------------------------------------------------------- */
// Assignment 2
let currEle = document.querySelector("div[title=Current]");
let classesDiv = document.querySelector(".classes-list div");
let addClass = document.querySelector(".classes-to-add");
let remClass = document.querySelector(".classes-to-remove");

function classL(element, result) {
  if (element.classList.value === "") {
    result.innerHTML = "No Classes To Show";
  } else {
    element.classList.value
      .split(" ")
      .sort()
      .map((c) => {
        let myClass = document.createElement("span");
        myClass.innerHTML = c;
        result.append(myClass);
      });
  }
}

classL(currEle, classesDiv);

addClass.onblur = () => {
  let wordsAdd = addClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsAdd.length; i++) {
    currEle.classList.add(wordsAdd[i]);
  }
  addClass.value = "";
  classesDiv.innerHTML = "";
  classL(currEle, classesDiv);
};

remClass.onblur = () => {
  let wordsRem = remClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsRem.length; i++) {
    currEle.classList.remove(wordsRem[i]);
  }
  remClass.value = "";
  classesDiv.innerHTML = "";
  classL(currEle, classesDiv);
};

/*----------------------------------------------------------------------------- */
// Assignment 3
document.getElementsByTagName("p")[0].remove();

let myElement = document.querySelector(".our-element");
let myFirst = myElement.cloneNode(true);
let myLast = myElement.cloneNode(true);

function elemAttr(ele, word) {
    ele.className = word.toLowerCase();
    ele.title = `${word} Element`;
    ele.setAttribute("data-value", word);
    ele.innerHTML = word;
}

elemAttr(myFirst, "Start");
elemAttr(myLast, "End");

myElement.before(myFirst);
myElement.after(myLast);

/*----------------------------------------------------------------------------- */
// Assignment 4
console.log(document.querySelector("div span").nextSibling.nextSibling.nextSibling.textContent.trim());

/*----------------------------------------------------------------------------- */
// Assignment 5
document.addEventListener("click", (e) => {
    console.log(`This Is ${e.target.tagName}`);
});