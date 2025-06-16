def divide_numbers():
    try:
        num1 = input("Enter first number: ")
        num2 = input("Enter second number: ")
        
        try:
            num1 = int(num1)
            num2 = int(num2)
            result = num1 / num2
            print(f"Result: {result}")
        except ZeroDivisionError:
            print("Error: Cannot divide by zero.")
    except ValueError:
        print("Error: Invalid input. Please enter numeric values.")


divide_numbers()
