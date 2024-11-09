function solution(binomial) {
    let [a, op, b] = binomial.split(" ");
    let numA = Number(a);
    let numB = Number(b);
    return op === "+" ? numA + numB : op === "-" ? numA - numB : numA * numB;
}
