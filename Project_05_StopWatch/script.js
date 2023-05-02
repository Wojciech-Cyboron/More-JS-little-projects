const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const stopbtn = document.querySelector('.stop');
const resetbtn = document.querySelector('.reset');
const archivebtn = document.querySelector('.history');

const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infobtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closebtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');

let root = document.documentElement;

let countTime;

let minuts = 0;
let seconds = 0;

let timeArchiveArr = [];

const handleStart = () => {
  clearInterval(countTime);

  countTime = setInterval(
    () => {
      if (seconds < 9) {
        seconds++;
        stopwatch.textContent = `${minuts}:0${seconds}`;
      } else if (seconds >= 9 && seconds < 59) {
        seconds++;
        stopwatch.textContent = `${minuts}:${seconds}`;
      } else {
        minuts++;
        seconds = 0;
        stopwatch.textContent = `${minuts}:00`;
      }
    },
    1000 
  );
};

const handlePause = () => {
  clearInterval(countTime);
};

const handleStop = () => {
  clearInterval(countTime);

  time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;
  if (stopwatch.textContent !== '0:00') {
    time.style.visibility = 'visible';
    timeArchiveArr.push(stopwatch.textContent);
  }

  clearStuff();
};

const handleReset = () => {
  time.style.visibility = 'hidden';
  timeArchiveArr = [];
  clearStuff();
};

const clearStuff = () => {
  stopwatch.textContent = '0:00';
  timeList.textContent = '';
  seconds = 0;
  minuts = 0;
};

const handleArchive = () => {
  timeList.textContent = '';
  let num = 1;

  timeArchiveArr.forEach((el) => {
    const newTime = document.createElement('li');
    newTime.innerHTML = `Pomiar nr ${num}: <span>${el}</span>`;

    timeList.appendChild(newTime);
    num++;
  });
};

const showModal = () => {
  if (!(modalShadow.style.display === 'block')) {
    modalShadow.style.display = 'block';
  } else {
    modalShadow.style.display = 'none';
  }

  modalShadow.classList.toggle('modal-animation');
};

startbtn.addEventListener('click', handleStart);
pausebtn.addEventListener('click', handlePause);
stopbtn.addEventListener('click', handleStop);
resetbtn.addEventListener('click', handleReset);
archivebtn.addEventListener('click', handleArchive);
infobtn.addEventListener('click', showModal);
closebtn.addEventListener('click', showModal);
window.addEventListener('click', (e) =>
  e.target === modalShadow ? showModal() : false
);

colorBtn.addEventListener('click', () => {
  colorPanel.classList.toggle('show-colors');
});

colorOne.addEventListener('click', () => {
  root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
  root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

colorTwo.addEventListener('click', () => {
  root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
  root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

colorThree.addEventListener('click', () => {
  root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
  root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
});
