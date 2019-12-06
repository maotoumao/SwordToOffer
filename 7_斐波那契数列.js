function Fibonacci(n) {
    let fib = [0, 1];
    if (n < 2) {
        return fib[n];
    }
    for (let i = 2; i <= n; ++i) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

console.log(Fibonacci(39));