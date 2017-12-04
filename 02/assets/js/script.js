let sHand = document.getElementById('seconds');
let mHand = document.getElementById('minutes');
let hHand = document.getElementById('hours');
let time = document.getElementById('time');

let setTheDate = function () {
  let date = new Date();
  let s, sOnly, sdeg, m, mdeg, h, hdeg;

  // Seconds settings
  s = date.getSeconds();
  sOnly = date.getTime()/1000;
  sdeg = (s/60)*360;
  sHand.style.transform = "rotate(" + sdeg + "deg)"

  // Minutes settings
  m = date.getMinutes();
  mdeg = ((m/60)*360) + ((s/60)*6);
  mHand.style.transform = "rotate(" + mdeg + "deg)"

  // Hours settings
  h = date.getHours();
  hdeg = ((h/12)*360) + ((m/60)*30);
  hHand.style.transform = "rotate(" + hdeg + "deg)"

  // Time div
  time.innerHTML = "Can't read analogic ? It's " + h + " : " + (date.getMinutes()<10?'0':'') + m + " : " + (date.getSeconds()<10?'0':'') + s;

  console.log(h + " : " + (date.getMinutes()<10?'0':'') + m + " : " + (date.getSeconds()<10?'0':'') + s);
}

setInterval(setTheDate, 1000);

document.addEventListener("DOMContentLoaded", setTheDate);
