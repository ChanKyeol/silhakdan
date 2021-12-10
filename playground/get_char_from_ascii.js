

function printNum(num) {
    let willPrint = "";
    for(let i = 0; i <= num - 1; i++){
        willPrint += num;
    }
return willPrint;
}



function muchNum(num) {
    for(let i = 1; i <= num; i++){
        console.log(printNum(i));
    }
}

function getFromAscii(ac){
    if (ac < 65 || ac > 122) { 
        console.log("wrong number");
        return;
    };

    // 코드가이드           65  66  67  68  69  70 ...
    const upperAsciiArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // 코드가이드           97  98  99  100 101 102 ...
    const lowerAsciiArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    for (let i = 0; i < asciiArray.length; i++) {
        if (ac === asciiArray[i]) {
            return asciiArray[i];
        }
    }
}