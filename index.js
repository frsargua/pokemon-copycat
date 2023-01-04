const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

// Create html image object for passing the image
const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

const image = new Image();
image.src = "./img/PelletTownZoom.png";

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: {
    x: -580,
    y: -460,
  },
  image: image,
});

const keys = {
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
  if (keys.w.pressed && previousKey === "w") {
    background.position.y = background.position.y + 3;
  }
  if (keys.s.pressed && previousKey === "s") {
    background.position.y = background.position.y - 3;
  }
  if (keys.a.pressed && previousKey === "a") {
    background.position.x = background.position.x + 3;
  }
  if (keys.d.pressed && previousKey === "d") {
    background.position.x = background.position.x - 3;
  }
}

animate();

let previousKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      previousKey = "w";
      break;
    case "s":
      keys.s.pressed = true;
      previousKey = "s";
      break;
    case "a":
      keys.a.pressed = true;
      previousKey = "a";
      break;
    case "d":
      keys.d.pressed = true;
      previousKey = "d";
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
  }
});
