function solution(a, b) {
    const plus = Number(String(a) + b);
    const multi = 2 * a * b;
    return plus >= multi ? plus : multi;
}