function spaceStar (len, count) {
    let star = '*';
    let space = ' ';
    let printWord = '';
    for(let i = 0; i < (len * 2); i++){
        if(i < count) {
            printWord += star;
        } else if( i >= (len * 2) - count) {
            printWord += star;
        } else {
            printWord += space;
        }
    }
return printWord;
}

function drawDiamond (len) {
    for(let i = 0; i <= 1; i++){ 
        if(i === 0) {
            for(let j = len; j >= 1; j--){
                console.log(spaceStar(len, j));
            }
        }
        if(i === 1) {
            for(let j = 2; j <= len; j++){
                console.log(spaceStar(len, j));
            }
        }
    }
}