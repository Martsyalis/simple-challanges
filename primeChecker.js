function primeChecker(num) {
  // loop over numbers from 2 to 9
  for (let i = 2; i < 10; i++) {
    // if we already passed the number, break out of the loop;
    if (num <= i) {
      break;
    }
    // if number is divisible by any number between 2 and 9 return false
    if (num % i === 0) {
      return false;
    }
  }
  // return true only if number is not 0 or 1
  return num > 1;
}
console.log(primeChecker(0));
