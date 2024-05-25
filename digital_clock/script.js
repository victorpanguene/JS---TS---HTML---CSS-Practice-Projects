const hours = document.getElementsByClassName("hours");
const minutes = document.getElementsByClassName("minutes");
const seconds = document.getElementsByClassName("seconds");

const getTime = () => {
  const currentTime = new Date();
  const hourUpdate = currentTime.getHours();
  hours.textContent = hourUpdate.toString();
  console.log(hourUpdate);
};

getTime();
const pointsCounter = () => {
  const points = document.getElementsByClassName("show");
  console.log(points[1].className);
};
pointsCounter();

// setInterval(pointsCounter, 1000);
