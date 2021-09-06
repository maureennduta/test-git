const start = () => {
  setInterval(() => {
    console.log('Started...');
  }, 5000);
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
function multiplyTwoNos(myArray) {
  return myArray.map((e) => {
    return e * 2;
  });

}

start();
const sumOfTwo = add(3, 4);
const minus = sub(90, 38);
console.log(sumOfTwo, minus);
const myModulus = moduls(7, 4);
console.log('Modulus', myModulus);
const divide = div(5000, 25);
console.log(divide);
const tranformed = multiplyTwoNos([2, 3, 4, 5, 6]);
console.log('tranformed', tranformed);

