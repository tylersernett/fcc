function convertToRoman(num) {
    const rom = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const dec = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  
    let romStr = "";
    for (var i = dec.length; i >= 0; i--) {
      while (dec[i] <= num) {
        romStr += rom[i];
        num -= dec[i];
      }
    }
    return romStr;
  }
  
  //convertToRoman(36);