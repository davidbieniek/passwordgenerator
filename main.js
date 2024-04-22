let passwordBox = document.getElementById("password");
let generateBtn = document.getElementById("generateBtn");
let copy = document.getElementById("copy");

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!@#$%^&*()_+-={}[]|:;<>,.?/";

function passwordGenerator() {
  passwordBox.value = "";
  let random = "";

  for (let i = 0; i < 5; i++) {
    let randomLetters = letters[Math.floor(Math.random() * letters.length)];
    let randomSmallLetters =
      smallLetters[Math.floor(Math.random() * smallLetters.length)];
    let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    let randomSpecial = special[Math.floor(Math.random() * special.length)];

    let randomPassword =
      randomLetters + randomSmallLetters + randomNumbers + randomSpecial;

    random += randomPassword;
  }

  let shuffledPassword = shuffleGenerator(random.split("")).join("");

  passwordBox.value = shuffledPassword;
}

function shuffleGenerator(tab) {
  for (let i = tab.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tab[i], tab[j]] = [tab[j], tab[i]];
  }
  return tab;
}

function copyFunction() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
}

generateBtn.addEventListener("mouseover", (e) => {
  let x = e.pageX - generateBtn.offsetLeft;
  let y = e.pageY - generateBtn.offsetTop;

  generateBtn.style.setProperty("--x", x + "px");
  generateBtn.style.setProperty("--y", y + "px");
});
