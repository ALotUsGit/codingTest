function solution(n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(new Array(0));
        for (let j = 0; j < n; j++) {
            answer[i].push(j === i ? 1 : 0);
        }
    }
    return answer;
}