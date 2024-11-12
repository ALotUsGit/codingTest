function solution(a, b) {
    if (a === b) {
        return a;
    } else {
        let arr = [a, b].sort((b, c) => b - c);
        for (let i = arr[0]+1; i < arr[1]; i++) {
            arr.push(i);
        }
        return arr.reduce((acc, cur) => acc + cur);
    }
}