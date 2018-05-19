module.exports = function *generate(isEven) {
  let num = isEven ? 0 : -1;
  while (true) {
    num += 2;
    yield num;
  }
}
