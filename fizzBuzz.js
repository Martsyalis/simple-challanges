function FizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    // create a variable we will be printing
    let result = "";
    // add Fizz if its divisible by 3
    if (i % 3 === 0) result += "Fizz";
    // add Buzz if its devisible by 5
    if (i % 5 === 0) result += "Buzz";
    // if result is still empty, add number itself
    if (!result) result = i;
    console.log(result);
  }
}
FizzBuzz();
