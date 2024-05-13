#!/usr/bin/node
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success === true) {
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('Error'));
      }
    });
  }