const nowTime = document.querySelector("#clock");

function clock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const sevenDay = String(date.toString()).slice(0, 3);
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  nowTime.innerText = `${year}-${month}-${day} ${sevenDay} ${hour}:${minutes}:${seconds}`;
}

clock();
setInterval(clock, 1000);
