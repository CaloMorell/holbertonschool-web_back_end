#!/usr/bin/node
function getResponseFromAPI() {
    // eslint-disable-next-line
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('true');
        reject(new Error('Error'));
      });
    });
  }
  export default getResponseFromAPI;