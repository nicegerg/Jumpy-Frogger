function Pipe() {
  this.spacing = 180;
  this.bottom = random(height / 6, (2.5 / 4) * height);

//defining the width of the pipe and the approaching speed
  this.x = width;
  this.w = 50;
  this.speed = 4;

//defining the color and the size of the pipe
  this.show = function () {
    fill(91, 237, 38);
    stroke(91, 237, 38);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = function () {
    this.x -= this.speed;
  };

  this.offscreen = function () {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}
