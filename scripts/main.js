import kaplay from 'kaplay';

//de facut
// width - height dynamic
//add left - right - down Tutorial text next to timer
//add levles
//add blocks
//add background
//add block ground assets

const k = kaplay({
  width: 1280,
  height: 720,
});

k.loadSprite('Ghostiny', './assets/ghostiny.png');

k.setGravity(1400);

const player = k.add([
  k.sprite('Ghostiny'),
  k.pos(600, 670),
  k.area(),
  k.body(),
  k.offscreen(),
]);

player.onExitScreen(() => {
  k.go('gameover');
});

k.scene('gameover', () => {
  k.add([k.text('Game Over!'), k.pos(center())]);
});

player.onKeyDown('s', () => {
  player.moveBy(0, 10);
});

player.onKeyDown('d', () => {
  player.moveBy(5, 0);
});

player.onKeyDown('a', () => {
  player.moveBy(-5, 0);
});

player.onKeyDown('w', () => {
  if (player.isGrounded()) {
    player.jump();
  }
});

k.add([
  k.rect(k.width(), 100),
  k.pos(0, 700),
  k.area(),
  k.outline(3),
  k.body({ isStatic: true }),
]);

let counter = 0;
const counterUI = k.add([k.text('0'), k.pos(200, 200)]);

k.loop(1, () => {
  counter++;
  counterUI.text = counter.toString();

  const speeds = [100, 300, 500, 800, 1000];
  const currentSpeed = speeds[Math.floor(Math.random() * speeds.length)];

  k.add([
    k.rect(50, 50),
    k.pos(1280, 650),
    k.area(),
    k.body(),
    k.outline(3),
    k.move(k.vec2(-1, 0), currentSpeed),
  ]);
});

// loadBean();
// setGravity(1500);

// const player = add([sprite('bean'), pos(center()), area(), body]);

// add([
//   rect(width(), 48),
//   outline(4),
//   area(),
//   pos(0, height() - 48),
//   body({ isStatic: true }),
// ]);

// onKeyPress('space', () => {
//   if (player.isGrounded()) {
//     player.jump();
//   }
// });
