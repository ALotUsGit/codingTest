function solution(numbers) {
    let numArr = [0, 1, 2, 3, 4, 5, 6, 7,  8, 9];
    let filter = numArr.filter(num => !numbers.includes(num));
    return filter.reduce((a, b) => a + b);
}