const start = () => {
  console.lo('Started...');
}

const add = (x, y) => {
  return x + y
}

const sub = (x, y) => {
  return x - y;
}

const moduls = (x, y) => {
  return x % y;
}

const div = (x, y) => {
  return x / y
}

start();
const sumOfTwo = add(3, 4);
const minus = sub(90, 38);
console.log(sumOfTwo, minus);
const myModulus = moduls(7, 4);
console.log('Modulus', myModulus);
const divide = div(5000, 25);
console.log(divide);

