const screen = document.querySelector(".screen");
let buttons = Array.from(document.getElementsByClassName("button"));

let currentExpression = "";

buttons.map((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    switch (buttonText) {
      case "clear":
        currentExpression = "";
        break;
      case "del":
        currentExpression = currentExpression.slice(0, -1);
        break;
      case "Enter":
        try {
          currentExpression = eval(currentExpression).toString();
        } catch (error) {
          currentExpression = "Error";
        }
        break;
      case "√":
        currentExpression = Math.sqrt(currentExpression);
        break;
      case "%":
        currentExpression = currentExpression / 100;
        break;
      case "cos":
        currentExpression = Math.cos(currentExpression);
        break;
      case "sin":
        currentExpression = Math.sin(currentExpression);
        break;
      case "tan":
        currentExpression = Math.tan(currentExpression);
        break;
      case "log":
        currentExpression = Math.log10(currentExpression);
        break;
      default:
        currentExpression += buttonText;
        break;
    }
    screen.textContent = currentExpression;
  });
});
