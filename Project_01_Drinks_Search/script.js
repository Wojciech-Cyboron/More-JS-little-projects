const input = document.querySelector('.search')
const drinks = document.querySelectorAll('li')

const datesTaped = () => {
  const data = input.value.toLowerCase()
  //   console.log(data);

  drinks.forEach((el) => {
    const text = el.textContent.toLowerCase()
    // console.log(text);
    if (text.indexOf(data) !== -1) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  })
}

input.addEventListener('keyup', datesTaped)
