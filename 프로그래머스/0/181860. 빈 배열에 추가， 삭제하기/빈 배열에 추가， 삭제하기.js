function solution(arr, flag) {
    let answer = [];
    flag.map((item,idx) => item ? answer.push(...new Array(arr[idx]*2).fill(arr[idx])) : answer.splice(-arr[idx]))
    return answer;
}