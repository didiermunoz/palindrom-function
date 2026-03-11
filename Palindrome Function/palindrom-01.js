function isPalindrome(num){
  if (num < 0) {
    return false;
  }
  let og = num;
  let inv = 0;
  while (num > 0){
    let lastDigit = num %10;
    inv = (inv * 10) + lastDigit;
    num = (num - lastDigit)/10;
  }
  return og === inv;
}

isPalindrome(123);
isPalindrome(-1);
isPalindrome(121);
isPalindrome(112);
isPalindrome(22122);
