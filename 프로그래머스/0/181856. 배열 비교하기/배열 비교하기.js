function solution(arr1, arr2) {
    let answer;
    if (arr1.length === arr2.length) {
        const a = arr1.reduce((acc, cur) => acc + cur);
        const b = arr2.reduce((acc, cur) => acc + cur);
        answer = a === b ? 0 : (a < b ? -1 : 1);
    } else {
        answer = arr1.length > arr2.length ? 1 : -1;
    }
    return answer;
}