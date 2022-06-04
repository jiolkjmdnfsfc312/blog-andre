'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});


/*=============== SHOW MODAL ===============*/
const allToggleModal = document.querySelectorAll('[data-toggle="modal"]')

allToggleModal.forEach(btn=> {
	btn.addEventListener('click', function (e) {
		e.preventDefault()
		const modal = document.querySelector(this.dataset.target)
		const modalClose = modal.querySelector('.modal__close')

		modal.classList.add('show')

		modalClose.addEventListener('click', function (e) {
			e.preventDefault()
			modal.classList.remove('show')
		})
	})
})



document.addEventListener('click', function (e) {
	if(e.target.matches('.modal')) {
		e.target.classList.remove('show')
	}
})