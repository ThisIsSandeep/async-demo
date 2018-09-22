// // Promise that already resolve
// const p = Promise.resolve({ id: 1 });
// p.then(result => console.log(result));

// // Promise that already rejected
// const p2 = Promise.reject(new Error('Something failed..'));
// p2.catch(error => console.log(error));

// --------------------- Parallel Promises ----------------------- //
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 1...');
    resolve(1);
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 2...');
    resolve(2);
  }, 2000);
});

// Promise.all([p1, p2]).then(result => console.log(result));
Promise.race([p1, p2]).then(result => console.log(result));
