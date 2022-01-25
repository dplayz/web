var myClock = document.getElementById('dateDisplay').innerText;
const milliseconds = myClock * 1000;
const dateObject = new Date(milliseconds)
const humanDateFormat = dateObject.toLocaleString("en-US", {timeZoneName: "short"})
console.log(humanDateFormat);
console.log (myClock);
window.onload = function() {
    document.getElementById("dateDisplay").innerText = humanDateFormat ;
  };