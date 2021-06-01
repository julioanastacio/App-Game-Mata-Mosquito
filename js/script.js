let height = 0;
let widht = 0;
let hearts = 1;
let time = 10;

let makeGnatTime = 1500;

let level = window.location.search;
level = level.replace('?', '');

if (level === 'normal') {
  makeGnatTime = 1500;
} else if (level === 'dificil') {
  makeGnatTime = 1000;
} else if (level === 'insano') {
  makeGnatTime = 750;
}

function adjustsWindow() {
  height = window.innerHeight;
  widht = window.innerWidth;
}

adjustsWindow();

let stopwatch = setInterval(() => {
  time--;
  if (time < 0) {
    clearInterval(stopwatch);
    clearInterval(createGnat);
    window.location.href = 'victory.html';
  } else {
    document.getElementById('timer').innerHTML = time;
  }
}, 1000);

function randomPosition() {
  if (document.getElementById('gnat')) {
    document.getElementById('gnat').remove();
    console.log(hearts);
    if (hearts > 3) {
      window.location.href = 'game_over.html';
    } else {
      document.getElementById('heart' + hearts).src = '/img/coracao_vazio.png';
      hearts++;
    }
  }

  let positionY = Math.floor(Math.random() * height) - 90;
  let positionX = Math.floor(Math.random() * widht) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  let gnat = document.createElement('img');
  gnat.src = '/img/mosca.png';
  gnat.className = randomSize() + ' ' + randomSide();
  gnat.style.left = positionX + 'px';
  gnat.style.top = positionY + 'px';
  gnat.style.position = 'absolute';
  gnat.id = 'gnat';
  gnat.onclick = function () {
    this.remove();
  };

  document.body.appendChild(gnat);
}

function randomSize() {
  let ramdomSize = Math.floor(Math.random() * 3);

  switch (ramdomSize) {
    case 0:
      return 'gnat';
    case 1:
      return 'gnat2';
    case 2:
      return 'gnat3 ';
  }
}

function randomSide() {
  let ramdomSide = Math.floor(Math.random() * 2);

  switch (ramdomSide) {
    case 0:
      return 'sideA';
    case 1:
      return 'sideB';
  }
}
