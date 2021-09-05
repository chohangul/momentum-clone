const clock = document.querySelector("#clock");
const nowClock = document.querySelector("#nowClock");
const christmasEveClock = document.querySelector("#christmasEveClock");

function makePad(time) {
  return String(time).padStart(2, "0");
}

function christmasClock() {
  const nowDate = new Date();
  const nowYear = nowDate.getFullYear();
  const nowDay = makePad(nowDate.getDate());
  const nowMonth = makePad(nowDate.getMonth() + 1);
  const nowHour = makePad(nowDate.getHours());
  const nowMinutes = makePad(nowDate.getMinutes());
  const nowSeconds = makePad(nowDate.getSeconds());
  const christmasEveDate = new Date(nowYear, 8, 2);
  const christmasEveMonth = makePad(christmasEveDate.getMonth() + 1);
  const christmasEveDay = makePad(christmasEveDate.getDate());
  const christmasEveHour = makePad(christmasEveDate.getHours());
  const christmasEveMinutes = makePad(christmasEveDate.getMinutes());
  const christmasEveSecond = makePad(christmasEveDate.getSeconds());
  const christmasEveDateGetTime = christmasEveDate.getTime();
  const nowDateGetTime = nowDate.getTime();
  const leftDay = Math.floor(
    (christmasEveDateGetTime - nowDateGetTime) / (1000 * 60 * 60 * 24)
  );
  const leftHours = String(
    23 + (christmasEveDate.getHours() - nowDate.getHours())
  ).padStart(2, "0");

  const leftMinutes = String(
    59 + (christmasEveDate.getMinutes() - nowDate.getMinutes())
  ).padStart(2, "0");

  const leftSeconds = String(
    60 + (christmasEveDate.getSeconds() - nowDate.getSeconds())
  ).padStart(2, "0");

  nowClock.innerText = `${nowYear}-${nowMonth}-${nowDay},  ${nowHour}h ${nowMinutes}m ${nowSeconds}s`;
  christmasEveClock.innerText = `${christmasEveDate.getFullYear()}-${christmasEveMonth}-${christmasEveDay},  ${christmasEveHour}h ${christmasEveMinutes}m ${christmasEveSecond}s`;
  clock.innerText = `${leftDay}d ${leftHours}h ${leftMinutes}m ${leftSeconds}s`;
}

christmasClock();
setInterval(christmasClock, 1000);
