function solution(number) {
    return [...number].reduce((arr, cur) => Number(arr) + Number(cur)) % 9;
}