function solution(strArr) {
    return strArr.map((srt, idx) => idx % 2 === 0 ? srt.toLowerCase() : srt.toUpperCase());
}