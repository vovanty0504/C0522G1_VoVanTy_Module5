var sum = 0;
var size = 10;
function checkFibonacci(index) {
    if (index == 0) {
        return 0;
    }
    if (index == 1) {
        return 1;
    }
    return checkFibonacci(index - 1) + checkFibonacci(index - 2);
}
var arr = [];
for (var i = 0; i < size; i++) {
    arr.push(checkFibonacci(i));
    sum += checkFibonacci(i);
}
console.log(arr);
console.log(sum);
