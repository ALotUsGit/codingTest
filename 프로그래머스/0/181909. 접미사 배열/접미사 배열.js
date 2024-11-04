function solution(my_string) {
    let answer = [];
    for (let i = my_string.length; i >= 1; i--) {
        answer.push(my_string.substring(my_string.length - i));
    }
    return answer.sort();
}