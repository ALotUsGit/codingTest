function solution(myString) {
    const regex = /^[a-k]$/;
    let answer = [...myString].map(str => regex.test(str) ? str = "l" : str);
    return answer.join("");
}