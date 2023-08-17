function calculateFrequency(arr) {
    const frequencyMap = {};
    
    for (const num of arr) {
        console.log(frequencyMap[num])
      //frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    
    return frequencyMap;
  }
  
  const array = [4, 1, 2, 2, 6, 7, 1, 6, 4, 2];
  const frequency = calculateFrequency(array);
  console.log(frequency);