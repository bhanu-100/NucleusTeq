def count_vowels(s):
    count = 0
    for c in s:
        if c.lower() in 'aeiou':
            count += 1
    return count
str = input("Enter a string: ")
print("Number of vowels in the string:", count_vowels(str))
