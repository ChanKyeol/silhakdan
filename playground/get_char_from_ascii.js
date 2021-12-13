

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
    let asciiArray = ['A','B','C','D','E','F','G','H','I',
                 'J','K','L','M','N','O','P','Q','R',
                 'S','T','U','V','W','X', 'Y', 'Z',
                 'a', 'b', 'c', 'd', 'e', 'f', 'g',
                 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                 'o', 'p', 'q', 'r', 's', 't', 'u', 
                 'v', 'w', 'x', 'y', 'z'];
    
    if(ac < 65){
        console.log("wrong number");
        return;
    } 
    if (ac > 122) {
        console.log("wrong number");
        return;
    } 
        
    for(let i = 0; i <= asciiArray.length - 1; i ++){
            if(ac === asciiArray[i]){
                return asciiArray[i];
            }
        }
    
    
}