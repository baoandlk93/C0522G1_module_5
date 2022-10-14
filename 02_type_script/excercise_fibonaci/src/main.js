var seed1 = 0;
var seed2 = 1;
var seed3;
var fibonacci = 0;
for (var number = 2; number < 20; number++) {
    seed3 = seed1 + seed2;
    console.log(seed3);
    fibonacci += seed3;
    seed1 = seed2;
    seed2 = seed3;
}
console.log('tổng 20 số fibonacci ' + fibonacci);
