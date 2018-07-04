/*
* 퀴즈1:
* 길이 n개의 행렬이 있으면 그중에서 1부터 n까지의 수가 모두 들어있나 확인하고
* 만약 하나라도 들어있지 않으면 false를, 전부 들어있으면 true를 반환
* 결과: * 10개중에 1~2개 틀린 것으로 나옴(시간초과/결과 초과로 나옴)
*/

function solution(arr) {
  console.log(arr)
  let answer = true
  let smallest = Math.min(...arr)
  const sample = new Array(arr.length).fill(0).map((el,idx)=>idx + smallest)
  arr = arr.sort()
  console.log(sample)
  for(let i = 0;i < arr.length;i++){
      console.log(arr[i], sample[i])
      if(arr[i] != sample[i]){
          answer = false
      }
  }
  return answer
}
let arr = [1,2,3,4,5]
console.log(solution(arr))
console.log('-----------------------')
arr = [2,3,5,7]
console.log(solution(arr))
console.log('-----------------------')
arr = [1,3,4,6]
console.log(solution(arr))

console.log('-----------------------')
arr = [1,2,9]
console.log(solution(arr))

console.log('-----------------------')
arr = [5,4,3,2,1]
console.log(solution(arr))

console.log('-----------------------')
arr = [3,2,4,1,5]
console.log(solution(arr))

console.log('-----------------------')
arr = [3,4,5,6,7]
console.log(solution(arr))