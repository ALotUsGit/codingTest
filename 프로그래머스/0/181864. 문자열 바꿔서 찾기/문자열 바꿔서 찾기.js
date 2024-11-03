function solution(myString, pat) {
    const str = myString.split("").map(s => s === "A" ? "B" : "A").join("");
    const answer = str.includes(pat) ? 1 : 0;
    return answer;
}