module.exports = function filterForNumbers(iterable){
  // const itr = iterable[Symbol.iterator]();
  const result = [];
  for (let i of iterable) {
    if (typeof i === 'number') {
      result.push(i);
    }
  }
  return result;
}
