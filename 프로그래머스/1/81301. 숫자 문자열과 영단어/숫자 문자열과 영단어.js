function solution(s) {
    let num = s;
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < arr.length; i++) {
        num = num.replaceAll(arr[i], i);
    }
    return Number(num);
}
