feather.replace();



particlesJS("particles-js", {
    particles: {
      number: {
        value: 1200,
        density: {
          enable: true,
          value_area: 789.1476416322727
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.48927153781200905,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 83.91608391608392,
          size: 1,
          duration: 3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

  const setupButton = document.getElementById("setup-button");
  const goBackButton = document.getElementById("go-back-button");
  setupButton.addEventListener("click", showContent);
  goBackButton.addEventListener("click", hideContent);

  function showContent() {
    document.getElementById("secondary-content").classList.remove("hide");
    document.getElementById("secondary-content").classList.add("show");
  }

  function hideContent() {
    document.getElementById("secondary-content").classList.remove("show");
    document.getElementById("secondary-content").classList.add("hide");
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