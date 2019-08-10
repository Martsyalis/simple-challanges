function primeChecker(num) {
  for (let i = 2; i < 10; i++) {
    if (num <= i) {
      break;
    }
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(primeChecker(137));
