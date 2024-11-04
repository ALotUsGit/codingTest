function solution(n, control) {
    [...control].forEach(alp => alp === "w" ? n += 1 : alp === "s" ? n -= 1 : alp === "d" ? n += 10. : n -= 10);
    return n;
}