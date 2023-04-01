function isPalindrome(word) {
  // Write your algorithm here
   function reverseString(word) {
    return word.split("").reverse().join("");
   }
   const reversedString = (reverseString(word));
   return word === reversedString;
}

/* 
  Add your pseudocode here
  reverse the input string

  if the reversed input string is the same as the nput string
     return true else 
     return false
*/

/*
  Add written explanation of your solution here
   the function isPalindrome returns true if when the 
   reversed string is the same as when its not reversed
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: True");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: True");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: False");
  console.log("=>", isPalindrome("ab"));
  }

module.exports = isPalindrome;
