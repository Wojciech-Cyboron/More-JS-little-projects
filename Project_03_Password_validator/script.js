const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const Pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const clearBtn = document.querySelector('.clear')
const sendBtn = document.querySelector('.send')
const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.close')

const arr = [username, pass, Pass2, email]

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === '') {
      showError(el, el.placeholder)
    } else {
      cleanUpError(el)
    }
  })
}

const showError = (input, placeholder) => {
  const formBox = input.parentElement
  const errorMsg = formBox.querySelector('.error-text')
  formBox.classList.add('error')
  errorMsg.textContent = placeholder
}

const cleanUpError = (input) => {
  const formBox = input.parentElement
  formBox.classList.remove('error')
}

const checkLength = (input, minimal) => {
  if (input.value.length < minimal) {
    const inputName = input.previousElementSibling.innerText
    showError(
      input,
      `${inputName.slice(0, -1)} must contain at least ${minimal} characters`
    )
  }
}

const checkPassword = (password1, password2) => {
  if (password1.value !== password2.value) {
    showError(password2, 'Passwords are not the same')
  }
  console.log(password2.value)
}

const checkMail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

  if (re.test(email.value)) {
    cleanUpError(email)
  } else {
    showError(email, 'E-mail is incorrect')
  }
}

const sendForm = () => {
  const allInputs = document.querySelectorAll('.form-box')
  let errorCount = 0
  allInputs.forEach((el) => {
    if (el.classList.contains('error')) {
      errorCount++
    }
  })

  if (errorCount === 0) {
    popup.classList.add('show-popup')
  }
  console.log(errorCount)
}

sendBtn.addEventListener('click', (e) => {
  e.preventDefault()
  checkForm(arr)
  checkLength(username, 3)
  checkLength(pass, 6)
  checkPassword(pass, Pass2)
  checkMail(email)
  sendForm()
})

clearBtn.addEventListener('click', (e) => {
  e.preventDefault()

  arr.forEach((el) => {
    el.value = ''
    cleanUpError(el)
  })
})
