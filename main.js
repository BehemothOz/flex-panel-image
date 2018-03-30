let panels = document.querySelectorAll('.panel');

function handleClick() {
  this.classList.toggle('open');
};

function activeToggle(e) {
  console.log(e.propertyName)

  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', handleClick))
panels.forEach(panel => panel.addEventListener('transitionend', activeToggle))