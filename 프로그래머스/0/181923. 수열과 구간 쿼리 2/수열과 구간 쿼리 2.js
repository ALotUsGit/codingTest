function solution(arr, queries) {
    let answer = queries.map(query => {
        const filter = arr.slice(query[0], query[1] + 1).filter(num => query[2] < num);
        return filter.length === 0 ? -1 : Math.min(...filter);
    });
    return answer;
}