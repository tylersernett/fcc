function checkCashRegister(price, cash, cid) {
    //multiply by 100 & do math in cents to avoid floating point errors
    var dif = (cash - price)*100; 
    let ogcid = JSON.parse(JSON.stringify(cid));//make deep copy -- we return this if total == dif
    
    //find total cash available
    var total = 0;
    for (var type in cid) {
      cid[type][1] *= 100; //convert to cents
      total += cid[type][1];   
    } 
    
    if (total < dif) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (total == dif) {
      return {status: "CLOSED", change: ogcid}; //return deep copy
    }
    
    var change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    var vals = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]; //cents, not dollars to avoid floating point errors
    //var vals = [.01, .05, .10, .25, 1.00, 5.00, 10.00, 20.00, 100.00];
    
    //remove items from change drawer
    for (var i = vals.length; i >=0; i--) {
      while (vals[i] <= dif && cid[i][1] > 0) {
        change[i][1] += vals[i];
        cid[i][1] -= vals[i];
        dif -= vals[i]; 
      }
    }
  
    //check if total was enough, but bill variety was not enough
    if (dif > 0 ){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } 
    
    //clear out the unneeded data (where amount=0)
    for (var coin= 0; coin < change.length; coin++) {
      change[coin][1] /= 100; //convert back to dollars
      if (change[coin][1] == 0) {
        change.splice([coin],1);
        coin-=1;
      }
    }
    
    return {status: "OPEN", change: change.reverse()};
  }