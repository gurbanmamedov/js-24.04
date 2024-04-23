document.querySelector("#field").addEventListener("click", (event) => {
  const ball = document.querySelector("#ball");
  const field = document.querySelector("#field");
  let mouseX = event.clientX - field.offsetLeft;
  let mouseY = event.clientY - field.offsetTop;
  let ballX = mouseX - ball.offsetWidth / 2;
  let ballY = mouseY - ball.offsetHeight / 2;
  if (ballX < 0) {
    ballX = 0;
  } else if (ballX > field.offsetWidth - ball.offsetWidth) {
    ballX = field.offsetWidth - ball.offsetWidth;
  }

  if (ballY < 0) {
    ballY = 0;
  } else if (ballY > field.offsetHeight - ball.offsetHeight) {
    ballY = field.offsetHeight - ball.offsetHeight;
  }

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
});
