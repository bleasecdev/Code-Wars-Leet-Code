function fakeBin(x){
  //declare an output array for the result
const output = [];
  
  //split the given string of numbers into an array of strings; 
  const xSplit = x.split('')
 
  const arrayOfNum = [];

  //this for loop iterates through the array of strings, converts each string to a number, and pushes each into the array
  //arrayOfNum
  for (let i = 0; i < xSplit.length; i++){
  arrayOfNum.push(Number(xSplit[i]))
  }

  //this for loop iterates through the array of numbers and runs the appropriate conditional statements in order to 
  //push the desired result to the output array.
  for (let i = 0; i < arrayOfNum.length; i++){
    if(arrayOfNum[i] < 5){
      output.push(0)
    } else output.push(1);
  }
  
  //this line returns output as a joined string of numbers using the join method.  
return output.join('');

}