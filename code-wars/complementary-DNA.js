//create function called DNA that accpets a paramater of a string
function DNAStrand(string){

    splitString = string.split('');
    // declare an output to return my result 
    let strArray = [];
  
  
    //loop iterates through the string and replaces each character with the appropriate value. 
  for (let i = 0; i < splitString.length; i++){
    if (string[i] === 'A') {
      strArray.push('T')
    } if (string[i] === 'T'){
      strArray.push('A')
    } if (string[i]=== 'G'){
      strArray.push('C')
    } if (string[i] === 'C'){
      strArray.push('G');
    }
  }
    return strArray.join('');
  }
  
//Test  
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
  })
})