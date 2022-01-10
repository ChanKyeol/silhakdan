function fiboRecursive(idx) {
    if(idx === 1) return 1;
    if(idx === 2) return 1;
    if(idx >= 3) return fiboRecursive(idx - 2) + fiboRecursive(idx - 1);
  }
  


console.log(fiboRecursive(112));