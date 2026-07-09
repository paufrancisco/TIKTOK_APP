const answers = [
  "Oo, pero maghanap muna ng bagong work 😂",
  "Hintayin mo muna ng 3 business days",
  "Sige, pero don't tell your mother",
  "Huwag, delikado 'yan",
  "Bahala ka, ikaw naman gumagawa nito",
  "Malabo. Try mo ulit next week",
  "Go! Manifest mo na lang",
  "Wag muna, magpahinga ka muna",
  "Oo, kahit anong mangyari",
  "Ask ulit paulit-ulit hanggang sumagot si Diyos",
  "Sure! Pero mag-ipon ka muna",
  "Sleep on it. Tapos gawin mo pa rin",
  "Depende sa oras ng pag-tanong",
  "Chansing pa more, wag sumuko",
  "Skip mo muna 'yan, may mas importante",
  "Yes, pero sabihan mo muna ang best friend mo",
  "0% chance, sorry na lang",
  "Kung feel mo, go. Kung hindi, wag",
  "Third time's the charm daw",
  "Tanungin mo na lang ulit bukas ng umaga"
];

const die = document.getElementById('die');
const rollBtn = document.getElementById('rollBtn');
const boardInner = document.getElementById('boardInner');
const againBtn = document.getElementById('againBtn');
const faces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

function renderFlipAnswer(text){
  boardInner.innerHTML = '';
  const label = document.createElement('div');
  label.className = 'board-label';
  label.textContent = 'Resulta';
  boardInner.appendChild(label);

  const row = document.createElement('div');
  row.className = 'flip-row';
  const words = text.split(' ');
  let delay = 0;
  words.forEach((word) => {
    const tile = document.createElement('div');
    tile.className = 'flip-tile';
    tile.textContent = word;
    tile.style.animationDelay = delay + 'ms';
    delay += 60;
    row.appendChild(tile);
  });
  boardInner.appendChild(row);
}

function roll(){
  rollBtn.disabled = true;
  againBtn.style.display = 'none';
  boardInner.innerHTML = '<span class="placeholder-text">Bumabalot ang tadhana...</span>';
  die.classList.add('rolling');

  let ticks = 0;
  const tickInterval = setInterval(() => {
    die.textContent = faces[Math.floor(Math.random()*faces.length)];
    ticks++;
  }, 80);

  setTimeout(() => {
    clearInterval(tickInterval);
    die.classList.remove('rolling');
    die.textContent = faces[Math.floor(Math.random()*faces.length)];
    const answer = answers[Math.floor(Math.random()*answers.length)];
    renderFlipAnswer(answer);
    rollBtn.disabled = false;
    againBtn.style.display = 'inline-block';
  }, 900);
}

rollBtn.addEventListener('click', roll);
againBtn.addEventListener('click', roll);