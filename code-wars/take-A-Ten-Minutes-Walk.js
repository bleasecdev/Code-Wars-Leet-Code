function isValidWalk(array) {
    // assign two variables (horizontal and vertical) to store the distance from starting location, set to 0
    let horizontal = 0;
    let vertical = 0;
  
    if (array.length !== 10){
      return false
    } else if (array.length === 10) {
  
    // iterate through the array and 
      array.forEach(function(ele, i){
        if (ele === 'n') vertical +=1;
        if (ele === 's') vertical -=1;
        if (ele === 'e') horizontal +=1;
        if (ele === 'w') horizontal -=1;
        console.log(horizontal, vertical);
      });
    }
    // if after iterating through the array, it equals zero, return true
    if (horizontal === 0 && vertical === 0) return true;
    else return false;
  }