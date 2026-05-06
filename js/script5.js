// ── SÉLECTION DES ÉLÉMENTS DOM ──
const startScreen  = document.getElementById('startScreen');
const gameScreen   = document.getElementById('gameScreen');
const endScreen    = document.getElementById('endScreen');
const scoreEl      = document.getElementById('score');
const timerEl      = document.getElementById('timer');
const numEl        = document.getElementById('currentNumber');
const feedbackEl   = document.getElementById('feedback');
const finalScoreEl = document.getElementById('finalScore');
const numpad       = document.getElementById('numpad');

// ── ÉTAT DU JEU ──
let score          = 0;
let timeLeft       = 60;
let currentNumber  = 0;
let timerInterval  = null;
let numberInterval = null;
let feedbackTimeout = null;

// ── CONSTRUCTION DU PAVÉ NUMÉRIQUE (1 à 10) ──
for (let i = 1; i <= 10; i++) {
  const btn = document.createElement('button');
  btn.className   = 'num-btn';
  btn.textContent = i;
  btn.dataset.val = i;
  btn.addEventListener('click', () => handleGuess(i, btn));
  numpad.appendChild(btn);
}

// ── ÉVÉNEMENTS DES BOUTONS ──
document.getElementById('btnStart').addEventListener('click', startGame);
document.getElementById('btnRestart').addEventListener('click', () => {
  endScreen.classList.remove('active');
  startScreen.classList.add('active');
});

// ── UTILITAIRES ──
function showScreen(screen) {
  [startScreen, gameScreen, endScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function randomNum() {
  return Math.floor(Math.random() * 10) + 1;
}

// ── MISE À JOUR DU NOMBRE AFFICHÉ ──
function updateNumber() {
  currentNumber = randomNum();
  numEl.textContent = currentNumber;

  // Animation flash à chaque changement
  numEl.classList.remove('flash');
  void numEl.offsetWidth; // force reflow pour relancer l'animation
  numEl.classList.add('flash');
}

// ── GESTION DE LA RÉPONSE DU JOUEUR ──
function handleGuess(val, btn) {
  clearTimeout(feedbackTimeout);

  // Retirer les classes visuelles précédentes
  const allBtns = numpad.querySelectorAll('.num-btn');
  allBtns.forEach(b => b.classList.remove('hit', 'miss'));

  if (val === currentNumber) {
    // Bonne réponse : +1 point
    score++;
    scoreEl.textContent = score;
    btn.classList.add('hit');
    feedbackEl.textContent = '✓ CORRECT !';
    feedbackEl.className   = 'feedback correct';
  } else {
    // Mauvaise réponse : score inchangé
    btn.classList.add('miss');
    feedbackEl.textContent = '✗ RATÉ';
    feedbackEl.className   = 'feedback wrong';
  }

  // Effacer le feedback après 2000 ms
  feedbackTimeout = setTimeout(() => {
    feedbackEl.textContent = '';
    feedbackEl.className   = 'feedback';
    allBtns.forEach(b => b.classList.remove('hit', 'miss'));
  }, 2000);
}

// ── DÉMARRAGE DE LA PARTIE ──
function startGame() {
  // Réinitialisation
  score    = 0;
  timeLeft = 60;
  scoreEl.textContent = '0';
  timerEl.textContent = '60';
  timerEl.classList.remove('urgent');
  feedbackEl.textContent = '';
  feedbackEl.className   = 'feedback';

  showScreen(gameScreen);

  // Premier nombre immédiat
  updateNumber();

  // Changement de nombre toutes les 2000 ms
  numberInterval = setInterval(updateNumber, 2000);

  // Compte à rebours toutes les secondes
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    // Alerte visuelle sous 10 secondes
    if (timeLeft <= 10) {
      timerEl.classList.add('urgent');
    }

    // Fin de partie à 0
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// ── FIN DE PARTIE ──
function endGame() {
  clearInterval(timerInterval);
  clearInterval(numberInterval);
  finalScoreEl.textContent = score;
  showScreen(endScreen);
}