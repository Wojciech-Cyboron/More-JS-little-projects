const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = [
  'Yes',
  'No',
  "you don't want to know",
  'Maybe',
  'Give a try!',
  "Don't wait!",
  "It's hard to say...",
];

const animationEngine = () => {
  ball.classList.add('shake-animation');
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  ball.classList.remove('shake-animation');
  if (input.value !== '' && input.value.slice(-2).indexOf('?') !== -1) {
    randomAnswer();
    error.textContent = '';
  } else if (input.value !== '') {
    error.textContent =
      'There must be a question mark at the end of the question';
    answer.textContent = '';
  } else {
    error.textContent = 'You need to ask the question';
    answer.textContent = '';
  }
};

const randomAnswer = () => {
  const number = Math.floor(Math.random() * answersArr.length);
  answer.innerHTML = `<span>Answer: </span> ${answersArr[number]}`;
};

const checkEnter = (e) => {
  if (e.key === 'Enter') {
    animationEngine();
  }
};

ball.addEventListener('click', animationEngine);
input.addEventListener('keyup', checkEnter);
