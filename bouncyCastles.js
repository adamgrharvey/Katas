// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function(radius) {
  return (radius * radius * radius * PI * 4 / 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  const base = PI * radius * radius;
  return base * height / 3;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  const base = width * depth;
  return base * height;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let total = 0;
  for (let entries in solids) {
    switch (solids[entries].type) {
    case 'sphere': total += sphereVolume(solids[entries].radius); continue;
    case 'cone': total += coneVolume(solids[entries].radius, solids[entries].height); continue;
    case 'prism': total += prismVolume(solids[entries].height, solids[entries].width, solids[entries].depth); continue;
    }
  }
  return total;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];


console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);