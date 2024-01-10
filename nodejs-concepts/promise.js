// // Function that returns a Promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       // Simulate an asynchronous operation (e.g., fetching data from an API)
//       setTimeout(() => {
//         const data = { message: 'Data fetched successfully!' };
//         // Resolve the Promise with the data
//         resolve(data);

//         // Uncomment the line below to simulate a failure (reject the Promise)
//         // reject(new Error('Failed to fetch data!'));
//       }, 5000);

//     });
//   }

//   // Using the Promise
//   fetchData()
//     .then((result) => {
//       console.log(result.message);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     })
//     .finally(() => {
//       console.log('Promise completed.');
//     });

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  // If successful, call resolve(value)
  // If an error occurs, call reject(reason)
});

myPromise
  .then((result) => {
    // Do something with the result
    return anotherPromise; // Return a new Promise to continue the chain
  })
  .then((anotherResult) => {
    // Handle the result of the second Promise
  })
  .catch((error) => {
    // Handle any errors in the chain
  })
  .finally(() => {
    // This block is executed regardless of the Promise outcome
  });
