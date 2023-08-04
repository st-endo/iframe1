// boxData.js
const boxData = Array.from({ length: 1000 }, (v, i) => {
  return {
    boxId: `box${i + 1}`,
    target: `#btn${i + 1}`,
    width: Math.random() * 200 + 100, // 100 to 300
    height: Math.random() * 200 + 100, // 100 to 300
    background: ["aqua", "red", "green", "yellow", "orange", "white", "pink"][
      Math.floor(Math.random() * 7)
    ],
    text: Array.from(
      { length: Math.floor(Math.random() * 170) + 30 },
      () =>
        [
          "hoge",
          "apple",
          "computer",
          "dog",
          "flower",
          "linux",
          "windows",
          "rust",
          "watch",
          "nice",
          "hello",
          "world",
        ][Math.floor(Math.random() * 12)]
    ).join(" "),
  };
});

export default boxData;
