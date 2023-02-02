const manUtd = [["Rashford", 10], ["Bruno",8]];



function myVar(arr) {
    let myArr = [[1, 2, 3], [4, 5, 6]];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}



function greaterThan(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  console.log(greaterThan(5, 10));



  function compareValues(value1, value2) {
    if (value1 == value2) {
      return "Values are equal in value";
    } else {
      return "Values are not equal in value";
    }
  }
  
  console.log(compareValues(5, 5));
  console.log(compareValues(5, "5"));