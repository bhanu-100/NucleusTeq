def infinite_fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

for num in infinite_fibonacci():
    print(num)
    if num > 1000:
        break
