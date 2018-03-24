'use strict';

const json = process.argv[2]; 

const parsePromised = (json) => {
  return new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(json));
    } catch (err) {
      reject(err);
    } 
  });
};

parsePromised(json)
  .then(console.log).
  catch((err) => {
    console.log(err.message);
  });
