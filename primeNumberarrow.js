const newArray = [1, 2, 3, 4, 5,6,7,8];
const prime = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(prime);