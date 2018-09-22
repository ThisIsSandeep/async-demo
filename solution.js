// getCustomer(1, customer => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies(movies => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...');
//       });
//     });
//   }
// });

// Async and Await approach
async function notifyCustomer() {
  try {
    const customer = await getCustomer(1);
    console.log(customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log(movies);
      await sendEmail(customer.email, movies);
      console.log('Email is sent....');
    }
  } catch (error) {
    console.log(error.message);
  }
}

notifyCustomer();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Sandeep Bansal',
        isGold: true,
        email: 'email'
      });
    }, 1000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 1000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
