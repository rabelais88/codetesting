function solution(s)
{
    let answer = 0
    let finished = false
    s = s.split('')
    let matched = new RegExp('9','g')
    while(!finished){
        let matchSingleRun = 0
        s.forEach((el,idx)=>{
            if(el === s[idx + 1]){
                matchSingleRun++
                s[idx] = '9'
                s[idx + 1] = '9'
            }
        })
        s = s.join('').replace(matched,'').split('')
        if(matchSingleRun === 0) finished = true
    }
    if(s.length == 0) answer = 1
    return answer
}