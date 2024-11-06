function solution(a, b) {
    let answer = 0;
    if (a % 2 === 0 && b % 2 === 0) {
        answer = a - b;
    } else if (a % 2 !== 0 && b % 2 !== 0) {
        answer = (a * a) + (b * b);
    } else {
        answer = 2 * (a + b);
    }
    return Math.abs(answer);
}