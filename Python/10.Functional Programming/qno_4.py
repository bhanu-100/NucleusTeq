def apply_to_all(func, items):
    return [func(item) for item in items]

result = apply_to_all(lambda x: x * 2, [1, 2, 3, 4])
print(result)
