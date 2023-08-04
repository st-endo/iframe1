import boxData from "./boxData.js";

let boxes = {};

window.addEventListener("DOMContentLoaded", (event) => {
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.addEventListener("load", function () {
      const frameId = this.getAttribute("id");
      this.contentWindow.postMessage({ frameId, boxes: boxData }, "*");
    });
  });
});

window.addEventListener(
  "message",
  function (event) {
    const data = event.data;
    if (typeof data === "object" && data !== null && "frameId" in data) {
      const iframe = document.querySelector(`#${data.frameId}`);
      if (iframe) {
        if (data.action === "show" && "rect" in data && "box" in data) {
          createBox(iframe, data);
        } else if (data.action === "hide" && !boxes[data.boxId].mouseenter) {
          removeBox(data.boxId, 2);
        }
      }
    }
  },
  false
);

const createBox = (iframe, data) => {
  const box = document.createElement("div");
  box.style.width = `${data.box.width}px`;
  box.style.height = `${data.box.height}px`;
  box.style.background = data.box.background;
  box.style.position = "absolute";
  box.style.left = `${data.rect.right + iframe.offsetLeft}px`;
  box.style.top = `${data.rect.top + iframe.offsetTop}px`;
  box.style.overflow = "auto";
  box.style.whiteSpace = "pre-wrap";
  box.textContent = data.box.text;
  document.body.appendChild(box);

  box.addEventListener("mouseenter", () => {
    boxes[data.box.boxId].mouseenter = true;
  });
  box.addEventListener("mouseleave", function () {
    boxes[data.box.boxId].mouseenter = false;
    removeBox(data.box.boxId, 1);
  });
  if (boxes[data.box.boxId]?.obj) {
    removeBox(data.box.boxId, 3);
  }
  boxes[data.box.boxId] = { obj: box, mouseenter: false };
};

const removeBox = (boxId, num) => {
  boxes[boxId].obj?.remove();
  boxes[boxId].obj = null;
};
