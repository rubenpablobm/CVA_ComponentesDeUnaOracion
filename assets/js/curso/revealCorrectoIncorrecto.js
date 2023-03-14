const palabrasCorrectas = document.querySelectorAll('[data-correct]')
const palabrasIncorrectas = document.querySelectorAll('[data-incorrect]')

palabrasCorrectas.forEach(palabra => {
  palabra.addEventListener('click', () => {
    palabra.classList.add('correcto-color')
  })
});

palabrasIncorrectas.forEach(palabra => {
  palabra.addEventListener('click', () => {
    palabra.classList.add('incorrecto-color')
  })
})