(() => {
  const cards = [...document.querySelectorAll('.person-flip')];
  function updateLabels() {
    const zh = window.EXTEND_I18N?.getLanguage() === 'zh';
    document.querySelectorAll('.person-flip [data-en]').forEach(node => {
      node.textContent = node.dataset[zh ? 'zh' : 'en'];
    });
    cards.forEach(card => {
      const name = card.querySelector('.person-body h3').textContent;
      card.querySelector('.person-back-name').textContent = name;
      card.querySelector('.person-flip-button').setAttribute('aria-label', `${name} — ${zh ? '查看资料' : 'View Profile'}`);
      card.querySelector('.person-return-button').setAttribute('aria-label', `${name} — ${zh ? '返回照片' : 'Back to Photo'}`);
    });
  }
  function flip(card, showBack) {
    const front = card.querySelector('.person-front');
    const back = card.querySelector('.person-back');
    card.classList.toggle('is-flipped', showBack);
    front.inert = showBack;
    back.inert = !showBack;
    front.setAttribute('aria-hidden', String(showBack));
    back.setAttribute('aria-hidden', String(!showBack));
    card.querySelector('.person-flip-button').setAttribute('aria-expanded', String(showBack));
    card.querySelector(showBack ? '.person-return-button' : '.person-flip-button').focus({ preventScroll: true });
  }
  cards.forEach(card => {
    card.querySelector('.person-front').addEventListener('click', () => flip(card, true));
    card.querySelector('.person-return-button').addEventListener('click', () => flip(card, false));
    card.addEventListener('keydown', event => {
      if (event.key === 'Escape' && card.classList.contains('is-flipped')) flip(card, false);
    });
  });
  window.addEventListener('extend:languagechange', updateLabels);
  document.addEventListener('DOMContentLoaded', updateLabels);
})();
