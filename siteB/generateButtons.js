function generateButtons() {
  for (let i = 1; i <= 1000; i++) {
    const button = document.createElement("button");
    button.id = "btn" + i;
    button.textContent = "btn" + i;
    document.body.appendChild(button);
  }
}

export default generateButtons;
