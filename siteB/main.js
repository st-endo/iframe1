let boxes = [];

window.addEventListener(
  "message",
  function (event) {
    boxes = event.data.boxes;

    boxes.forEach((box) => {
      const specialElement = document.querySelector(box.target);
      if (specialElement) {
        specialElement.addEventListener("mouseenter", function () {
          const rect = specialElement.getBoundingClientRect();
          window.parent.postMessage(
            {
              action: "show",
              frameId: event.data.frameId,
              rect: rect,
              box: box,
            },
            "*"
          );
        });

        specialElement.addEventListener("mouseleave", function () {
          setTimeout(function () {
            window.parent.postMessage(
              {
                action: "hide",
                frameId: event.data.frameId,
                boxId: box.boxId,
              },
              "*"
            );
          }, 100);
        });
      }
    });
  },
  false
);
