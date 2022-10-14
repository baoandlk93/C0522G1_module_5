let seed1 = 0;
let seed2 = 1;
let seed3;
let fibonacci = seed1 + seed2;
for (let number = 2; number < 20; number++) {
    seed3 = seed1 + seed2;
    fibonacci += seed3;
    seed1 = seed2;
    seed2 = seed3;
}
console.log(fibonacci);
//# sourceMappingURL=main.js.map