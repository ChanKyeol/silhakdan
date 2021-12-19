let a = 'abcde';
let b = 'c';

function remove_str(a, b){
    let return_str = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b)   
        return_str += a[i];
    }
    return return_str;
}

console.log(remove_str(a, b));
