def process_numbers(numbers):
    filtered = filter(lambda x: x % 2 == 0, numbers)  # keep even numbers
    mapped = map(lambda x: x * x, filtered)           # square them
    return list(mapped)

nums = [1, 2, 3, 4, 5, 6]
result = process_numbers(nums)
print(result)
