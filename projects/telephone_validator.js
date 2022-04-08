function telephoneCheck(str) {
    var regex = /^(1?)(\s|-?)(\(\d{3}\)|\d{3})(\s|-?)(\d{3})(\s|-?)(\d{4})$/;
    
    /* REGEX EXPLAINED:
    ^(1?)
    begginning of string should be 1 or not
    
    (\s|-?)
    space or dash or not
    
    (\(\d{3}\)|\d{3})
    (111) or 111
    
    (\s|-?)
    space or dash or not
    
    (\d{3})
    111
    
    (\s|-?)
    space or dash or not
    
    (\d{4})$
    4 digits at end
    /;
    
    */
    return regex.test(str);
  }