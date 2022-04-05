function palindrome(str) {
    /*
    let low = str.toLowerCase();
    let noSpace = low.replace(/[\W_]/g, ""); //string: only letters & numbers
    let letters = noSpace.split(''); //array of each letter
    let revArray = letters.reverse(); //reverse array
    let revString = revArray.join(''); //reverse string 
    */
    let noSpace = str.toLowerCase().replace(/[\W_]/g, "");
    let revString = noSpace.split('').reverse().join('').toLowerCase();
    return revString === noSpace;
  }