
exports.min = function min(arr) {
  let minNum;
  let result = 0;
  
  if (arr == undefined) return 0;
  
  if ((arr.length != undefined)&&(arr.length != 0))
  {	
      minNum = arr[0];
    
    for (let i = 0; i < arr.length; i++)
    { 
    //result = arr[i];
    
      if (arr[i] < minNum) minNum = arr[i];
    //minNum = Math.min(minNum,result);
    }
  }
  else
  {
    minNum = 0;
    return minNum;
  }
  return minNum;
}

exports.max = function max(arr) {
  let maxNum=0;
  let result=0;

  if (arr.length != undefined) 
  {	
    for (let i = 0; i < arr.length; i++) 
    { 
    result = arr[i];
    maxNum = Math.max(maxNum,result);
    }
  }
  else
  {
    maxNum = 0;
  }


  return maxNum;
}

exports.avg = function avg(arr) {
  let avgNum=0;
  let result=0;

  if (arr.length != undefined) 
  {	
	  for (let i = 0; i < arr.length; i++)
	  { 
	  result  += arr[i];
	
	  }
	  avgNum = (result/arr.length);
  }
  else
  {
	minNum = 0;
  }
 return avgNum;
}
