var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex');

function hexClock() {
  var time = new Date();
  var hours = (time.getHours()).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
  var hexColorStr = '#' + (hours * 3 ) + (minutes * 4) + (seconds * 5);

  clock.textContent = clockStr;
  hexColor.textContent = hexColorStr;
  document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 2000);