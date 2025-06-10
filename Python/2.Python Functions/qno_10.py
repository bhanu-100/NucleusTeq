def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]

if __name__ == "__main__":
    num = 10
    for i in range(num + 1):
        print(f"Fibonacci({i}) = {fibonacci(i)}")

    