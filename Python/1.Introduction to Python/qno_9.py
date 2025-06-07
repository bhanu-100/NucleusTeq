num = int(input(" Enter the number to print its fibbonacci series: "))
a = 0;
b = 1;
print("Fibonacci series:")
if(num == 1):
    print(a)
elif(num == 2):
    print(a,b)
else:
    print(a,b,end=' ')
    for i in range(2,num):
        c = a + b
        print(c, end=' ')
        a = b
        b = c
    print() 