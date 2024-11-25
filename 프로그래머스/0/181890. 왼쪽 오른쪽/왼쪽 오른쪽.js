function solution(str_list) {
    const left = str_list.indexOf("l") < 0 ? 99 : str_list.indexOf("l");
    const right = str_list.indexOf("r") < 0 ? 99 : str_list.indexOf("r");
    
    if (str_list.includes("l") || str_list.includes("r")) {
        return left > right ? str_list.slice(right+ 1) : str_list.slice(0, left);
    } else {
        return [];
    }
}