function solution(a, b) {
    const strA = String(a);
    return strA + b >= b + strA ? Number(strA + b) : Number(b + strA);
}