// Simple swipe interaction for the mockup feed

const stack = document.getElementById('card-stack');
let startX = 0;
let currentCard = null;

function handleStart(e) {
  currentCard = e.target.closest('.item-card');
  if (!currentCard) return;
  startX = e.touches ? e.touches[0].clientX : e.clientX;
}

function handleMove(e) {
  if (!currentCard) return;
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const delta = x - startX;
  currentCard.style.transform = `translateX(${delta}px) rotate(${delta * 0.05}deg)`;
}

function handleEnd(e) {
  if (!currentCard) return;
  const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  const delta = x - startX;

  if (delta > 120) {
    // Swipe right (save)
    currentCard.style.transition = '0.3s ease-out';
    currentCard.style.transform = 'translateX(300px) rotate(20deg)';
    setTimeout(() => currentCard.remove(), 300);
  } else if (delta < -120) {
    // Swipe left (pass)
    currentCard.style.transition = '0.3s ease-out';
    currentCard.style.transform = 'translateX(-300px) rotate(-20deg)';
    setTimeout(() => currentCard.remove(), 300);
  } else {
    // Reset
    currentCard.style.transition = '0.2s ease-out';
    currentCard.style.transform = 'translateX(0) rotate(0)';
  }

  currentCard = null;
}

// Attach event listeners to all current and future cards
function attachSwipeListeners() {
  document.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('mousedown', handleStart);
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseup', handleEnd);

    card.addEventListener('touchstart', handleStart);
    card.addEventListener('touchmove', handleMove);
    card.addEventListener('touchend', handleEnd);
  });
}

attachSwipeListeners();
