function cleanInputString(str) {
    const regex = /[^a-z0-9]/gi; // Keep alphanumeric characters and remove the rest
    return str.replace(regex, '');
  }
  
  const input = document.querySelector("#text-input");
  const button = document.querySelector("#check-btn");
  const result = document.querySelector("#result");
  
  const checkForPalindrome = () => {
    const inputValue = input.value.toLowerCase(); 
    const cleanedInputValue = cleanInputString(inputValue); // Clean the input string
  
    if (cleanedInputValue === '') {
      alert("Please input a value");
      return;  
    }
  
    const isPalindrome = (str) => {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    };
  
    if (isPalindrome(cleanedInputValue)) {
      result.innerHTML = `${inputValue} is a palindrome`;
    } else {
      result.innerHTML = `${inputValue} is not a palindrome`;
    }
  };
  
  button.addEventListener("click", checkForPalindrome);