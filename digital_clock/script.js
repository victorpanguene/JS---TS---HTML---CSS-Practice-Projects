let hours = document.getElementsByClassName("hours");
const minutes = document.getElementsByClassName("minutes");
const seconds = document.getElementsByClassName("seconds");

const getTime = () => {
  const currentTime = new Date();
  const hourUpdate = currentTime.getHours();
  const minutesUpdate = currentTime.getMinutes();
  const secondsUpdate = currentTime.getSeconds();
  const time = hours.innerHTML;
  console.log("🚀 ~ getTime ~ time:", time);
  console.log("🚀 ~ getTime ~ hourUpdate:", hourUpdate);

  return hourUpdate;
};

getTime();

// setInterval(pointsCounter, 1000);
