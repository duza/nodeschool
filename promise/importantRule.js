'use strict';

const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (i) => i++;

Promise.resolve(iterate);
