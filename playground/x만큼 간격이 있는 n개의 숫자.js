// https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript#

function solution(x, n) {
    var answer = []
    for (let i = 0; i < n; i++) {
        answer.push(x * (i + 1))
    }
    return answer
}

console.log(solution(2, 4))
