function solution(numLog) {
    let answer = numLog.map((num, idx) => {
        const next = numLog[idx + 1];
        return num = num + (+1) === next ? "w" : num + (-1) === next ? "s" : num + (+10) === next ? "d" : "a"
    }).slice(0, numLog.length - 1);
    return answer.join("");
}
