/*
* 퀴즈 3
* a부터 z까지의 알파벳 소문자가 임의로 주어졌을 때,
* 같은 알파벳이 두 번 반복되면 이를 제거하고 앞뒤로 이어붙인다.
* 그렇게 하여 또다른 알파벳이 두 번 반복되면 이를 또 제거한다
* 그렇게 하여 모든 알파벳이 제거되면 1을
* 제거되지 않으면 0을 반환한다.
* 10개중에 3~4개 틀린 것으로 나옴(시간초과/결과 초과로 나옴)
*/
function solution(s)
{
  console.log(s)
  let answer = 0
  let finished = false
  let thisRound = s.split('')
  while(!finished){
    let matched = 0
    thisRound.forEach((el,idx)=>{
      console.log(el,thisRound[idx+1])
      if(el === thisRound[idx + 1]){
        console.log('matches!')
        thisRound[idx] = '9'
        thisRound[idx+1] = '9'
        matched++
      }
    })
    thisRound = thisRound.filter(el=>el!='9')
    console.log('round summary =',thisRound)
    if(matched === 0) finished = true
    if(thisRound.length < 1){
      answer = 1
      finished = true
    }
  }
  return answer
}

console.log('answer------',solution('aabbbcccc'))
console.log('answer------',solution('aabccb'))
console.log('answer------',solution('abcdeeeff'))
console.log('answer------',solution('zdxyddddzdxy'))
console.log('answer------',solution('zxcvvcxz'))
console.log('answer------',solution('zxcvvcxzzz'))
console.log('answer------',solution('zxcvvcxzab'))
