function rot13(str, offset=13) {
  var decoded = "";
    
  for (var i = 0; i < str.length; i++) {
    var raw = str.charCodeAt(i);
    if (raw >=65 && raw <= 90 ) {
      raw +=offset;
      if (raw > 90) {
        raw -= 26; //return to start of alphabet
      }
    }  
    decoded += String.fromCharCode(raw);
  }
  return decoded;
}