def sum_numbers(*args):
    total = sum(args)
    return total

if __name__ == "__main__":
    result1 = sum_numbers(1, 2, 3)
    print(f"Sum of 1, 2, 3 is: {result1}")

    result2 = sum_numbers(10, 20, 30, 40, 50)
    print(f"Sum of 10, 20, 30, 40, 50 is: {result2}")

    result3 = sum_numbers()
    print(f"Sum with no inputs is: {result3}")
