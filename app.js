//MODEL assign variables
let word1 = "";
let word2 = "";
let word3 = "";
let word4 = "";
let word5 = "";
const buttons = document.getElementsByTagName("button");

//VIEW render the view
view();
//sets the default html on the page
function view() {
  document.getElementById("app").innerHTML = /* html */ `
        <h1>Fill-in-the-Blanks</h1>
      <div class="textField">
        The <word1>${word1 || "____"}</word1> sorcerer sought the <word2>${
    word2 || "____"
  }</word2> artifact
        to unlock the <word3>${word3 || "____"}</word3> power within. But the
        <word4>${word4 || "____"}</word4> guardian stood in his way, wielding a
        <word5>${word5 || "____"}</word5> weapon.
      </div>

      <div class="words">
        <button class="b1">ambitious</button>
        <button class="b1">ruthless</button>
        <button class="b1">megalomaniac</button>
        <button class="b1">cunning</button>
        <button class="b1">calculating</button>
        <br />
        <button class="b2">ancient</button>
        <button class="b2">powerful</button>
        <button class="b2">mystical</button>
        <button class="b2">arcane</button>
        <button class="b2">legendary</button>
        <br />
        <button class="b3">hidden</button>
        <button class="b3">forbidden</button>
        <button class="b3">immense</button>
        <button class="b3">potent</button>
        <button class="b3">transformative</button>
        <br />
        <button class="b4">formidable</button>
        <button class="b4">fierce</button>
        <button class="b4">unyielding</button>
        <button class="b4">stalwart</button>
        <button class="b4">relentless</button>
        <br />
        <button class="b5">enchanted</button>
        <button class="b5">deadly</button>
        <button class="b5">legendary</button>
        <button class="b5">ancient</button>
        <button class="b5">powerful</button>
      </div>
        `;

  //finds buttons on page
  getButtons();
}

//CONTROLLER
//using if statemets to determine where the words should go
function setWord() {
  if (this.classList.contains("b1")) {
    word1 = this.textContent;
  } else if (this.classList.contains("b2")) {
    word2 = this.textContent;
  } else if (this.classList.contains("b3")) {
    word3 = this.textContent;
  } else if (this.classList.contains("b4")) {
    word4 = this.textContent;
  } else if (this.classList.contains("b5")) {
    word5 = this.textContent;
  }

  view();
}
//for loop to iterate through all the buttons on the page
function getButtons() {
  for (let button of buttons /* let i = 0; i < buttons.length; i++ */) {
    button.addEventListener("click", setWord);

    //checks if the word == button, and adds a class .pressed to that button
    if (button.classList.contains("b1") && word1 == button.textContent) {
      button.classList.add("pressed");
    } else if (button.classList.contains("b2") && word2 == button.textContent) {
      button.classList.add("pressed");
    } else if (button.classList.contains("b3") && word3 == button.textContent) {
      button.classList.add("pressed");
    } else if (button.classList.contains("b4") && word4 == button.textContent) {
      button.classList.add("pressed");
    } else if (button.classList.contains("b5") && word5 == button.textContent) {
      button.classList.add("pressed");
    } else button.classList.remove("pressed");
  }
}
// !NOT WOKRING
/*       function isPressed() {
        if (this.classList.contains("b1") && word1 == this.innerHTML) {
          this.classList.add("pressed");
        } else if (this.classList.contains("b2") && word2 == this.innerHTML) {
          this.classList.add("pressed");
        } else if (this.classList.contains("b3") && word3 == this.innerHTML) {
          this.classList.add("pressed");
        } else if (this.classList.contains("b4") && word4 == this.innerHTML) {
          this.classList.add("pressed");
        } else if (this.classList.contains("b5") && word5 == this.innerHTML) {
          this.classList.add("pressed");
        } else this.classList.remove("pressed"); */

/* this.classList.add("pressed");
        this.buttonIsPressed = true;
        currentButton = this.outerHTML; */
