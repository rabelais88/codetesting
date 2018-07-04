/*
* 퀴즈2
* 참가자가 총 n명인 대회에서
* 참가자는 1부터 n까지의 번호를 부여받는다.
* 그중 참가자 a번과 b번 참가자가 맞붙는 것은 몇번째 라운드인가?
* 참고로 게임에 부전승은 없으며 한번에 이웃한 두명씩만 대결한다.
*/
function solution(n,a,b)
{
    let competitors = new Array(n).fill(0).map((el,idx)=>idx + 1)
    //simulate the whole game
    let finished = false
    let round = 0
    while(!finished){
      console.log(competitors)
      let nextRound = []
      for(let i = 0; i < competitors.length; i += 2){
        //if two meets, finish the match
        if((competitors[i] == a && competitors[i+1] == b) ||
            (competitors[i] == b && competitors[i+1] == a)) {
          console.log('two met!!', round)
          finished = true
        }

        if(competitors[i] == a || competitors[i+1] == a) {
          console.log(a + 'appeared!')
          nextRound.push(a)
        }else if(competitors[i] == b || competitors[i+1] == b) {
          console.log(b + 'appeared!')
          nextRound.push(b)
        }else{
          nextRound.push(competitors[i])
        }

        console.log(competitors[i], competitors[i+1])
      }
      competitors = nextRound
      round ++
    }
    return round
}
solution(8,4,7) // 3
solution(8,1,8) // 3
solution(8,1,3) // 2