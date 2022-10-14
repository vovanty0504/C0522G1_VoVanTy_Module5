let sum: number = 0;
let size: number = 10;

function checkFibonacci(index: number): number {
    if (index == 0) {
        return 0;
    }
    if (index == 1) {
        return 1;
    }
    return checkFibonacci(index - 1) + checkFibonacci(index - 2);
}

let arr: Array<number> = [];

for (let i = 0; i < size; i++) {
    arr.push(checkFibonacci(i))
    sum += checkFibonacci(i);
}
console.log(arr);
console.log(sum);