function solution(num_str) {
    var answer = [...num_str].reduce((acc, cur) => Number(acc) + Number(cur));
    return answer;
}