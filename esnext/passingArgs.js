module.exports = function *multiplier() {
  let num = 0;
  let rate = false;
  while (true) {
    num++;
    if (!rate) {
      rate = 1; 
    }
    rate = yield num * rate; 
  }
}
