const counter = document.querySelector('.counter')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')
const btnClr = document.querySelector('.btn-clr')
const number = document.querySelector('.number')

let countNum = 0

function updateCounter(n) {
  if(countNum + n < 0) {
    return
  }
  countNum += n
  number.textContent = countNum
}

btnInc.addEventListener('click', () => updateCounter(1) )
btnDec.addEventListener('click', () => updateCounter(-1))
btnClr.addEventListener('click', () => updateCounter(-countNum))

