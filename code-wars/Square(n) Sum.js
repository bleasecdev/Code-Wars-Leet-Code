function squareSum(numbers){
    output = [];
    for (let i = 0; i < numbers.length; i ++){
      output.push(numbers[i] ** 2)
    }
  
    answer = output.reduce((a,b) => a + b, 0)
    return answer;
  }