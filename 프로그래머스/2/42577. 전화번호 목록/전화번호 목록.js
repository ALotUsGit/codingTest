function solution(phone_book) {
    let answer = true;
    phone_book.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            answer = false;
        }

        if (!answer) break;
    } 
    
    return answer;
}