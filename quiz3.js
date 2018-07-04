function solution(s)
{
    let answer = 0
    let finished = false
    //console.log(s.slice(0,2)) - exactly two characters
    s = s.split('')
    while(!finished){
        let matchSingleRun = 0
        s.forEach((el,idx)=>{
            if(el === s[idx + 1]){
                console.log('matched!', el,s[idx + 1])
                matchSingleRun++
                s[idx] = '9'
                s[idx + 1] = '9'
                console.log(s)
            }
        })
        //clear all recognized matches
        s = s.join('').replace(new RegExp('9','g'),'').split('')
        if(matchSingleRun === 0) finished = true
    }
    if(s.length == 0) answer = 1
    console.log(s)
    return answer
}
solution('baabaa')
solution('cdcd')