def divide(a, b):
    try:
        result = a / b
        print(f"Result: {result}")
    except ZeroDivisionError:
        print("Error: Division by zero is not allowed.")

num1 = int(input("Enter numerator: "))
num2 = int(input("Enter denominator: "))

divide(num1, num2)
