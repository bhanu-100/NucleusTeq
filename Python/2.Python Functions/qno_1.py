def factorial(n):
    ans = 1
    for i in range(1,n+1):
        ans = ans*i
    return ans 

num = int(input("Enter the number : "))
print(f"factorial of {num} is {factorial(num)}")