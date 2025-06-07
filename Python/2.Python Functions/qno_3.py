def fun(arr):
    if len(arr) == 0:
        return 0 ,0
    total = sum(arr)
    avg = total / len(arr)
    return total, avg
  
str = input("Enter the numbers separated by space: ")
arr = [int(i) for i in str.split()]
total, avg = fun(arr)
print("Total:", total)
print("Average:", avg)


