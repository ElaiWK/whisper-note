if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js');
  });
}

const cards = Array.from(document.querySelectorAll('.card'));
const navButtons = Array.from(document.querySelectorAll('.nav button'));

function openDay(id) {
  cards.forEach(function (card) {
    card.classList.toggle('open', card.id === id);
  });

  navButtons.forEach(function (button) {
    button.classList.toggle('on', button.dataset.t === id);
  });

  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

cards.forEach(function (card) {
  const header = card.querySelector('.head');
  header.addEventListener('click', function () {
    openDay(card.id);
  });
});

navButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    openDay(button.dataset.t);
  });
});
