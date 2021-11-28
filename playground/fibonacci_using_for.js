function fibo (idx) {
  let sumNum = 0;
    
    if (idx == 1 || idx == 2) { //early return 패턴
      return 1;
    }
    if( idx >= 3) {
      let curNum=1;
      let bfNum=1;
      for ( let i=1; i<=idx-2; i++){
      sumNum = bfNum + curNum;
      bfNum = curNum;
      curNum = sumNum;
      }

      return sumNum;
    }
        
}

// console.log(fibo(3));
// console.log(fibo(4));
// console.log(fibo(5));
// console.log(fibo(6));
// console.log(fibo(20));
// console.log(fibo(70));
[3, 4, 5, 6, 20, 70].forEach((i) => console.log(i)); //forEach 사용으로 코드
