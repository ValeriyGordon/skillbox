
// burger
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__burger').addEventListener('click', function(){
    document.querySelector('#header__list--adaptive').classList.toggle('is-active')
  })
})
