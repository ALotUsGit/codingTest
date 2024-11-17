function solution(s) {
    const regex = /^\d+$/;
    return regex.test(s) && (s.length === 4 || s.length === 6);
}