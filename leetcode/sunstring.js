var lengthOfLongestSubstring = function(s) {
    const charMap = {}; // To store the most recent index of each character
    let maxLength = 0;
    let left = 0; // Left end of the sliding window
  
    for (let right = 0; right < s.length; right++) {
      if (charMap[s[right]] !== undefined) {
        left = Math.max(left, charMap[s[right]] + 1);
      }
      charMap[s[right]] = right;
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  };
  
console.log(lengthOfLongestSubstring("abcdbabcd"))
