function solution(my_string, index_list) {
    let answer = [];
    index_list.forEach(num => answer.push(my_string[num]));
    return answer.join("");
}