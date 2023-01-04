const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

// Create html image object for passing the image
const image = new Image();
image.src = "./img/PelletTownZoom.png";

console.log(image);

// Once the image loads, apply this function
image.onload = () => {
  c.drawImage(image, -400, -400);
};
