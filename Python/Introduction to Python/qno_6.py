num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

print("what do you want to do with these numbers?")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

choice  = int(input("Enter your choice (1/2/3/4): "))
if choice == 1:
    print(f"The sum of {num1} and {num2} is {num1 + num2}")
elif choice == 2:
    print(f"The difference of {num1} and {num2} is {num1 - num2}")
elif choice == 3:
    print(f"The product of {num1} and {num2} is {num1 * num2}")
elif choice == 4:
    if num2 != 0:
        print(f"The quotient of {num1} and {num2} is {num1 / num2}")
    else:
        print("Error: Division by zero is not allowed.")
else:   
    print("Invalid choice. Please select a valid operation (1/2/3/4).")
