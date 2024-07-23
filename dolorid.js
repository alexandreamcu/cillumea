let a = { x: 5, y: 15 };
let b = { x: 10, y: 20 };

// Calculate the distance between point a and point b
let distance = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

console.log(distance); // Output: 7.0710678118654755
