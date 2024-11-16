function solution(arr1, arr2) {
    return arr1.map((arr, i1) => arr.map((num, i2) => num + arr2[i1][i2]));
}