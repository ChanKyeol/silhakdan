
function solution(phoneNumber) {
  let answer = ''
  const lastFourNum = phoneNumber.slice(-4)
  for (let i = 0; i < phoneNumber.length - 4; i++) {
    answer += '*'
  }
  answer = answer + lastFourNum
  return answer
}

console.log(solution('12345678'))
