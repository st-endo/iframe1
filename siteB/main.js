let boxes = [];

window.addEventListener(
  "message",
  function (event) {
    boxes = event.data.boxes;
  },
  false
);

document.body.addEventListener(
  "mouseover",
  function (event) {
    console.log(event);
    // イベントが発生した要素がボタンであるか確認
    if (event.target.tagName.toLowerCase() === "button") {
      // boxを取得
      const box = boxes.find((box) => box.target === "#" + event.target.id);
      if (box) {
        const rect = event.target.getBoundingClientRect();
        window.parent.postMessage(
          {
            action: "show",
            frameId: "frame1",
            rect: rect,
            box: box,
          },
          "*"
        );
      }
    }
  },
  false
);

document.body.addEventListener(
  "mouseout",
  function (event) {
    // イベントが発生した要素がボタンであるか確認
    if (event.target.tagName.toLowerCase() === "button") {
      const box = boxes.find((box) => box.target === "#" + event.target.id);
      if (box) {
        setTimeout(function () {
          window.parent.postMessage(
            {
              action: "hide",
              frameId: "frame1",
              boxId: box.boxId,
            },
            "*"
          );
        }, 100);
      }
    }
  },
  false
);
