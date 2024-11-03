function solution(numbers, n) {
    let answer = 0;
    for (let num of numbers) {
        answer <= n ? answer += num : answer;
    }
    return answer;
}