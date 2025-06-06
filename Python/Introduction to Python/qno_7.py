num1 = int(input("Enter the number to ckeck whether it is prime or not: "))
is_prime = True
if num1 < 2:
    is_prime = False
else:
    for i in range(2, int(num1**0.5) + 1):
        if num1 % i == 0:
            is_prime = False
            break
    if is_prime:
        print(f"{num1} is a prime number.")
    else:
        print(f"{num1} is not a prime number.")