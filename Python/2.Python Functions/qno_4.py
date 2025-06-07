def fibbonacci(n):
    if(n==1):
        return 0
    elif(n==2):
        return 1
    
    return fibbonacci(n-1) + fibbonacci(n-2)

num = int(input("Enter the number of terms in the Fibonacci series: "))
print(f"nth term of Fibonacci series is: {fibbonacci(num)}")