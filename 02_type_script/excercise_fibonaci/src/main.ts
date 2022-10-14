let seed1: number = 0;
let seed2: number = 1;
let seed3: number;
let fibonacci: number = 0;
for(let number = 2; number < 20; number++){
    seed3 = seed1 + seed2;
    console.log(seed3);
    fibonacci += seed3;
    seed1 = seed2;
    seed2 = seed3;
}
console.log('tổng 20 số fibonacci ' + fibonacci);