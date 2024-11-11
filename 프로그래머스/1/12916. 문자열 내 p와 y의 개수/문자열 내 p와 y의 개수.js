function solution(s){
    let p = [...s].filter(str => str.toLowerCase() === "p").length;
    let y = [...s].filter(str => str.toLowerCase() === "y").length;

    return p === y;
}