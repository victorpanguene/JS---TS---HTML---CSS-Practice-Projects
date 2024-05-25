const hours = document.getElementsByClassName("hours");
const minutes = document.getElementsByClassName("minutes");
const seconds = document.getElementsByClassName("seconds");

const getTime = () => {
  const currentTime = new Date();
  const hourUpdate = (hours.innerHTML = currentTime.minutes + 1);
  console.log(hourUpdate);
};
const pointsCounter = () => {};

console.log(hours[0].textContent + 1, minutes, seconds);
