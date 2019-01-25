var studentNumX = /^(n|N)\d{8}$/;

function checkHumbrId(studentNum){

  let validNum = false;

  if (studentNum == ''){
    validNum = false;
  }
  else if (studentNumX.test(studentNum)){
    validNum = true;
  }
  return validNum;
}
