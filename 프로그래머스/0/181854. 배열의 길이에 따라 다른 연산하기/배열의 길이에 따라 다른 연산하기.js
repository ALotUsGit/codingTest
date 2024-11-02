function solution(arr, n) {
const even = arr.length % 2 === 0;
    return even ? arr.map((a, idx) => idx % 2 !== 0 ? a + n : a) : arr.map((a, idx) => idx % 2 === 0 ? a + n : a);
}