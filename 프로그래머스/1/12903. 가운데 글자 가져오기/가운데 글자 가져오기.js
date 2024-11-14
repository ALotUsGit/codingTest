function solution(s) {
    let divide = s.length / 2;
    return s.length % 2 === 0 ? s.slice(divide - 1, divide + 1) : s[Math.floor(divide)];
}