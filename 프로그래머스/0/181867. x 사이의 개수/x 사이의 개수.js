function solution(myString) {
    const strArr = myString.split("x");
    const answer = strArr.map(str => str.length);
    return answer;
}