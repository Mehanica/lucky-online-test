const countDownclocks = document.querySelectorAll(`.count-down-clock`);

const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  return {
    total,
    hours,
    minutes,
    seconds
  };
};

const initializeClock = (endtime) => {
  const clocks = document.querySelectorAll(`.count-down-clock__clockdiv`);
  clocks.forEach((clock) => {
    const hoursSpan = clock.querySelector(`.count-down-clock__hours`);
    const minutesSpan = clock.querySelector(`.count-down-clock__minutes`);
    const secondsSpan = clock.querySelector(`.count-down-clock__seconds`);

    function updateClock() {
      const t = getTimeRemaining(endtime);

      hoursSpan.innerHTML = (`0` + t.hours).slice(-2);
      minutesSpan.innerHTML = (`0` + t.minutes).slice(-2);
      secondsSpan.innerHTML = (`0` + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  });
};


const setCountDownClock = () => {
  if (countDownclocks.length) {
    const deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);
    initializeClock(deadline);
  }
};


export default setCountDownClock;
