const nowTime = document.querySelector("#clock");

function clock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  nowTime.innerText = `${hour}:${minutes}:${seconds}`;
}

clock();
setInterval(clock, 1000);
