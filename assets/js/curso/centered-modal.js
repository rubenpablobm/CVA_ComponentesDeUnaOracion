setTimeout(() => {
  var main_window = document.querySelector('.main-content');
  resizeModals();


  setTimeout(() => {
    var toggle_btn = document.querySelectorAll('.side-nav-toggle')[1];
    toggle_btn.setAttribute('onclick', 'resizeModals()');
  }, 200);
}, 200);



function resizeModals() {
  setTimeout(() => {
    var main_window = document.querySelector('.main-content');
    var modales = document.querySelectorAll('.modal');

    for (let i = 0; i < modales.length; i++) {
      modales[i].setAttribute('style', "width: " + main_window.clientWidth + "px !important; left: unset; right: 0;");
    }
  }, 500);
}