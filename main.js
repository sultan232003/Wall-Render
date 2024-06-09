let walls = [];
let ray;
let project;

const sceneW = canvas_width / 2;
const sceneH = canvas_height;
const scenewbit = sceneW / 10
const sceneHbit = sceneH / 10

// for (let i = 0; i < 4; i++) {
//   let x1 = random(sceneW);
//   let x2 = random(sceneW);
//   let y1 = random(sceneH);
//   let y2 = random(sceneH);
//   walls[i] = new Boundary(x1, y1, x2, y2);
// }
walls.push(new Boundary(0, 0, sceneW, 0));
walls.push(new Boundary(sceneW, 0, sceneW, sceneH));
walls.push(new Boundary(sceneW, sceneH, 0, sceneH));
walls.push(new Boundary(0, sceneH, 0, 0));
walls.push(new Boundary(scenewbit * 2, 0, scenewbit * 2, sceneHbit));
walls.push(new Boundary(scenewbit * 5, 0, scenewbit * 5, sceneHbit));
walls.push(new Boundary(scenewbit * 6, 0, scenewbit * 6, sceneHbit * 2));
walls.push(new Boundary(scenewbit * 3, sceneHbit, scenewbit * 3, sceneHbit * 3));
walls.push(new Boundary(scenewbit * 8, sceneHbit, scenewbit * 8, sceneHbit * 5));
walls.push(new Boundary(scenewbit * 9, sceneHbit, scenewbit * 9, sceneHbit * 2));
walls.push(new Boundary(scenewbit * 2, sceneHbit * 2, scenewbit * 2, sceneHbit * 3));
walls.push(new Boundary(scenewbit * 5, sceneHbit * 2, scenewbit * 5, sceneHbit * 3));
walls.push(new Boundary(scenewbit * 7, sceneHbit * 2, scenewbit * 7, sceneHbit * 3));
walls.push(new Boundary(scenewbit, sceneHbit * 3, scenewbit, sceneHbit * 4));
walls.push(new Boundary(scenewbit * 6, sceneHbit * 3, scenewbit * 6, sceneH));
walls.push(new Boundary(scenewbit * 9, sceneHbit * 3, scenewbit * 9, sceneHbit * 4));
walls.push(new Boundary(scenewbit * 3, sceneHbit * 4, scenewbit * 3, sceneHbit * 6));
walls.push(new Boundary(scenewbit, sceneHbit * 5, scenewbit, sceneHbit * 6));
walls.push(new Boundary(scenewbit * 2, sceneHbit * 5, scenewbit * 2, sceneHbit * 6));
walls.push(new Boundary(scenewbit * 4, sceneHbit * 5, scenewbit * 4, sceneHbit * 7));
walls.push(new Boundary(scenewbit * 7, sceneHbit * 5, scenewbit * 7, sceneHbit * 9));
walls.push(new Boundary(scenewbit * 9, sceneHbit * 5, scenewbit * 9, sceneHbit * 6));
walls.push(new Boundary(scenewbit * 8, sceneHbit * 6, scenewbit * 8, sceneHbit * 7));
walls.push(new Boundary(scenewbit, sceneHbit * 7, scenewbit, sceneHbit * 9));
walls.push(new Boundary(scenewbit * 5, sceneHbit * 7, scenewbit * 5, sceneHbit * 8));
walls.push(new Boundary(scenewbit * 9, sceneHbit * 7, scenewbit * 9, sceneHbit * 8));
walls.push(new Boundary(scenewbit * 3, sceneHbit * 8, scenewbit * 3, sceneHbit * 10));
walls.push(new Boundary(scenewbit * 4, sceneHbit * 8, scenewbit * 4, sceneHbit * 10));
walls.push(new Boundary(scenewbit * 8, sceneHbit * 9, scenewbit * 8, sceneHbit * 10));
walls.push(new Boundary(scenewbit, sceneHbit, scenewbit * 2, sceneHbit));
walls.push(new Boundary(scenewbit * 3, sceneHbit, scenewbit * 4, sceneHbit));
walls.push(new Boundary(scenewbit * 7, sceneHbit, scenewbit * 8, sceneHbit));
walls.push(new Boundary(0, sceneHbit * 2, scenewbit * 2, sceneHbit * 2));
walls.push(new Boundary(scenewbit * 4, sceneHbit * 2, scenewbit * 7, sceneHbit * 2));
walls.push(new Boundary(scenewbit * 8, sceneHbit * 2, scenewbit * 9, sceneHbit * 2));
walls.push(new Boundary(scenewbit * 2, sceneHbit * 3, scenewbit * 4, sceneHbit * 3));
walls.push(new Boundary(0, sceneHbit * 4, scenewbit * 5, sceneHbit * 4));
walls.push(new Boundary(scenewbit * 6, sceneHbit * 4, scenewbit * 8, sceneHbit * 4));
walls.push(new Boundary(scenewbit * 9, sceneHbit * 4, scenewbit * 10, sceneHbit * 4));
walls.push(new Boundary(scenewbit * 4, sceneHbit * 5, scenewbit * 5, sceneHbit * 5));
walls.push(new Boundary(scenewbit * 7, sceneHbit * 5, scenewbit * 9, sceneHbit * 5));
walls.push(new Boundary(0, sceneHbit * 6, scenewbit, sceneHbit * 6));
walls.push(new Boundary(scenewbit * 2, sceneHbit * 6, scenewbit * 3, sceneHbit * 6));
walls.push(new Boundary(scenewbit * 4, sceneHbit * 6, scenewbit * 6, sceneHbit * 6));
walls.push(new Boundary(scenewbit * 8, sceneHbit * 6, scenewbit * 9, sceneHbit * 6));
walls.push(new Boundary(scenewbit, sceneHbit * 7, scenewbit * 4, sceneHbit * 7));
walls.push(new Boundary(scenewbit * 2, sceneHbit * 8, scenewbit * 3, sceneHbit * 8));
walls.push(new Boundary(scenewbit * 4, sceneHbit * 8, scenewbit * 5, sceneHbit * 8));
walls.push(new Boundary(scenewbit * 7, sceneHbit * 8, scenewbit * 9, sceneHbit * 8));
walls.push(new Boundary(scenewbit, sceneHbit * 9, scenewbit * 2, sceneHbit * 9));
walls.push(new Boundary(scenewbit * 5, sceneHbit * 9, scenewbit * 6, sceneHbit * 9));
walls.push(new Boundary(scenewbit * 9, sceneHbit * 9, scenewbit * 10, sceneHbit * 9));
project = new Project();;

function draw() {
  ctx.clearRect(0, 0, canvas_width, canvas_height)
  ctx.save()
  ctx.fillStyle = "#2e2d2a"
  ctx.fillRect(canvas_width / 2, canvas_height / 2, canvas_width, canvas_height)
  ctx.fill()
  ctx.restore()
  if (keypressed == "ArrowLeft") {
    project.rotate(-0.10);
  } else if (keypressed == "ArrowRight") {
    project.rotate(0.10);
  } else if (keypressed == "ArrowUp") {
    project.move(5);
  } else if (keypressed == "ArrowDown") {
    project.move(-5);
  }
  for (let wall of walls) {
    wall.show();
  }
  project.show();    // CODE TO SHOW THE WALLS

  const scene = project.look(walls);
  const w = sceneW / scene.length;
  ctx.save()
  ctx.translate(sceneW, 0)
  for (let i = 0; i < scene.length; i++) {
    const sq = scene[i] * scene[i];
    const wSq = sceneW * sceneW;
    const b = utils.map(sq, 0, wSq, 255, 0)-150;
    const h = utils.map(scene[i], 0, sceneW, sceneH, 0);
    RectMode("center", i * w + w / 2, sceneH / 2, w + 1, h-100, rgbToHex(b, b, b))
  }
  ctx.restore()
  requestAnimationFrame(draw)
}
draw()
