function updateClock() {
  const currentHours = new Date();

  let hours = currentHours.getHours();
  let minutes = currentHours.getMinutes();
  let seconds = currentHours.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('clock').textContent =
  hours + ' : ' + minutes + ' : ' + seconds;
}

setInterval(updateClock, 1000);