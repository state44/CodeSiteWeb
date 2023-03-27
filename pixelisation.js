// Select the image element
const image = document.getElementById('myImage');

// Set the desired pixelation level
const pixelationLevel = 10;

// Get the image dimensions
const width = image.width;
const height = image.height;

// Create a canvas element and set its dimensions to match the image
const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;

// Get the canvas context and draw the image onto it
const context = canvas.getContext('2d');
context.drawImage(image, 0, 0, width, height);

// Disable image smoothing to ensure pixelation
context.imageSmoothingEnabled = false;

// Draw the pixelated version of the image onto the canvas
context.drawImage(canvas, 0, 0, width / pixelationLevel, height / pixelationLevel, 0, 0, width, height);

// Set the image source to the pixelated version of the canvas
image.src = canvas.toDataURL();
