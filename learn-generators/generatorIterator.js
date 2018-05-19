function *factorial(n) {
  let num = 0;
  let product = 1;
  while (num < n) {
    num++;
    product = num * product;
    yield product;
  }
}

for (let i of factorial(5)) {
  console.log(i);
}
