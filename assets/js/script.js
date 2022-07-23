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