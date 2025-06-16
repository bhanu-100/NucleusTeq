import re

def validate_phone(number):
    pattern = r'^\d{3}-\d{3}-\d{4}$'
    return bool(re.match(pattern, number))

print(validate_phone("123-456-7890"))  # True
print(validate_phone("1234567890"))    # False
print(validate_phone("12-3456-7890"))  # False
