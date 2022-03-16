var menu = document.querySelector('.mobile_menu');
var bar = document.querySelectorAll('.bars')
var elMobileMenu = document.querySelector('.mobile_menu_list')
var elMobileSearch = document.querySelector('.mobile__search'); 


menu.addEventListener('click',()=>{
    bar.forEach((el)=>{
        el.classList.toggle('open')
    })
    elMobileMenu.classList.toggle('move')
})

elMobileSearch.addEventListener('click',()=>{
  document.querySelector('.logo__txt').classList.toggle('d_none');
  document.querySelector('.mobile__search__form').classList.toggle('d_none')  
  menu.classList.toggle('d_none');
  document.querySelector('.mobile__phone').classList.toggle('d_none');
  document.querySelector('.mobile__cart').classList.toggle('d_none');
  elMobileSearch.classList.toggle('d_none')
})

// footer nav
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}