a  = int(input("Enter first number: "))
b  = int(input("Enter second number: "))

print(f"Before Swap :num1 is {a} and num2 is {b}")

a = a+b
b = a-b
a = a-b

print(f"After Swap :num1 is {a} and num2 is {b}")

