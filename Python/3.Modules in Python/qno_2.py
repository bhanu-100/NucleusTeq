import math

def perform_math_operations(number, base=None, exponent=None):
    sqrt_result = math.sqrt(number)
    factorial_result = math.factorial(number)
    power_result = math.pow(base, exponent) if base is not None and exponent is not None else None
    return sqrt_result, factorial_result, power_result

if __name__ == "__main__":
    num = 5
    base = 2
    exp = 3

    sqrt_val, fact_val, power_val = perform_math_operations(num, base, exp)

    print(f"Square root of {num} is: {sqrt_val}")
    print(f"Factorial of {num} is: {fact_val}")
    print(f"{base} raised to the power {exp} is: {power_val}")
