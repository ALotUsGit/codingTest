function solution(arr) {
    let i = 0;
    while (Math.pow(2, i) < arr.length) i++;
    const leng = Math.pow(2, i) - arr.length;
    return arr.concat(Array(leng).fill(0));
}