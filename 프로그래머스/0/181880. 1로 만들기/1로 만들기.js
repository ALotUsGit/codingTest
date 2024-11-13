function solution(num_list) {
    let answer = num_list.map(num => {
        let i = 0;
        while (num > 1) {
            num = num % 2 === 0 ? num / 2 : (num - 1) / 2;
            i++;
        }
        return num = i
    });
    return answer.reduce((acc, cur) => acc + cur, 0);
}