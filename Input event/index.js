const usernameInput = document.querySelector("#userName");
const form = document.querySelector("#nameForm");
usernameInput.addEventListener("input", (event) => {
  const inputText = event.target.value;
  let filteredText = "";
  for (let i = 0; i < inputText.length; i += 1) {
    const char = inputText[i];
    if (char >= "0" && char <= "9") {
      continue;
    }
    filteredText += char;
  }
  usernameInput.value = filteredText;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = usernameInput.value.trim();
  if (userName === "") {
    alert("Please enter your name.");
  } else {
    alert(`Hello, ${userName}!`);
  }
});
