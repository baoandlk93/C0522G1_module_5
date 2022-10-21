function fibonacci(number) {
    if (number == 1 || number == 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var sum = 0;
var count = 1;
while (count <= 30) {
    sum += fibonacci((count));
    console.log("số fibonacci thứ " + count + " là " + fibonacci(count));
    count++;
}
console.log("tổng " + (count - 1) + "số fibonacci là :" + sum);
