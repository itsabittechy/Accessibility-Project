'use strict';

const lightSwitch = document.getElementById('light-switch');

function handleClick() {
  const isPressed = lightSwitch.getAttribute('aria-pressed') === 'true';
  lightSwitch.setAttribute('aria-pressed', !isPressed);
  document.body.classList.toggle('dark-mode', isPressed);
}

lightSwitch.addEventListener('click', handleClick);
