var prime = function () {
  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = 0; i < num.length; i++) {
    if (num[i] < 2) return false;

    for (let k = 2; k < num; k++) {
      if (num[k] % k == 0) {
        return false;
      }
    }
    console.log(num[k]);
  }
};
isPrime(7);
