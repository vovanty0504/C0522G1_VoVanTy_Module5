var sum = 0;
var count = 0;
while (count < 6) {
    var isPrime = true;
    // if (i == 2) {
    //     sum += i;
    //     count++;
    //     continue;
    // }
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);
