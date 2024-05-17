// Getting all elements from the HTML document
const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

console.log(
  `Seconds: ${secondsHand}, Minutes: ${minutesHand}, Hours: ${hoursHand}`
);

// Get the time function
const getTime = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Rotating time pointers
  const timeInterval = 6;
  secondsHand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minutesHand.style.transform = "rotate(" + minutes * timeInterval + "deg)";
  hoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
};
setInterval(getTime, 100);
