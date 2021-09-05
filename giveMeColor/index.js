const colorBtn = document.querySelector("#colorBtn");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.querySelector("body");

// 중복 색이 존재하는 방식 //
// function randomChangeBGColor() {
//   const colorNum = Math.floor(Math.random() * colors.length);
//   const colorNum2 = Math.floor(Math.random() * colors.length);

//   // const bgColor = colors[colorNum];
//   // const bgColor2 = colors[colorNum2];
//   // body.style.background = `linear-gradient(90deg, ${bgColor}, ${bgColor2})`;
//   // console.log(body.style.backgroundColor);
// }

// randomChangeBGColor();
// colorBtn.addEventListener("click", randomChangeBGColor);

// 중복색 없이 하는 방식//
function colorNum() {
  let color = [];
  let i = 0;
  while (i < 2) {
    let n = Math.floor(Math.random() * colors.length) + 1;
    if (!sameNum(n)) {
      color.push(n);
      i++;
    }
  }
  function sameNum(n) {
    for (var i = 0; i < color.length; i++) {
      if (n === color[i]) {
        return true;
      }
    }
    return false;
  }
  const bgColor = colors[color[0]];
  const bgColor2 = colors[color[1]];
  body.style.background = `linear-gradient(90deg, ${bgColor}, ${bgColor2})`;
}
colorNum();
colorBtn.addEventListener("click", colorNum);
