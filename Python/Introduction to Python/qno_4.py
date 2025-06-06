def reverse_integer(n):
    is_negative = False
    if n<0:
        is_negative = True
        n = -n
    
    reverse_number = 0
    while(n > 0):
        digit  = n%10
        reverse_number = reverse_number * 10 + digit
        n = n // 10

    if is_negative:
        reverse_number = -reverse_number

    return reverse_number

try:
    num = int(input("Enter an integer: "))
    reversed_num = reverse_integer(num)
    print(f"The reverse of {num} is {reversed_num}")
except ValueError:
    print("Invalid input! Please enter a valid integer.")

