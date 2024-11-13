function solution(phone_number) {
    return [...phone_number].map((num, idx) => num = idx < (phone_number.length - 4) ? "*" : num).join("");
}
