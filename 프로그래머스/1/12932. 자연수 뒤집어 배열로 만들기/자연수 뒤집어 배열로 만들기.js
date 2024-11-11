function solution(n) {
    let strArr = [...String(n)].reverse();
    return strArr.map(str => Number(str));
}