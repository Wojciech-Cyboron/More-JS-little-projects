const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const infoTipCost = document.querySelector('.cost-info')
const finalTipCost = document.querySelector('.cost')

const splitTheTip = () => {
  if (price.value !== '' && people.value !== '' && tip.value !== '0') {
    splitEngin()
    error.textContent = ''
  } else {
    error.textContent = 'All fields must be completed!'
    infoTipCost.style.display = 'none'
  }
}

const splitEngin = () => {
  const valPrice = parseFloat(price.value)
  const valTip = parseFloat(tip.value)
  const valPeaple = parseInt(people.value)

  const toPay = (valPrice + valPrice * valTip) / valPeaple
  infoTipCost.style.display = 'block'

  finalTipCost.textContent = toPay.toFixed(2)
}

btn.addEventListener('click', splitTheTip)
