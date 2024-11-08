function solution(arr) {
    const answer = arr.reduce((acc, cur) => acc + cur);
    return answer / arr.length;
}