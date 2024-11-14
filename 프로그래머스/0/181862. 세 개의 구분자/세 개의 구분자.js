function solution(myStr) {
    const newArr = myStr.split(/[abc]/).filter(str => str.length);
    return newArr.length ? newArr : ["EMPTY"];
}