function solution(strArr) {
    let answer = {};
    strArr.forEach(str => {
       const ln = str.length;
        answer[ln]  = (answer[ln] || 0) + 1;
    });
    return Math.max(...Object.values(answer));
}