var stringArray = ["User1 ACGT","User2 TGCA", "User3 ACG", "User4 ACGT", "User5 ACG"];

var keyVal = {};


function mapRed(valIn){
  
  //format the input to make key/value pairs
  var inputVals = valIn;
  
  function reverseString(str) {
  return str.split('').reverse().join('');
  }
  
  for(var i = 0; i < inputVals.length; i++){
    var k1 = 0;
    var k2 = 0; //variable for reversed key
    var v1 = 0;
    var temp = inputVals[i].split(" ");
    for(var x = 0; x < temp.length; x++){
      if(x === 0){
        v1 = temp[x];
      }else {
        k1 = temp[x]; 
        k2 = reverseString(k1);
          
      }
    } //end for x
    
    //eliminate the reverse string
    if(keyVal.hasOwnProperty(k2)){
        k1 = k2;}
    
    if(keyVal.hasOwnProperty(k1)){
      keyVal[k1] += " " + v1;
    }else{keyVal[k1] = v1;}
    
    
  } //end for i
  
  return keyVal;
  
} //end function

mapRed(stringArray);
console.log(keyVal);