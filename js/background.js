// 이미지로 하는 방식
// const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// // const bgImage = document.createElement("img");

// const bgImageSrc = `url(img/${chosenImage})`;

// console.log(bgImageSrc);

// // document.body.appendChild(bgImage);

// function ImgChange() {
//   document.body.style.backgroundImage = bgImageSrc;
// }

// ImgChange();

// 배경색으로 하는 방식 (챌린지 사용)
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

function colorNum() {
  let color = [];
  let i = 0;
  while (i < 3) {
    let n = Math.floor(Math.random() * colors.length);
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
  const bgColor3 = colors[color[2]];

  const deg = Math.random() * 360;

  body.style.background = `linear-gradient(${deg}deg, ${bgColor}, ${bgColor2}, ${bgColor3})`;
}
colorNum();
