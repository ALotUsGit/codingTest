function solution(arr, intervals) {
    let answer = arr.filter((_, idx) => idx >= intervals[0][0] && idx <=intervals[0][1]);
    arr.forEach((num, idx) => {
        if (idx >= intervals[1][0] && idx <=intervals[1][1]) {
            answer.push(num);
        }
    })
    return answer;
}