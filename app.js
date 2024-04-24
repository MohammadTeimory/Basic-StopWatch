let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer = null;
let [sec, min, hours] = [0, 0, 0];
let displyTime = document.getElementById("displyTime");

function stopWatch() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hours++;
    }
  }

  let s = sec < 10 ? "0" + sec : sec;
  let m = min < 10 ? "0" + min : min;
  let h = hours < 10 ? "0" + hours : hours;

  displyTime.innerHTML = h + ":" + m + ":" + s;
}

start.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  [sec, min, hours] = [0, 0, 0];
  displyTime.innerHTML = "00:00:00";
});
