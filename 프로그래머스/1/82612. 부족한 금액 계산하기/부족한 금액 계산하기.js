function solution(price, money, count) {
    for (let i = 1; i <= count; i++) {
        if (i === count) {
            const result = money - (price * i);
            return result > 0 ? 0 : Math.abs(result);
        }
        money -= price * i;
    }
}