function solution(num_list, n) {
    let answer = num_list.slice(n);
    let num = num_list.slice(0, n).forEach(a => answer.push(a));
    return answer;
}