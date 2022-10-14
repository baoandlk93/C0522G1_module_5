function fibonacci(number) {
    if (number == 1 || number == 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
let sum = 0;
let count = 0;
let number = 10;
while (count > number) {
    console.log(fibonacci(count));
    sum += count;
    count++;
}
console.log("Tổng " + number + "số Fibonacci là: " + sum);
//# sourceMappingURL=main.js.map