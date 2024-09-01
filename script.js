const company_id = document.getElementById('company_id')
const company__list__items = document.querySelector('.company__list__items')

company_id.addEventListener('click', () => {
  company__list__items.classList.toggle('display')
  product__list__items.classList.add('display')
  connect__list__items.classList.add('display')
})

const product_id = document.getElementById('product_id')
const product__list__items = document.querySelector('.product__list__items')

product_id.addEventListener('click', () => {
  product__list__items.classList.toggle('display')
  company__list__items.classList.add('display')
  connect__list__items.classList.add('display')
})

const connect_id = document.getElementById('connect_id')
const connect__list__items = document.querySelector('.connect__list__items')

connect_id.addEventListener('click', () => {
  connect__list__items.classList.toggle('display')
  product__list__items.classList.add('display')
  company__list__items.classList.add('display')
})

const hamburger_icon = document.getElementById('hamburger_icon')
const close_icon = document.getElementById('close_icon')
const nav = document.querySelector('.nav')

console.log(hamburger_icon)
console.log(nav)

hamburger_icon.addEventListener('click', () => {
  hamburger_icon.classList.add('display')
  close_icon.classList.remove('display')

  nav.style.left = '50%'
})

close_icon.addEventListener('click', () => {
  close_icon.classList.add('display')
  hamburger_icon.classList.remove('display')
  nav.style.left = '-100%'
})
