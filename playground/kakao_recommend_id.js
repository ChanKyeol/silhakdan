function remove_char_from_str(a, b){
    let return_str = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b)   
        return_str += a[i];
    }
    return return_str;
}

function solution(new_id) {
    var answer = new_id;
    let ban_str = '~!@#$%^&*()=+[{]}:?,<>/';
    let pre_str = '';
    let save_str = '';

    //1단계
    answer = answer.toLowerCase();

    //2단계
    for (let i = 0; i < ban_str.length; i++) {
        answer = remove_char_from_str(answer, ban_str[i]);    
    }

    //3단계
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === '.' && answer[i-1] === answer[i]) {
            pre_str = pre_str;
        } else {
            pre_str += answer[i];    
        }  
    }
    answer = pre_str;

    //4단계
    if (answer[0] === '.') {
        answer = answer.slice(1, answer.length);
    }
    if(answer[answer.length - 1] === '.') {
        answer = answer.slice(0, answer.length - 1);
    }

    //5단계
    if (answer === '') {
        answer = 'a';
    }

    //6단계
    if (answer.length > 15) {
        answer = answer.slice(0, 15);
    }
    if(answer[14] === '.') {
        answer = answer.slice(0, 14);
    }

    //7단계
    if (answer.length <= 2) {
        save_str = answer
        if (answer.length === 1) {
            answer += answer[0];
        }
        for (let i = 0; i < 1; i++) {
            answer += answer[answer.length - 1];
        }

    }
    return answer;
}

// 나의 풀이는 길고도 길구나.. 

const solution1 = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')        
    return id.padEnd(3, id[id.length-1])
}

// 깔끔한 정규식 풀이 

function solution2(new_id) {
    // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환
    new_id = new_id.toLowerCase();

    // 2단계 알페벳 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
    new_id = new_id.match(/[\w-.]+/g).join('')

    // 3단계 마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환
    new_id = new_id.replace(/\.{2,}/g, ".")

    // 4단계 처음이나 끝에 위치한 마침표 제거
    new_id = new_id.startsWith('.') ? new_id.slice(1) : new_id
    new_id = new_id.endsWith('.') ? new_id.slice(0, new_id.length-1) : new_id

    // 5단계 빈 문자열이라면 "a"를 대입
    new_id = (!new_id) ? "a" : new_id

    // 6단계 길이가 16이상이면 첫 15개 제외 나머지 문자 모두 제거
    new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id
    // 만약 제거 후 마침표가 끝에 위치하면 해당 마침표 제거
    new_id = new_id.endsWith('.') ? new_id.slice(0, new_id.length-1) : new_id

    // 7단계 길이가 2이하면 마지막 문자를 길이가 3이 될때까지 반복해서 끝에 추가
    new_id = new_id.length <= 2 
        ? new_id + new_id.charAt(new_id.length-1).repeat(3-new_id.length)
        : new_id

    let answer = new_id;
    return answer;
}

// ? : 이게 삼항연산그런거인가

const solution3 = id => {
    id = id.toLowerCase()
    id = removeInvalidChar(id)
    id = removeInvalidDots(id)
  
    if (!id) {
      id = 'a'
    }
  
    if (id.length > 15) {
      id = id.slice(0, 15)
    }
  
    id = removeInvalidDots(id)
  
    if (id.length < 3) {
      let lastChild = id.charAt(id.length - 1)
  
      do {
        id += lastChild
      }
      while (id.length === 2)
    }
  
    return id
  }
  
  const removeStrIndex = (str, index) => {
    let result = str.split('')
    result.splice(index, 1)
  
    return result.join('')
  }
  
  const removeInvalidChar = str => {
    for (let i = 0; i < str.length; i++) {
      if (!(
        str.charCodeAt(i) === 45 ||
        str.charCodeAt(i) === 46 ||
        str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 ||
        str.charCodeAt(i) === 95 ||
        str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
      )) {
        str = str.replace(str[i], '')
        i--
      }
    }
  
    return str
  }
  
  const removeInvalidDots = str => {
    do {
      str = str.replace('..', '.')
    }
    while (str.indexOf('..') > -1)
  
    if (str.startsWith('.')) {
      str = removeStrIndex(str, 0)
    }
    if (str.endsWith('.')) {
      str = removeStrIndex(str, str.length - 1)
    }
  
    return str
  }

  // 유일하게 '찢었다' 'cool'이라는 댓글이 달린.. 왜인지는 잘 모르게슴