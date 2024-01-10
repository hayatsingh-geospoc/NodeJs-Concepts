// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = { message: 'Data fetched successfully!' };
        // Resolve the Promise with the data
        resolve(data);
  
        // Uncomment the line below to simulate a failure (reject the Promise)
        // reject(new Error('Failed to fetch data!'));
      }, 2000);
    });
  }
  
  // Using the Promise
  fetchData()
    .then((result) => {
      console.log(result.message);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      console.log('Promise completed.');
    });
  