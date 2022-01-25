var utcClock = document.getElementById('dateDisplay').innerText;
const dateObject = new Date(utcClock)
const localizedClock = dateObject.toLocaleString("en-US", {timeZoneName: "short"})
window.onload = function() {
    document.getElementById("dateDisplay").innerText = localizedClock ;
  };
console.log(utcClock); 
console.log(localizedClock);