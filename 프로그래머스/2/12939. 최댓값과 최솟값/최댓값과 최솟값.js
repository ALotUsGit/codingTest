function solution(s) {
    const arr = s.split(" ").map(num => Number(num));
    const min = Math.min.apply(null, arr);
    const max = Math.max.apply(null, arr);
    return min + " " + max;
}