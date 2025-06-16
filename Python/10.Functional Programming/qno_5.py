def power_of(n):
    return lambda x: x ** n

square = power_of(2)
cube = power_of(3)

print(square(5))
print(cube(2))
