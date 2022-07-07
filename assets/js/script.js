'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

/*-----------------------------------*\
  #Modal Demo
\*-----------------------------------*/
(function () {
  "use strict";

  var DEFAULT_DURATION = 300,
    TRANSITION_CLASSES = {
      transitioningIn: "is-transitioning-in",
      transitionedIn: "is-visible",
      transitioningOut: "is-transitioning-out",
      transitionedOut: "is-hidden"
    },
    SCROLL_LOCK_CLASS = "is-scroll-locked",
    bodyEl = document.body,
    timeoutId,
    triggerEl;

  toArray(document.querySelectorAll("[data-trigger]")).forEach(function (el) {
    var targetEl = document.getElementById(el.getAttribute("data-trigger"));
    var closeEls, dialogEl, durationIn, durationOut;

    if (!targetEl) return;

    closeEls = toArray(targetEl.querySelectorAll("[data-close], button"));
    dialogEl = targetEl.querySelector("[role=dialog]");
    durationIn = parseInt(targetEl.getAttribute("data-in"));
    durationOut = parseInt(targetEl.getAttribute("data-out"));

    el.addEventListener("click", transitionIn);

    function transitionIn(event) {
      closeEls.forEach(function (el) {
        el.addEventListener("click", transitionOut);
      });

      doTransition(
        targetEl,
        TRANSITION_CLASSES.transitionedOut,
        TRANSITION_CLASSES.transitioningIn,
        TRANSITION_CLASSES.transitionedIn,
        !isNaN(durationIn) ? durationIn : DEFAULT_DURATION
      );
      
      bodyEl.classList.add(SCROLL_LOCK_CLASS);

      triggerEl = document.activeElement;

      focusLock.on(dialogEl);
    }

    function transitionOut(event) {
      if (closeEls.indexOf(event.target) < 0) return;

      closeEls.forEach(function (el) {
        el.removeEventListener("click", transitionOut);
      });

      doTransition(
        targetEl,
        TRANSITION_CLASSES.transitionedIn,
        TRANSITION_CLASSES.transitioningOut,
        TRANSITION_CLASSES.transitionedOut,
        !isNaN(durationOut) ? durationOut : DEFAULT_DURATION
      );
      
       bodyEl.classList.remove(SCROLL_LOCK_CLASS);

      focusLock.off(dialogEl);

      if (triggerEl) {
        triggerEl.focus();
        triggerEl = undefined;
      }
    }
  });

  function doTransition(el, toClear, active, end, timeout) {
    var classList = el.classList;

    classList.remove(toClear);
    classList.add(active);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function () {
      classList.remove(active);
      classList.add(end);
    }, timeout);
  }

  function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  }
})();

/*-----------------------------------*\
  #Loader
\*-----------------------------------*/
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}