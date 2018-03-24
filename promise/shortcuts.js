'use strict';

let promise = Promise.reject(new Error('WAS REJECTED!'));
promise.then(console.log).catch((error) => {
    console.log('Catch an error!');
    console.log(error.message);
  });
