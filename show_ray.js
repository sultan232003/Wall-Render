class Project {
  constructor() {
    this.fov = 45;
    this.pos = vector.create(sceneW / 2, sceneH / 2);
    this.rays = [];
    this.heading = 0;
    for (let a = -this.fov / 2; a < this.fov / 2; a += 1) {
      this.rays.push(new Ray(this.pos, utils.degreesToRads(a)));
    }
  }

  rotate(angle) {
    this.heading += angle;
    let index = 0;
    for (let a = -this.fov / 2; a < this.fov / 2; a += 1) {
      this.rays[index].setAngle(utils.degreesToRads(a) + this.heading);
      index++;
    }
  }

  move(amt) {
    const vel = vector.fromAngle(this.heading);
    if (amt < 0) {
      this.pos.subtractFrom(vel);
    } else if (amt > 0) {
      this.pos.addTo(vel);
    }
  }

  update(x, y) {
    this.pos.x = x
    this.pos.y = y
  }

  look(walls) {
    const scene = [];
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          let d = utils.distance(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        drawline4val(this.pos.x, this.pos.y, closest.x, closest.y, "white") //CODE TO SHOW THE RAY 
      }
      scene[i] = record;
    }
    return scene;
  }

  show() {
    for (let ray of this.rays) {
      ray.show();
    }
  }
}
