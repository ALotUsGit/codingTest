function solution(arr) {
    let answer = [];
    arr.map(i => {
        for (let j = 0; j < i; j++) {
            answer.push(i);
        }
    });
    return answer;
}