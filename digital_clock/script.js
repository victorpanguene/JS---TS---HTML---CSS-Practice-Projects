let hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

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
