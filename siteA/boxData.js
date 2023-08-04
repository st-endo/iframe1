// boxData.js
const boxData = Array.from({ length: 1000 }, (v, i) => {
  return {
    target: `#btn${i + 1}`,
    width: Math.random() * 200 + 100, // 100 to 300
    height: Math.random() * 200 + 100, // 100 to 300
    background: ["aqua", "black", "red", "green", "yellow", "orange", "purple"][
      Math.floor(Math.random() * 7)
    ],
    text: Array.from(
      { length: Math.floor(Math.random() * 5) + 1 },
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
