module.exports = function generate(isEven) {
  let isEvenFlag = isEven;
  let num = 0;
  return { next: function (swap) {
      isEvenFlag = swap ? !isEvenFlag : isEvenFlag;
      if (isEvenFlag) {
        if (num % 2 !== 0) {
          num++;
        } else {
          num += 2;
        }
      } else {
        if (num % 2 !== 0) {
          num += 2;
        } else {
          num++;
        }
      }
      return { value: num, done: false };
    }
  };
};

function generateSolve(isEven) {
  var num;
     
  if (isEven) {
    num = 0;
  } else {
    num = -1;
  }
       
  var myIterator = {
    next: function(swap) {
                          
      num += (swap ? 1 : 2);
                          
      return {
        value: num
      }
                            
    }
  }
          
  return myIterator;
}
