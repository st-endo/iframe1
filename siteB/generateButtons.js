function generateButtons() {
  let i = 1;

  const intervalId = setInterval(function () {
    if (i > 1000) {
      clearInterval(intervalId);
      return;
    }

    const button = document.createElement("button");
    button.id = "btn" + i;
    button.textContent = "btn" + i;
    document.body.appendChild(button);

    i++;
  }, 10);
}

export default generateButtons;
