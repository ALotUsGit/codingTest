function solution(num_list) {
    const plus = num_list.reduce((acc, cur) => acc + cur);
    const multi = num_list.reduce((acc, cur) => acc * cur);
    return (plus * plus) > multi ? 1 : 0;
}