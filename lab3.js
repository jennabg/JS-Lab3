var studentNumX = /(n|N)\d{8}/;

function checkHumbrId(studentNum){

  let validNum = false;

  if (studentNum == ''){
    validNum = false;
  }
  else if (validNumX.test(studentNum)){
    validNum = true;
  }
  return validNum;
}
