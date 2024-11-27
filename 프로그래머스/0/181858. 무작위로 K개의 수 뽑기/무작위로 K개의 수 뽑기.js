function solution(arr, k) {
    let answer = []
    arr.map(n => {
        if (!answer.includes(n) && answer.length < k) {
            answer.push(n);
        }
    });
    return answer.length === k ? answer : answer.concat(Array(k - answer.length).fill(-1));
}