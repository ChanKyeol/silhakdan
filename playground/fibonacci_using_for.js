function fibo (idx) {
  let sumNum = 0;
    
    if (idx == 1 || idx == 2) { //early return 패턴
      return 1;
    }
    if (idx >= 3) {
      let curNum = 1;
      let bfNum = 1;
      for (let i = 3; i <= idx; i++) {
        sumNum = bfNum + curNum;
        bfNum = curNum;
        curNum = sumNum;
      }

      return sumNum;
    }
        
}


