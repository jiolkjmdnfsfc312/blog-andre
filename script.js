console.clear();

Splitting();

// Small helper to make sure the animation stays in sync.
requestAnimationFrame(() => {
  document.body.dataset.play = true;
});