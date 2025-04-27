function solution(array, n) {
    const answer = array.filter(i => i === n);
    return answer.length;
}