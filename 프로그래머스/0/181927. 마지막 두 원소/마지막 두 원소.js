function solution(num_list) {
    const newArr = [...num_list];
    const lastNum = num_list[num_list.length - 1];
    const secToLast = num_list[num_list.length - 2];
    lastNum > secToLast ? newArr.push(lastNum - secToLast) : newArr.push(lastNum * 2);
    return newArr;
}