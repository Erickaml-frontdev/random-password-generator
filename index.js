const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");
let copyPasswordOne = document.getElementById("copypassword1")
let copyPasswordTwo = document.getElementById("copypassword2")
let lengthPassword = 15;

function generate() {
  passwordOne.value = generateRandomPassword();
  passwordTwo.value = generateRandomPassword();
  copyPasswordOne.textContent = "Copier"
  copyPasswordTwo.textContent = "Copier"

  function getRandomChar() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < lengthPassword; i++) {
      randomPassword += getRandomChar();
    }
    return randomPassword;
  }
}

function selectPassword1() {
  passwordOne.select()
  navigator.clipboard.writeText(passwordOne.value)
  copyPasswordOne.textContent = "Copié"
}
function selectPassword2() {
  passwordTwo.select()
  navigator.clipboard.writeText(passwordTwo.value)
  copyPasswordTwo.textContent = "Copié"
}
