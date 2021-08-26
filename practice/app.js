const title = document.querySelector(".hello h1");

console.log(title);

console.dir(title);

// title.style.color = "blue";

function handleTitleClick() {
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.style.color = "red";
  // console.log("wwwwwwww");
}
function handleMouseLeave() {
  title.style.color = "yellow";
  // console.log("wwwwwwww");
}
function handleWindowResize() {
  title.innerText = "You are resized";
}

// title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// window.onresize = handleWindowResize;
window.addEventListener("resize", handleWindowResize);
