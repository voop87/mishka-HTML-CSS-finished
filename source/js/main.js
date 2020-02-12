//Показать главное меню
var closeMenuBtn = document.getElementById("page-header__menu-toggle");
closeMenuBtn.classList.add("page-header__menu-toggle--js");

var showMenu = function() {
  var mainNav = document.getElementById("main-nav");
  var searchAndCartMenu = document.getElementById("search-and-cart");

  mainNav.classList.toggle("main-nav--opened");
  searchAndCartMenu.classList.toggle("search-and-cart--opened");
  closeMenuBtn.classList.toggle("page-header__menu-toggle--closed");
};

//Показать модальное окно
var showModal = function() {
  var modal = document.getElementById("modal");

  modal.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};
