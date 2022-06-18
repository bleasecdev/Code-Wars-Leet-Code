function solution(str){

    if (str === ''){
      return [];
    }
      
    let newArr = str.split('');
     
      if (newArr.length % 2 !== 0){ 
      newArr.push('_')
      }
    
      let newStr = newArr.join('');
    
      let newArr2 = newStr.match(/.{1,2}/g);
    
     
      return newArr2;
      }
    
    console.log(solution(''))