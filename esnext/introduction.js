module.exports = function makeCounter(someObj, maxNum = 10) {
  let value = 0;
  let done = false;
  someObj.next = function () {
    if (value < maxNum) {
      value++;
    } else {
      done = true;
    }
    return { value, done };
  }
}
