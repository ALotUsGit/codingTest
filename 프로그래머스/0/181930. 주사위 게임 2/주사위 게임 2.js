function solution(a, b, c) {
    if (a === b && a === c) {
        return (a + b + c) * (Math.pow(a, 2) * 3) * (Math.pow(a, 3) * 3);
    } else if (a !== b && a !== c && b !== c) {
        return a + b + c;
    } else {
        return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    }
}